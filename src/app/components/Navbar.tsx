'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home", id: "home"},
    { href: "/about", label: "About", id: "about" },
    { href: "/projects", label: "Projects", id: "projects" },
    { href: "/resume", label: "Resume", id: "resume" },
];

const Navbar: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center md:justify-end px-8 py-2 md:pr-14 bg-primary text-secondary h-[10vh] w-full">
            <ul className="flex gap-6 list-none m-0 p-0">
                {navLinks.map(link => (
                    <Link key={link.id} href={link.href} className={`group relative text-lg font-bold inline-block transition-all duration-200 hover:scale-[1.2] ${pathname === link.href ? "animated-underline" : ""}`}>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
};

export default Navbar;