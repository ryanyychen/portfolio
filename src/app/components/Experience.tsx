import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExperienceProps {
    experiences?: Array<{position: string; company: string; start: string; end: string; description: string;}>;
}

const Experience: React.FC<ExperienceProps> = ({ experiences = [] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-0 section" ref={ref}>
            <h1 className="section-title">Experience</h1>
            {experiences.map((experience, idx) => {
                return (
                    <div key={idx} className="flex flex-row w-[80vw] gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.5, delay: idx * 0.2 }}
                            className="w-[1/4]">
                            <h2 className="text-lg font-quicksand">{experience.start}-{experience.end}</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.5, delay: idx * 0.2 + 0.2 }}
                            className="w-[3/4]">
                            <span className="flex flex-row items-end">
                                <h2 className="text-2xl font-bold">{experience.position}</h2>
                                <h2 className="text-xl font-quicksand">, {experience.company}</h2>
                            </span>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;