'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const resumeActive = pathname === "/resume";

    return (
        <nav className="flex items-center justify-between px-8 py-2 bg-primary text-secondary h-[10vh] w-full">
            <p className="text-3xl font-bold font-audiowide justify-start">Ryan Chen</p>
            <ul className="flex gap-6 list-none m-0 p-0">
                {resumeActive
                    ? <Link href="/"><button className="homebutton">Home</button></Link>
                    : <Link href="/resume"><button className="homebutton">Resume</button></Link>
                }
            </ul>
        </nav>
    )
};

export default Navbar;