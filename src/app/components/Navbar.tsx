'use client';

import React from "react";

interface NavbarProps {
    onResumeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
    return (
        <nav className="flex items-center justify-between px-8 py-2 bg-background text-secondary h-[10vh] w-full">
            <p className="text-3xl font-bold font-audiowide justify-start">Ryan Chen</p>
            <ul className="flex gap-6 list-none m-0 p-0">
                <button onClick={onResumeClick} className="homebutton">Resume</button>
            </ul>
        </nav>
    )
};

export default Navbar;