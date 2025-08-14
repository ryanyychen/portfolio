import React, { useState, useEffect } from "react";

const color = "#212121"

const Waves: React.FC = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const container = document.getElementById("page");
        if (!container) return;

        const handleScroll = () => {
            const bottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 100;
            setShowFooter(bottom);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full absolute bottom-0 left-0 z-10 pointer-events-none">
            <div className="relative w-full h-48 md:h-64">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path
                        fill={color}
                        fillOpacity="0.4"
                        d="M0,200 C480,250 960,50 1440,200 L1440,320 L0,320 Z"
                    />

                    <path
                        fill={color}
                        fillOpacity="0.6"
                        d="M0,220 C480,100 960,270 1440,220 L1440,320 L0,320 Z"
                    />

                    <path
                        fill={color}
                        fillOpacity="1"
                        d="M0,240 C360,350 1080,140 1440,260 L1440,320 L0,320 Z"
                    />
                </svg>
                <footer className={`absolute bottom-0 z-20 w-full text-center py-4 text-white text-sm transition-opacity duration-700 ${showFooter ? "opacity-100" : "opacity-0"}`}>
                    © {new Date().getFullYear()} Ryan Chen. All rights reserved.
                </footer>
            </div>
        </div>
    )
}

export default Waves;