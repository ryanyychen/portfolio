import Self from "@/app/components/Self";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Experience from "@/app/components/Experience";

import projectsData from "@/app/projects.json";
import experienceData from "@/app/experience.json";

export default function Home() {
  return (
    <div className="w-full h-[90vh] justify-items-center overflow-y-scroll font-[family-name:var(--font-geist-sans)] bg-primary">
      <main className="flex flex-col items-center h-full pt-[5vh]">
        <Self />
        <Skills />
        <Projects projects={projectsData} />
        <Education />
      </main>
    </div>
  );
}
