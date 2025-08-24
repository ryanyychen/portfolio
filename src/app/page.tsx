'use client';

import React from 'react';
import { useEffect } from "react";

import Self from "@/components/Self";
import Waves from "@/components/Waves";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Loading from "@/components/Loading";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ResumeOverlay from "@/components/ResumeOverlay";

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
    <div 
      id="page"
      className="h-[100vh] justify-items-center overflow-y-scroll scrollbar-hide font-[family-name:var(--font-geist-sans)] bg-background">
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
          <Connect />
          <div id="spacing" className="h-[20vh] w-full"></div>
          <Waves />
        </main>
      </div>
    </div>
  );
}
