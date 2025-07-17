'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen } from '@/app/utils';
import { clear } from 'console';

interface CarouselProps {
    projects?: Array<{image: string; title: string; date: string; description: string; link: string; highlighted: boolean}>;
}

const Carousel: React.FC<CarouselProps> = ({ projects = [] }) => {
    const smallScreen = useIsSmallScreen();

    // Handle slide index for carousel scrolling
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % projects.length);
    const prev = () => setCurrent((current - 1 + projects.length) % projects.length);

    // Handle pausing automatic scroll
    const [paused, setPaused] = useState(false);

    const handlePrev = () => {
        setPaused(true);
        prev();
    }
    const handleNext = () => {
        setPaused(true);
        next();
    };
    const handleDotClick = (index: number) => {
        setPaused(true);
        setCurrent(index);
    };

    useEffect(() => {
        if (!paused) return;

        const timeout = setTimeout(() => 
            setPaused(false), 10000);
            return () => clearTimeout(timeout);
        }, [paused]);

    // Handle automatic scrolling
    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [paused, projects.length]);

    // Handle swipe scrolling
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(smallScreen ? e.touches[0].clientX : e.touches[0].clientY);
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        setTouchEnd(smallScreen ? e.changedTouches[0].clientX : e.changedTouches[0].clientY);

        const threshold = 70;
        if (touchStart !== null && touchEnd !== null) {
            const diff = touchStart - touchEnd;
            if (diff > threshold) {
                setPaused(true);
                next();
            } else if (diff < -threshold) {
                setPaused(true);
                prev();
            }
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div>
            {/* Carousel */}
            {projects.length > 0 && (
                <div className="flex flex-col md:flex-row w-[100vw] items-center bg-secondary/30">
                    <div className="overflow-hidden w-[95vw] h-[45vh] md:h-[50vh] ">
                        <div className="flex flex-row md:flex-col h-full w-full transition-transform duration-500"
                                style={{ transform: smallScreen ? `translateX(-${current * 100}%)` : `translateY(-${current * 100}%)` }}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}>
                            {projects.map((project, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row min-h-full min-w-full items-center justify-center">
                                    <Image src={`${prefix}${project.image}`} alt={project.title} width={400} height={250} className="m-4 max-h-[20vh] md:max-h-none md:min-w-[40vw] rounded-2xl" />
                                    <div className="flex flex-col h-full w-full justify-center px-2">
                                        <h1 className="text-3xl font-bold">{project.title}</h1>
                                        <p className="mt-2 overflow-y-auto h-[10vh] md:h-auto">{project.description}</p>
                                        <button className="homebutton my-4 w-[40vw] md:w-[20vw] self-center md:self-start"><a href={project.link} target="_">View Repository</a></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Carousel Controls */}
                    <div className="flex flex-row md:flex-col w-full md:w-[5vw] items-center justify-center">
                        <button onClick={handlePrev} className="p-1 bg-secondary rounded-full m-2 hover:cursor-pointer rotate-270 md:rotate-0"><img src={`${prefix}/arrow-up.svg`} /></button>
                        <div className="flex flex-row md:flex-col gap-y-1 gap-x-2">
                            {projects.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`p-1 rounded-full transition-colors duration-200 hover:cursor-pointer ${current === idx ? 'bg-secondary' : 'bg-primary'}`}
                                    onClick={() => handleDotClick(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={handleNext} className="p-1 bg-secondary rounded-full m-2 hover:cursor-pointer rotate-90 md:rotate-180"><img src={`${prefix}/arrow-up.svg`} /></button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Carousel;