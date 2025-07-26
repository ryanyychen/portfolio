import Self from "@/app/components/Self";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import projectsData from "@/app/projects/projects.json";

export default function Home() {
  return (
    <div className="h-[90vh] justify-items-center overflow-y-auto font-[family-name:var(--font-geist-sans)] bg-primary">
      <main className="flex flex-col items-center h-full pt-[5vh]">
        <Self />
        <Skills />
        <Projects projects={projectsData} />
        {
        // Education, Experience, Contact
        }
      </main>
    </div>
  );
}
