import React from 'react';
import Image from 'next/image';


function createProjectCards(projects: Array<{image: string; title: string; description: string; link: string}>) {
    return projects.map((project, index) => (
        <div key={index} className="dev-border h-[70vh] w-[25vw]">
            <Image src={project.image} alt={project.title} width={200} height={200} />
            <h2 className="text-xl">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
        </div>
    ))
};

interface ProjectsProps {
    projects?: Array<{image: string; title: string; description: string; link: string}>;
}


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="dev-border">
            <h1 className="text-3xl">Projects</h1>
            <div className="dev-border flex md:flex-row flex-col gap-4 items-center justify-center">
                { projects && createProjectCards(projects) }
            </div>
        </div>
    )
};

export default Projects;