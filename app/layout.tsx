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
      </body>
    </html>
  );
}
