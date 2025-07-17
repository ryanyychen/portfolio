'use client';

import React from 'react';
import Image from 'next/image';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen } from '@/app/utils';

interface ProjectsProps {
    projects?: Array<{image: string; title: string; date: string; description: string; link: string; highlighted: boolean}>;
}

const Column: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpand = () => setExpanded(!expanded);
    return (
        <div className="flex flex-col w-[90vw] md:w-[40vw] items-center gap-y-8">
            {projects.map((project, idx) => {
                return (
                    <div key={idx} className="h-fit flex flex-col w-full md:w-[40vw] p-8 bg-secondary/10 rounded-2xl shadow-[5px_5px_5px_5px] shadow-secondary/20">
                        <Image src={`${prefix}${project.image}`} alt={project.title} width={400} height={250} className="min-w-[35vw] self-center rounded-2xl" />
                        <div className="flex flex-col h-full w-full self-center mt-2">
                            <h1 className="text-3xl font-bold">{project.title}</h1>
                            <p className="text-sm">{project.date}</p>
                            <p className={`mt-2 overflow-y-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? 'max-h-[40vh]' : 'max-h-[15vh]'}`}>{project.description}</p>
                            <button className="text-accent underline text-sm mt-1 self-start hover:cursor-pointer" onClick={toggleExpand}>{expanded ? 'Less' : 'More...'}</button>
                            <button className="homebutton my-4 w-[40vw] md:w-[20vw] self-center md:self-start"><a href={project.link} target="_">View Repository</a></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const smallScreen = useIsSmallScreen();
    let leftCol;
    let rightCol;
    if (!smallScreen) {
        leftCol = projects.filter((_, idx) => idx % 2 === 0);
        rightCol = projects.filter((_, idx) => idx % 2 !== 0);
    }

    return (
        <div className="flex flex-row justify-center mt-[5vh] md:mt-[15vh] mb-[20vh] gap-x-12">
            {smallScreen
            ? <Column projects={projects} />
            : <><Column projects={leftCol} /><Column projects={rightCol} /></>
            }
        </div>
    )
}

export default Projects