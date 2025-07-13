import React from "react";

const Topbar: React.FC = () => (
    <nav className="flex items-center justify-center md:justify-end px-8 py-2 md:pr-14 bg-secondary opacity-[80%] text-primary h-[10vh] w-full">
        <ul className="flex gap-6 list-none m-0 p-0">
            <li>
                <a href="/" className="text-lg font-bold inline-block transition-all duration-200 hover:scale-[1.2]">Home</a>
            </li>
            <li>
                <a href="/about" className="text-lg font-bold inline-block transition-all duration-200 hover:scale-[1.2]">About</a>
            </li>
            <li>
                <a href="/projects" className="text-lg font-bold inline-block transition-all duration-200 hover:scale-[1.2]">Projects</a>
            </li>
        </ul>
    </nav>
);

export default Topbar;