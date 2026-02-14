import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-Force - AI-Powered Software Development Automation",
  description: "Automate your entire software development lifecycle with X-Force. Just create GitHub issues, and let our AI handle the rest - from code to deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
