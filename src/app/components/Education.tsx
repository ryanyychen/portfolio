'use client';

import React from 'react';
import Image from 'next/image';
import { prefix } from '@/app/prefix';
import { useIsSmallScreen } from '@/app/utils';

const Education: React.FC = () => {
    const smallScreen = useIsSmallScreen();
    const usc = smallScreen ? "Southern Cal" : "University of California, San Diego";
    const masters = smallScreen ? "M.S. CS" : "Master of Science, Computer Science";
    const ucsd = smallScreen ? "UC San Diego" : "University of Southern California";
    const bachelors = smallScreen ? "B.S. Math-CS" : "Bachelor of Science, Mathematics-Computer Science";
    return (
        <div className="flex flex-col items-center justify-center w-full gap-4 section">
            <h1 className="section-title">Education</h1>
            <div className="flex flex-row items-center gap-4">
                <Image src={`${prefix}/usc.svg`} alt="USC Logo" width={100} height={100} className="h-[10vh] md:h-[15vh] w-auto" />
                <div className="flex flex-col items-start w-[45vw] md:w-[40vw]">
                    <h2 className="text-2xl md:text-3xl">{usc}</h2>
                    <h3 className="text-xl font-quicksand">{masters}</h3>
                </div>
            </div>
            <div className="flex flex-row items-center gap-4 mb-[20vh]">
                <Image src={`${prefix}/ucsd.svg`} alt="UCSD Logo" width={100} height={100} className="h-[10vh] md:h-[15vh] w-auto" />
                <div className="flex flex-col items-start w-[45vw] md:w-[40vw]">
                    <h2 className="text-2xl md:text-3xl">{ucsd}</h2>
                    <h3 className="text-xl font-quicksand">{bachelors}</h3>
                </div>
            </div>
        </div>
    )
}

export default Education;