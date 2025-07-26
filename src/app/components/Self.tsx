import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { prefix } from '@/app/prefix';

const Banner: React.FC = () => {
    return (
        <div className="justify-items-center w-full min-h-[85vh]">
            <div className="flex flex-col md:flex-row items-center justify-items-center">
                <Image
                    src={`${prefix}/profile-image.jpg`}
                    alt="Profile Photo"
                    width={500}
                    height={500}
                    className="border-secondary border-8 rounded-full max-h-[35vh] md:max-h-[50vw] max-w-[35vh] md:max-w-[50vw] mx-4 my-4 transition-all duration-300 hover:scale-[1.05]"
                />
                <div className="flex flex-col items-center md:items-start justify-center w-full pl-2">
                    <h1 className="text-3xl md:text-6xl font-bold text-center md:text-start">Yu You (Ryan) Chen</h1>
                    <p className="text-lg md:text-xl text-center md:text-start mt-2 md:pr-[10vw]">I am a graduate student studying Computer Science interested in developing cool software. I enjoy tinkering with new technology to create globally relevant solutions.</p>
                    <div className="flex flex-row gap-4 mt-4">
                        <Link href="/resume"><button className="homebutton">Resume</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;