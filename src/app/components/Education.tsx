'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen } from '@/app/utils';
import { motion, useInView } from 'framer-motion';

const Education: React.FC = () => {
    const smallScreen = useIsSmallScreen();
    const usc = smallScreen ? "Southern Cal" : "University of Southern California";
    const masters = smallScreen ? "M.S. Comp Sci" : "Master of Science, Computer Science";
    const ucsd = smallScreen ? "UC San Diego" : "University of California, San Diego";
    const bachelors = smallScreen ? "B.S. Math-CS" : "Bachelor of Science, Mathematics-Computer Science";

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 section" ref={ref}>
            <h1 className="section-title">Education</h1>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex flex-row items-center gap-4">
                <Image src={`${prefix}/usc.svg`} alt="USC Logo" width={100} height={100} className="h-[10vh] md:h-[15vh] w-auto" />
                <div className="flex flex-col items-start w-[45vw] md:w-[40vw]">
                    <h2 className="text-2xl md:text-3xl">{usc}</h2>
                    <h3 className="text-xl font-quicksand">{masters}</h3>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-row items-center gap-4">
                <Image src={`${prefix}/ucsd.svg`} alt="UCSD Logo" width={100} height={100} className="h-[10vh] md:h-[15vh] w-auto" />
                <div className="flex flex-col items-start w-[45vw] md:w-[40vw]">
                    <h2 className="text-2xl md:text-3xl">{ucsd}</h2>
                    <h3 className="text-xl font-quicksand">{bachelors}</h3>
                </div>
            </motion.div>
        </div>
    )
}

export default Education;