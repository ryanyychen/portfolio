import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Banner: React.FC = () => {
    return (
        <div className="justify-items-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-items-center">
                <Image
                    src={`${prefix}/profile-image.jpg`}
                    alt="Profile Photo"
                    width={500}
                    height={500}
                    unoptimized
                    className="border-secondary border-8 rounded-full max-h-[35vh] md:max-h-[50vw] max-w-[35vh] md:max-w-[50vw] mx-4 my-4 transition-all duration-300 hover:scale-[1.05]"
                />
                <div className="flex flex-col items-center md:items-start justify-center w-full pl-2">
                    <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">Yu You (Ryan) Chen</h1>
                    <p className="text-lg md:text-2xl text-center md:text-start mt-2">Master of Science in Computer Science</p>
                    <p className="text-center md:text-start mt-2">University of Southern California</p>
                    <div className="flex flex-row gap-4 mt-4">
                        <Link href="/about"><button className="homebutton">About Me</button></Link>
                        <Link href="/projects"><button className="homebutton">Projects</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;