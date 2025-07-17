import React from "react";

const color = "#212121"

const Waves: React.FC = () => {
    return (
        <div className="w-full absolute bottom-0 left-0 z-10 pointer-events-none">
            <svg className="w-full h-48 md:h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
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
        </div>
    )
}

export default Waves;