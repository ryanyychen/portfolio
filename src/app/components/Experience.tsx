import React from 'react';

interface ExperienceProps {
    experiences?: Array<{position: string; company: string; start: string; end: string; description: string;}>;
}

const Experience: React.FC<ExperienceProps> = ({ experiences = [] }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-0 section">
            <h1 className="section-title">Experience</h1>
            {experiences.map((experience, idx) => {
                return (
                    <div key={idx} className="flex flex-row w-[80vw] gap-8">
                        <div className="w-[1/4]">
                            <h2 className="text-lg font-quicksand">{experience.start}-{experience.end}</h2>
                        </div>
                        <div className="w-[3/4]">
                            <span className="flex flex-row items-end">
                                <h2 className="text-2xl font-bold">{experience.position}</h2>
                                <h2 className="text-xl font-quicksand">, {experience.company}</h2>
                            </span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;