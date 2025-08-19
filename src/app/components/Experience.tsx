import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsSmallScreen } from '@/app/utils';

interface ExperienceProps {
    experiences?: Array<{position: string; company: string; start: string; end: string; description: string;}>;
}

const Experience: React.FC<ExperienceProps> = ({ experiences = [] }) => {
    const smallScreen = useIsSmallScreen();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-0 section" ref={ref}>
            <h1 className="section-title">Experience</h1>
            {experiences.map((experience, idx) => {
                return (
                    <div key={idx} className="flex flex-col md:flex-row w-[80vw] justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.5, delay: smallScreen ? idx * 0.4 : idx * 0.2 }}
                            className="w-full md:w-[30vw]">
                            <h2 className="text-lg text-text text-start md:text-center font-quicksand">{experience.start} &mdash; {experience.end}</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.5, delay: smallScreen ? idx * 0.4 + 0.2 : idx * 0.2 + 0.2 }}
                            className="w-full mb-4">
                            <h2 className="text-2xl text-text font-bold">{experience.position}</h2>
                            <h2 className="text-lg text-text font-quicksand">{experience.company}</h2>
                            <p className="mt-2 text-md text-text">{experience.description}</p>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience;