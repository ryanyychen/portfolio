'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { prefix } from '@/app/prefix';
import { motion } from 'framer-motion';

interface SelfProps {
    isReady: boolean;
}

const Self: React.FC<SelfProps> = ({ isReady }) => {
    return (
        <div className="justify-items-center w-full lg:w-[80vw] min-h-[80vh]">
            <div className="flex flex-col md:flex-row h-[70vh] items-center justify-items-center">
                <Image
                    src={`${prefix}/profile-image.jpg`}
                    alt="Profile Photo"
                    width={500}
                    height={500}
                    className="border-secondary border-8 rounded-full max-h-[35vh] md:max-h-[50vw] max-w-[35vh] md:max-w-[50vw] mx-4 my-4 transition-all duration-300 hover:scale-[1.05]"
                />
                <div className="flex flex-col items-center md:items-start justify-center w-full pl-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={ isReady ? { opacity: 1, y: 0 } : {} }
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold font-italianno text-center md:text-start select-none"
                    >
                        Yu You (Ryan) Chen
                    </motion.h1>
                    <p className="text-lg md:text-xl text-center font-quicksand md:text-start mt-2 md:pr-[10vw] select-none">I am a graduate student studying Computer Science interested in developing cool software. I enjoy tinkering with new technology to create globally relevant solutions.</p>
                    <div className="flex flex-row gap-4 mt-4">
                        <Link href="/resume"><button className="homebutton select-none">Resume</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Self;