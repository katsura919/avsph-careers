"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, BriefcaseBusiness, CalendarDays, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";

type PublicJobPost = {
  _id: string;
  title: string;
  overview: string;
  employmentType: string;
  businessId: string;
  businessName?: string;
  createdAt: string;
};

type ApplicationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const initialFormData: ApplicationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  resume: "",
  coverLetter: "",
};

const JobApplicationPage = () => {
  const params = useParams<{ jobId: string }>();
  const jobId = useMemo(
    () => (typeof params?.jobId === "string" ? params.jobId : ""),
    [params],
  );

  const [job, setJob] = useState<PublicJobPost | null>(null);
  const [isJobLoading, setIsJobLoading] = useState(true);
  const [jobError, setJobError] = useState("");

  const [formData, setFormData] =
    useState<ApplicationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!API_BASE_URL) {
        setJobError(
          "Missing NEXT_PUBLIC_API_URL in environment configuration.",
        );
        setIsJobLoading(false);
        return;
      }

      if (!jobId) {
        setJobError("Invalid job post ID.");
        setIsJobLoading(false);
        return;
      }

      try {
        setIsJobLoading(true);
        setJobError("");

        const response = await fetch(`${API_BASE_URL}/public/jobs/${jobId}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          throw new Error(payload?.error || "Unable to load job details.");
        }

        const jobData: PublicJobPost = await response.json();
        setJob(jobData);
      } catch (error) {
        setJobError(
          error instanceof Error
            ? error.message
            : "Unable to load job details. Please try again.",
        );
      } finally {
        setIsJobLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!API_BASE_URL) {
      setFormError("Missing NEXT_PUBLIC_API_URL in environment configuration.");
      return;
    }

    if (!jobId) {
      setFormError("Invalid job post ID.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus("");
      setFormError("");

      const response = await fetch(
        `${API_BASE_URL}/public/jobs/${jobId}/apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            resume: formData.resume.trim(),
            coverLetter: formData.coverLetter.trim(),
          }),
        },
      );

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 409) {
          throw new Error(
            "You already applied for this position using this email.",
          );
        }

        if (response.status === 404) {
          throw new Error("This role is no longer accepting applications.");
        }

        if (response.status === 400 && payload?.error) {
          throw new Error(payload.error);
        }

        throw new Error(payload?.error || "Failed to submit application.");
      }

      setFormStatus(
        "Application submitted successfully. Our team will contact you soon.",
      );
      setFormData(initialFormData);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden bg-white pt-28 pb-16">
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <Link
            href="/apply-now"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#024466] hover:text-[#035a82] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all jobs
          </Link>
        </AnimatedSection>

        {isJobLoading && (
          <div className="grid lg:grid-cols-3 gap-8 mt-6">
            <Card className="lg:col-span-2 border-0 shadow-md">
              <CardHeader className="space-y-3">
                <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              </CardContent>
            </Card>
          </div>
        )}

        {!isJobLoading && jobError && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {jobError}
          </div>
        )}

        {!isJobLoading && !jobError && job && (
          <div className="grid lg:grid-cols-3 gap-8 mt-6">
            <Card className="lg:col-span-2 border-0 shadow-md">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge className="bg-[#024466]/10 text-[#024466] hover:bg-[#024466]/20 capitalize">
                    {job.employmentType}
                  </Badge>
                  {job.businessName && (
                    <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20">
                      {job.businessName}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl text-[#024466]">
                  {job.title}
                </CardTitle>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="inline-flex items-center gap-2">
                    <CalendarDays size={14} />
                    Posted {new Date(job.createdAt).toLocaleDateString()}
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <BriefcaseBusiness size={14} />
                    Role ID: {job._id}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-base font-semibold text-[#024466] mb-2">
                  Job Overview
                </h3>
                <p className="text-gray-700 leading-7 whitespace-pre-line">
                  {job.overview}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl h-fit lg:sticky lg:top-24">
              <CardHeader className="bg-linear-to-r from-[#024466] to-[#035a82] text-white rounded-t-xl">
                <CardTitle className="text-lg text-white">
                  Submit Application
                </CardTitle>
                <p className="text-blue-100 text-sm">
                  Complete the form below to apply for this role.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {formStatus && (
                  <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                    {formStatus}
                  </div>
                )}

                {formError && (
                  <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {formError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[#024466] mb-1.5"
                      >
                        First Name <span className="text-[#FF6B35]">*</span>
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg border-gray-200 focus:border-[#024466] focus:ring-[#024466]/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[#024466] mb-1.5"
                      >
                        Last Name <span className="text-[#FF6B35]">*</span>
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="rounded-lg border-gray-200 focus:border-[#024466] focus:ring-[#024466]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#024466] mb-1.5"
                    >
                      Email <span className="text-[#FF6B35]">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg border-gray-200 focus:border-[#024466] focus:ring-[#024466]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#024466] mb-1.5"
                    >
                      Phone <span className="text-[#FF6B35]">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg border-gray-200 focus:border-[#024466] focus:ring-[#024466]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-[#024466] mb-1.5"
                    >
                      Resume Link <span className="text-[#FF6B35]">*</span>
                    </label>
                    <Input
                      id="resume"
                      name="resume"
                      placeholder="https://drive.google.com/..."
                      value={formData.resume}
                      onChange={handleInputChange}
                      required
                      className="rounded-lg border-gray-200 focus:border-[#024466] focus:ring-[#024466]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="block text-sm font-medium text-[#024466] mb-1.5"
                    >
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#024466]/20 focus:border-[#024466] resize-y"
                      placeholder="Share a short introduction and why you are a fit for this role."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF6B35] hover:bg-[#e85a28] text-white h-11 rounded-xl font-semibold"
                  >
                    <Send size={16} className="mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobApplicationPage;
