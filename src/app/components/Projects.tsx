'use client';

import React from 'react';
import Image from 'next/image';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen, useIsMediumScreen } from '@/app/utils';

interface ProjectsProps {
    projects?: Array<{image: string; title: string; date: string; description: string; link: string;}>;
}

const Column: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpand = () => setExpanded(!expanded);
    return (
        <div className="flex flex-col w-[90vw] md:w-[40vw] lg:w-[30vw] items-center gap-y-8 md:mx-4">
            {projects.map((project, idx) => {
                return (
                    <div key={idx} className="h-fit flex flex-col w-full lg:w-[25vw] p-8 rounded-2xl border-2 border-secondary hover:scale-[1.05] transition-all duration-300">
                        <Image src={`${prefix}${project.image}`} alt={project.title} width={400} height={250} className=" max-w-[70vw] md:max-w-[30vw] lg:max-w-[20vw] self-center rounded-2xl" />
                        <div className="flex flex-col h-full w-full self-center mt-2">
                            <h1 className="text-3xl font-bold font-quicksand">{project.title}</h1>
                            <p className="text-md font-quicksand">{project.date}</p>
                            <p className={`mt-2 overflow-y-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? 'max-h-[50vh]' : 'max-h-[15vh]'}`}>{project.description}</p>
                            <button className="text-accent underline text-sm mt-1 self-start hover:cursor-pointer" onClick={toggleExpand}>{expanded ? 'Less' : 'More...'}</button>
                            <button className="homebutton my-4 w-[40vw] md:w-[30vw] lg:w-[20vw] self-center md:self-start"><a href={project.link} target="_">View Repository</a></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const smallScreen = useIsSmallScreen();
    const mediumScreen = useIsMediumScreen();
    let leftCol;
    let midCol;
    let rightCol;
    if (!smallScreen && !mediumScreen) {
        leftCol = projects.filter((_, idx) => idx % 3 === 0);
        midCol = projects.filter((_, idx) => idx % 3 === 1);
        rightCol = projects.filter((_, idx) => idx % 3 === 2);
    } else if (mediumScreen) {
        leftCol = projects.filter((_, idx) => idx % 2 === 0);
        rightCol = projects.filter((_, idx) => idx % 2 === 1);
    }

    return (
        <div className="flex flex-col items-center section">
            <h1 className="section-title">
                Projects
            </h1>
            <div className="flex flex-row w-[80vw] justify-center mt-[3vh]">
                {(smallScreen || mediumScreen)
                ? (
                    mediumScreen
                    ? <>
                        <Column projects={leftCol} />
                        <Column projects={rightCol} />
                      </>
                    : <Column projects={projects} />
                  )
                : <>
                    <Column projects={leftCol} />
                    <Column projects={midCol} />
                    <Column projects={rightCol} />
                  </>
                }
            </div>
        </div>
    )
}

export default Projects