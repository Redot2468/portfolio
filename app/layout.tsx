import AnimatedCursor from "@/app/_components/AnimatedCursor";
import AOSInitializer from "@/app/_components/AosInitializeer";
import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import { kumbhSans } from "@/app/_styles/font";

import "@_styles/globals.css";
import { Metadata } from "next";

// animation
// change you domain here and also in the sitemap.ts

export const metadata: Metadata = {
  title: {
    template: "%s | Ibn - Frontend Developer",
    default: "Ibn - Frontend Developer",
  },
  description:
    "Professional portfolio of Lawal Ridwan, showcasing frontend web development projects, technical skills, and professional experience in web development.",
  keywords: [
    "Lawal Ridwan",
    "Frontend Developer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Ibn" }, { name: "Lawal Ridwan" }],
  openGraph: {
    title: "Ibn - Frontend Developer Portfolio",
    description:
      "Professional portfolio showcasing frontend development projects and technical skills",
    url: "https://yourdomain.com",
    siteName: "Ibn Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ibn Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibn - Frontend Developer Portfolio",
    description:
      "Professional portfolio showcasing frontend development projects and technical skills",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${kumbhSans?.className} home min-h-screen overflow-auto`}
      >
        <AOSInitializer />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <AnimatedCursor />
      </body>
    </html>
  );
}
