import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Test Repo",
  description: "Test repository for X-Force pipeline",
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
