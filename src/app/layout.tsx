import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/app/components/Topbar";
import Waves from "@/app/components/Waves";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Chen's Portfolio",
  description: "A showcase of my projects and skills in computer science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar />
        <div className="h-[90vh] justify-items-center font-[family-name:var(--font-geist-sans)] bg-primary">
          {children}
        </div>
        <Waves />
      </body>
    </html>
  );
}
