'use client';

import React from 'react';
import Image from 'next/image';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen, useIsMediumScreen } from '@/app/utils';

interface ColumnProps {
    projects?: Array<{image: string; title: string; date: string; description: string; link: string; tags: string[]}>;
    numCols: number;
    offset: number;
    expandedIndex: number | null;
    setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

interface ProjectsProps {
    projects?: Array<{image: string; title: string; date: string; description: string; link: string; tags: string[]}>;
}

const Column: React.FC<ColumnProps> = ({ projects = [], numCols, offset, expandedIndex, setExpandedIndex }) => {
    const toggleExpand = (globalIndex: number) => {
        setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex);
    }
    return (
        <div className="flex flex-col w-[90vw] md:w-[40vw] lg:w-[30vw] items-center gap-y-8 md:mx-4">
            {projects.map((project, idx) => {
                const globalIndex = idx * numCols + offset;
                const isExpanded = expandedIndex === globalIndex;
                return (
                    <div
                        key={idx}
                        className="h-fit flex flex-col w-full lg:w-[25vw] p-8 rounded-2xl border-2 border-secondary hover:scale-[1.05] transition-all duration-300">
                        <Image src={`${prefix}${project.image}`} alt={project.title} width={400} height={250} className=" max-w-[70vw] md:max-w-[30vw] lg:max-w-[20vw] self-center rounded-2xl" />
                        <div className="flex flex-col h-full w-full self-center mt-2">
                            <h1 className="text-3xl font-bold font-quicksand">{project.title}</h1>
                            <p className="text-md font-quicksand">{project.date}</p>
                            <p className={`mt-2 overflow-y-hidden transition-[max-height] duration-500 ease-in-out ${isExpanded ? 'max-h-[50vh]' : 'max-h-[15vh]'}`}>{project.description}</p>
                            <button className="text-accent underline text-sm mt-1 self-start hover:cursor-pointer" onClick={() => toggleExpand(globalIndex)}>{isExpanded ? 'Less' : 'More...'}</button>
                            <button className="homebutton my-4 w-[40vw] md:w-[30vw] lg:w-[20vw] self-center md:self-start"><a href={project.link} target="_">View Repository</a></button>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="text-sm font-quicksand bg-accent/70 text-primary px-2 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
    const smallScreen = useIsSmallScreen();
    const mediumScreen = useIsMediumScreen();
    let numCols = 1;
    let leftCol;
    let midCol;
    let rightCol;
    if (!smallScreen && !mediumScreen) {
        numCols = 3;
        leftCol = projects.filter((_, idx) => idx % 3 === 0);
        midCol = projects.filter((_, idx) => idx % 3 === 1);
        rightCol = projects.filter((_, idx) => idx % 3 === 2);
    } else if (mediumScreen) {
        numCols = 2;
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
                        <Column
                            projects={leftCol}
                            numCols={numCols}
                            offset={0}
                            expandedIndex={expandedIndex}
                            setExpandedIndex={setExpandedIndex} />
                        <Column
                            projects={rightCol}
                            numCols={numCols}
                            offset={1}
                            expandedIndex={expandedIndex}
                            setExpandedIndex={setExpandedIndex} />
                      </>
                    : <Column
                        projects={projects}
                        numCols={numCols}
                        offset={0}
                        expandedIndex={expandedIndex}
                        setExpandedIndex={setExpandedIndex} />
                  )
                : <>
                    <Column
                        projects={leftCol}
                        numCols={numCols}
                        offset={0}
                        expandedIndex={expandedIndex}
                        setExpandedIndex={setExpandedIndex} />
                    <Column
                        projects={midCol}
                        numCols={numCols}
                        offset={1}
                        expandedIndex={expandedIndex}
                        setExpandedIndex={setExpandedIndex} />
                    <Column
                        projects={rightCol}
                        numCols={numCols}
                        offset={2}
                        expandedIndex={expandedIndex}
                        setExpandedIndex={setExpandedIndex} />
                  </>
                }
            </div>
        </div>
    )
}

export default Projects