'use client';

import React from 'react';
import { useEffect } from "react";

import Self from "@/app/components/Self";
import Waves from "@/app/components/Waves";
import Navbar from "@/app/components/Navbar";
import Skills from "@/app/components/Skills";
import Loading from "@/app/components/Loading";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";
import ResumeOverlay from "@/app/components/ResumeOverlay";

import projectsData from "@/app/projects.json";
import experienceData from "@/app/experience.json";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-[100vh] justify-items-center overflow-y-scroll scrollbar-hide font-[family-name:var(--font-geist-sans)] bg-primary">
      {isLoading && (
        <div className="absolute inset-0 z-50">
          <Loading />
        </div>
      )}
      <div className={`${isLoading ? "invisible" : "visible"} transition-opacity duration-500`}>
        <main className="flex flex-col items-center w-[100vw] h-full">
          <Navbar onResumeClick={() => setIsResumeOpen(true)}/>
          <ResumeOverlay isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          <Self isReady={!isLoading} onResumeClick={() => setIsResumeOpen(true)}/>
          <Experience experiences={experienceData} />
          <Skills />
          <Projects projects={projectsData} />
          <Education />
          <Waves />
        </main>
      </div>
    </div>
  );
}
