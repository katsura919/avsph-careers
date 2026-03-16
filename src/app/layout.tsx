import type { Metadata } from "next";
import { Lexend, Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/layout/Header";
import Footer from "@/components/custom/layout/Footer";
import ScrollToTopButton from "@/components/custom/shared/ScrollToTopButton";

const lexend = Lexend({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advance Virtual Staff PH | Build Your Remote Career",
  description:
    "Join Advance Virtual Staff PH — the leading Filipino virtual assistant agency. Discover remote career opportunities, competitive pay, and a supportive community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${sourceSans3.variable} ${plusJakartaSans.variable} antialiased bg-white`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
