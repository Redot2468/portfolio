import Footer from "@/app/_components/Footer";
import NavBar from "@/app/_components/NavBar";
import { inter } from "@/app/_styles/font";
import "@_styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Portfolio",
    default: "Lawal Ridwan - Portfolio",
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
