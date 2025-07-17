'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
    projects?: Array<{image: string; title: string; date: string; description: string; link: string; highlighted: boolean}>;
}

const Carousel: React.FC<CarouselProps> = ({ projects = [] }) => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % projects.length);
    const prev = () => setCurrent((current - 1 + projects.length) % projects.length);

    return (
        <div>
            {/* Carousel */}
            {projects.length > 0 && (
                <div className="flex flex-row w-[100vw] bg-secondary/30">
                    <div className="overflow-hidden w-[95vw] h-[20vh] md:h-[50vh] ">
                        <div className="flex flex-col h-full transition-transform duration-500" style={{ transform: `translateY(-${current * 100}%)` }}>
                            {projects.map((project, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row min-h-full items-center">
                                    <Image src={project.image} alt={project.title} width={400} height={250} className="m-4 min-w-[40vw] rounded-2xl" />
                                    <div className="flex flex-col h-full w-full justify-center px-2">
                                        <h1 className="text-3xl font-bold">{project.title}</h1>
                                        <p className="mt-2 overflow-y-auto">{project.description}</p>
                                        <button className="homebutton mt-4 w-[20vw]"><a href={project.link} target="_">View Repository</a></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Carousel Controls */}
                    <div className="flex flex-col w-[5vw] items-center justify-center">
                        <button onClick={prev} className="p-1 bg-secondary rounded-full m-2 hover:cursor-pointer"><img src="/arrow-up.svg" /></button>
                        <div className="flex flex-col gap-y-1">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`p-1 rounded-full transition-colors duration-200 hover:cursor-pointer ${current === idx ? 'bg-secondary' : 'bg-primary'}`}
                                    onClick={() => setCurrent(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="p-1 bg-secondary rounded-full m-2 hover:cursor-pointer"><img src="/arrow-down.svg" /></button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Carousel;