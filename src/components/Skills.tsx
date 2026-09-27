'use client';

import Image from 'next/image';
import React from 'react';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const skills = [
    { name: 'GCP', image: '/skills/gcp.svg' },
    { name: 'Kubernetes', image: '/skills/k8s.svg' },
    { name: 'ArgoCD', image: '/skills/argocd.svg' },
    { name: 'Terraform', image: '/skills/terraform.svg' },
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

type Skill = (typeof skills)[number];

const SkillIcon = ({ skill }: { skill: Skill }) => (
    <div className="inline-block shrink-0 px-4 text-center md:px-10">
        <Image
            src={`${prefix}${skill.image}`}
            alt={skill.name}
            width={50}
            height={50}
            unoptimized
            className="mx-auto h-[4vh] w-auto"
        />

        <p className="mt-2 text-sm text-text">{skill.name}</p>
    </div>
);

const SkillRow = ({
    skills,
    reverse = false,
}: {
    skills: Skill[];
    reverse?: boolean;
}) => (
    <div className="relative h-[8vh] w-full">
        <div
            className={`absolute flex w-max whitespace-nowrap animate-marquee ${
                reverse ? '[animation-direction:reverse]' : ''
            }`}
        >
            {[...skills, ...skills].map((skill, index) => (
                <SkillIcon
                    key={`${skill.name}-${index}`}
                    skill={skill}
                />
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
    const splitIndex = Math.ceil(skills.length / 2);
    const firstRow = skills.slice(0, splitIndex);
    const secondRow = skills.slice(splitIndex);

    return (
        <div className="section flex flex-col items-center">
            <h1 className="section-title">Skills</h1>

            <div className="w-[80vw] overflow-hidden py-6 md:w-[70vw]">
                <div className="flex flex-col gap-6">
                    <SkillRow skills={firstRow} />
                    <SkillRow skills={secondRow} reverse />
                </div>
            </div>
        </div>
    );
};

export default Skills;