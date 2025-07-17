import Carousel from "@/app/components/Carousel";
import Projects from "@/app/components/Projects";
import projectsData from "./projects.json";

export default function ProjectsPage() {
    const highlighted = projectsData.filter(p => p.highlighted)
    return (
        <main className="flex flex-col overflow-y-scroll items-center h-full">
            <Carousel projects={highlighted} />
            <Projects projects={projectsData} />
        </main>
    );
}