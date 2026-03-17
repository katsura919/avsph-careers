"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { motion } from "motion/react";
import AnimatedSection from "@/components/custom/shared/AnimatedSection";
import WaveDivider from "@/components/custom/shared/WaveDivider";

type PublicJobPost = {
  _id: string;
  title: string;
  overview: string;
  employmentType: string;
  businessId: string;
  businessName?: string;
  createdAt: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const ENV_BUSINESS_ID = process.env.NEXT_PUBLIC_BUSINESS_ID;

const ApplyNowPage = () => {
  const businessId = useMemo(() => ENV_BUSINESS_ID || "", []);

  const [jobs, setJobs] = useState<PublicJobPost[]>([]);
  const [isJobsLoading, setIsJobsLoading] = useState(false);
  const [jobsError, setJobsError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      if (!API_BASE_URL) {
        setJobsError(
          "Missing NEXT_PUBLIC_API_URL in environment configuration.",
        );
        return;
      }

      if (!businessId) {
        setJobsError(
          "Missing NEXT_PUBLIC_BUSINESS_ID in environment configuration.",
        );
        return;
      }

      try {
        setIsJobsLoading(true);
        setJobsError("");

        const response = await fetch(
          `${API_BASE_URL}/public/jobs?businessId=${encodeURIComponent(businessId)}`,
          { cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error("Unable to load open positions.");
        }

        const jobData: PublicJobPost[] = await response.json();
        setJobs(jobData);
      } catch {
        setJobsError(
          "Unable to load open positions right now. Please try again.",
        );
      } finally {
        setIsJobsLoading(false);
      }
    };

    fetchJobs();
  }, [businessId]);

  return (
    <div className="overflow-hidden bg-white">
      <section className="relative pt-32 bg-linear-to-br from-[#024466] via-[#035a82] to-[#0891b2] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Rocket size={16} className="text-[#FF6B35]" />
              <span className="text-white/90 text-sm font-medium">
                Open Career Opportunities
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Apply <span className="text-[#FF6B35]">Now</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Explore active roles and open the full job page to review details
              before submitting your application.
            </p>
          </motion.div>
        </div>

        <WaveDivider color="white" />
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#FF6B35] uppercase tracking-wider mb-3">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#024466] mb-4">
              Find The Right Role For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every listing below comes from our live backend. Click Apply Now
              on a role to view full details and submit your application.
            </p>
          </AnimatedSection>

          {jobsError && (
            <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {jobsError}
            </div>
          )}

          {!jobsError && isJobsLoading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={`skeleton-${index}`} className="border-0 shadow-md">
                  <CardHeader className="space-y-3">
                    <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
                    <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse" />
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 w-full bg-gray-200 rounded-xl animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!jobsError && !isJobsLoading && jobs.length === 0 && (
            <div className="rounded-xl border border-[#024466]/15 bg-[#024466]/5 p-4 text-sm text-[#024466]">
              There are no open positions right now. Please check back soon.
            </div>
          )}

          {!jobsError && !isJobsLoading && jobs.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <AnimatedSection key={job._id} delay={index * 0.06}>
                  <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge className="bg-[#024466]/10 text-[#024466] hover:bg-[#024466]/20 text-xs font-semibold capitalize">
                          {job.employmentType}
                        </Badge>
                        {job.businessName && (
                          <Badge className="bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35]/20 text-xs">
                            {job.businessName}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg text-[#024466] group-hover:text-[#0891b2] transition-colors line-clamp-2">
                        {job.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-500 text-sm mb-4 line-clamp-4">
                        {job.overview}
                      </p>
                      <div className="mt-auto space-y-4">
                        <div className="flex items-center text-xs text-gray-400 gap-2">
                          <BriefcaseBusiness size={14} />
                          <span>
                            Posted{" "}
                            {new Date(job.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <Button
                          asChild
                          className="w-full bg-[#024466] hover:bg-[#02334a] text-white rounded-xl h-10 font-semibold text-sm"
                        >
                          <Link href={`/apply-now/${job._id}`}>
                            Apply Now
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#f5f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#024466] mb-6 text-center">
              Why Join Advance Virtual Staff PH?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Work from home opportunities across the Philippines",
                "Access to international client projects",
                "Clear hiring process and stage-based evaluation",
                "Training and mentorship for long-term growth",
                "Supportive remote-first culture",
                "Fair and competitive compensation packages",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ApplyNowPage;
