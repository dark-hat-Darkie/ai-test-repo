import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "X-Force - AI-Powered Software Development Automation",
  description:
    "Automate your entire software development lifecycle with X-Force. Just create GitHub issues, and let our AI handle the rest - from code to deployment.",
  keywords: [
    "AI",
    "automation",
    "software development",
    "GitHub",
    "CLI",
    "development lifecycle",
    "code generation",
  ],
  openGraph: {
    title: "X-Force - AI-Powered Software Development Automation",
    description:
      "Automate your entire software development lifecycle with X-Force. Just create GitHub issues, and let our AI handle the rest.",
    type: "website",
  },
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
