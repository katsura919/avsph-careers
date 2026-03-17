import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Advanced Virtual Staff",
    description: "Terms and Conditions for Advanced Virtual Staff",
};

export default function TermsOfServicePage() {
    return (
        <main className="section bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto py-16 px-4 md:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)" }}>Terms and Conditions</h1>
                    <p className="text-lg text-gray-500">Last Updated: March 2, 2026</p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-8 text-lg leading-relaxed">
                        Welcome to Advanced Virtual Staff. By accessing our website and using our services, you agree to comply with and be bound by the following terms.
                    </p>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>1</span>
                            Services Provided
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            Advanced Virtual Staff (AVS) is a staffing agency that recruits, screens, and matches virtual assistants ("Talent") with businesses ("Clients"). AVS provides the platform for discovery and the initial onboarding infrastructure.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>2</span>
                            Use of Website
                        </h2>
                        <ul className="space-y-4 ml-14 list-disc text-gray-600">
                            <li>You must be at least 18 years old to use this site.</li>
                            <li>You agree to provide accurate and complete information when applying or requesting a quote.</li>
                            <li>Unauthorized use of this website may give rise to a claim for damages.</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>3</span>
                            Engagement of Staff
                        </h2>
                        <ul className="space-y-4 ml-14 list-disc text-gray-600">
                            <li><strong className="text-gray-900">Candidates:</strong> Applying does not guarantee placement. AVS reserves the right to reject applications based on our internal screening criteria.</li>
                            <li><strong className="text-gray-900">Clients:</strong> Engagement terms, including service fees, hours, and specific responsibilities, will be governed by a separate Service Agreement signed during the onboarding phase.</li>
                        </ul>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>4</span>
                            Intellectual Property
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            The content, logo, and design of this website are the property of Advanced Virtual Staff. You may not reproduce or distribute any content without our express written permission.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>5</span>
                            Limitation of Liability
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            AVS acts as a facilitator. While we conduct rigorous screenings, we are not liable for the specific performance or conduct of the Talent once they are placed with a Client, nor are we liable for any indirect or consequential losses arising from the use of our website.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>6</span>
                            Confidentiality
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            Both Clients and Candidates agree to maintain the confidentiality of any proprietary business information shared during the matching and onboarding process.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>7</span>
                            Governing Law
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            These terms shall be governed by and construed in accordance with the laws of the Philippines, and any disputes will be subject to the exclusive jurisdiction of its courts.
                        </p>
                    </section>

                    <section className="mb-10 p-8 rounded-2xl bg-gray-50 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-4" style={{ color: "var(--primary)" }}>
                            <span className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-white shadow-sm" style={{ color: "var(--secondary)" }}>8</span>
                            Contact Information
                        </h2>
                        <p className="ml-14 leading-relaxed text-gray-600">
                            For questions regarding these Terms, please contact:<br />
                            <strong className="text-gray-900 mt-2 block">Email:</strong> <a href="mailto:admin@advancedvirtualstaff.com" className="font-semibold hover:text-[var(--primary)] underline transition-colors" style={{ color: "var(--secondary)" }}>admin@advancedvirtualstaff.com</a><br />
                            <strong className="text-gray-900 mt-2 block">Hours:</strong> Monday - Saturday, 8 AM - 5 PM (PHT)
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
