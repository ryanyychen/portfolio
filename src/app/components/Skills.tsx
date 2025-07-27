'use client';

import Image from 'next/image';
import React from 'react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const skills = [
    { name: 'JavaScript', image: '/skills/js.svg' },
    { name: 'TypeScript', image: '/skills/ts.svg' },
    { name: 'React', image: '/skills/react.svg' },
    { name: 'Next.js', image: '/skills/nextjs.svg' },
    { name: 'TailwindCSS', image: '/skills/tailwind.svg' },
    { name: 'Python', image: '/skills/python.svg' },
    { name: 'Java', image: '/skills/java.svg' },
    { name: 'C/C++', image: '/skills/c.svg' },
    { name: 'PyTorch', image: '/skills/pytorch.svg' },
];

const Skills: React.FC = () => {
    return (
        <div className="flex flex-col items-center mb-[3vh]">
            <h1 className="section-title">Skills</h1>
            <div className="relative w-[80vw] md:w-[70vw] h-[14vh] justify-center items-center overflow-hidden py-6 mt-[3vh]">
                <div className="absolute flex animate-marquee whitespace-nowrap">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="inline-block px-4 md:px-10 text-center">
                            <Image
                                src={`${prefix}${skill.image}`}
                                alt={skill.name}
                                width={50}
                                height={50}
                                unoptimized
                                className="h-[4vh] w-auto mx-auto"
                            />
                            <p className="text-sm mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
