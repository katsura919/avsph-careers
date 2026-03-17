import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Advanced Virtual Staff",
    description: "Privacy Policy for Advanced Virtual Staff",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="section bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto py-16 px-4 md:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)" }}>Privacy Policy</h1>
                    <p className="text-lg text-gray-500">Last Updated: March 2, 2026</p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-8 text-lg leading-relaxed">
                        At Advanced Virtual Staff (AVS), we are committed to protecting the privacy and security of the personal information of our clients, candidates, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your data when you visit <a href="https://advancedvirtualstaff.com/" className="font-semibold hover:text-[var(--primary)] underline transition-colors" style={{ color: "var(--secondary)" }}>https://advancedvirtualstaff.com/</a>.
                    </p>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>1</span>
                            Information We Collect
                        </h2>
                        <ul className="space-y-4 ml-14 list-disc text-gray-600">
                            <li><strong className="text-gray-900">For Candidates:</strong> Name, contact details, resumes, portfolios, certifications, video/audio recordings, and technical specifications of your home office setup.</li>
                            <li><strong className="text-gray-900">For Clients:</strong> Name, business email, company name, and specific staffing requirements.</li>
                            <li><strong className="text-gray-900">Technical Data:</strong> IP addresses, browser type, and cookies to improve website functionality.</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>2</span>
                            How We Use Your Information
                        </h2>
                        <ul className="space-y-4 ml-14 list-disc text-gray-600">
                            <li>To facilitate the matching process between talent and clients.</li>
                            <li>To conduct interviews and technical screenings.</li>
                            <li>To process applications and manage onboarding.</li>
                            <li>To send periodic newsletters or service updates (you may opt-out at any time).</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>3</span>
                            Data Sharing and Disclosure
                        </h2>
                        <p className="mb-4 ml-14 leading-relaxed text-gray-600">We do not sell your personal data. We share information only in the following contexts:</p>
                        <ul className="space-y-4 ml-14 list-disc text-gray-600">
                            <li><strong className="text-gray-900">Client Matching:</strong> Sharing candidate profiles with potential employers.</li>
                            <li><strong className="text-gray-900">Service Providers:</strong> With third-party tools used for scheduling, communication, or data storage (e.g., CRM or email platforms).</li>
                            <li><strong className="text-gray-900">Legal Requirements:</strong> If required by law or to protect our legal rights.</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>4</span>
                            Data Security
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>5</span>
                            Your Rights
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:admin@advancedvirtualstaff.com" className="font-semibold hover:text-[var(--primary)] underline transition-colors" style={{ color: "var(--secondary)" }}>admin@advancedvirtualstaff.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
