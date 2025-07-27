import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Chen | Software Engineer & MSCS Student at USC",
  description:
    "Portfolio of Ryan Chen, a computer science graduate student at USC specializing in AI, machine learning, and full-stack development. Explore my projects, skills, and experience.",
  keywords: [
    "Ryan Chen",
    "Software Engineer",
    "Computer Science Portfolio",
    "USC MSCS",
    "AI Projects",
    "Machine Learning",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Langchain",
    "OpenAI",
    "Reinforcement Learning",
  ],
  authors: [{ name: "Ryan Chen", url: "https://ryanyychen.github.io/portfolio" }],
  openGraph: {
    title: "Ryan Chen | Software Engineer & MSCS Student",
    description:
      "Explore the portfolio of Ryan Chen: AI/ML enthusiast, full-stack developer, and USC MSCS student. Featuring cutting-edge projects in reinforcement learning, legaltech, and more.",
    url: "https://ryanyychen.github.io/portfolio",
    siteName: "Ryan Chen Portfolio",
    images: [
      {
        url: "https://ryanyychen.github.io/portfolio/og-Home.png",
        width: 1200,
        height: 630,
        alt: "Ryan Chen Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Chen | Software Engineer & MSCS Student",
    description:
      "Visit Ryan Chen's portfolio showcasing projects in AI, ML, and full-stack development. Currently pursuing an MSCS at USC.",
    images: ["https://ryanyychen.github.io/portfolio/Home.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Italianno&family=Quicksand:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-[100vh] justify-items-center font-[family-name:var(--font-geist-sans)] bg-primary">
          {children}
        </div>
      </body>
    </html>
  );
}
