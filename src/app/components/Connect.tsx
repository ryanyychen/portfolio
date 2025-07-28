import React from "react";
import Image from "next/image";
import { prefix } from "@/app/prefix";

const Connect: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center section">
            <h1 className="section-title">Let&apos;s Connect!</h1>
            <div className="flex flex-row w-[90vw] md:w-[40vw] mt-[3vh]">
                <div className="flex flex-col items-start w-[40vw] gap-6">
                    <div
                        onClick={() => window.open("mailto:yuyou.chen@usc.edu", "_blank")}
                        className="flex flex-row gap-2 items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.1]"
                    >
                        <div className="relative w-[40px] h-[40px]">
                            <Image
                                src={`${prefix}/connect/email.svg`}
                                alt="Email 1 Icon"
                                fill
                                className="object-contain"
                            />
                            <p className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-black text-white text-xs font-bold text-center justify-center rounded-full">
                                1
                            </p>
                        </div>
                        <p className="text-md">yuyou.chen@usc.edu</p>
                    </div>
                    <div
                        onClick={() => window.open("mailto:ryan.yychen@gmail.com", "_blank")}
                        className="flex flex-row gap-2 items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.1]"
                    >
                        <div className="relative w-[40px] h-[40px]">
                            <Image
                                src={`${prefix}/connect/email.svg`}
                                alt="Email 2 Icon"
                                fill
                                className="object-contain"
                            />
                            <p className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-black text-white text-xs font-bold text-center justify-center rounded-full">
                                2
                            </p>
                        </div>
                        <p className="text-md">ryan.yychen@gmail.com</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center transition-all duration-300 hover:scale-[1.1]">
                        <div className="relative w-[40px] h-[40px] p-4">
                            <Image
                                src={`${prefix}/connect/location.svg`}
                                alt="Location Pin Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-md">Los Angeles, California</p>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[10vw] gap-8">
                    <div 
                        onClick={() => window.open("https://linkedin.com/in/yu-you-ryan-chen/", "_blank")}
                        className="relative w-[30px] h-[30px] p-4 cursor-pointer transition-all duration-300 hover:scale-[1.1]">
                        <Image
                            src={`${prefix}/connect/linkedin.svg`}
                            alt="Linkedin Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div 
                        onClick={() => window.open("https://github.com/ryanyychen/", "_blank")}
                        className="relative w-[30px] h-[30px] p-4 cursor-pointer transition-all duration-300 hover:scale-[1.1]">
                        <Image
                            src={`${prefix}/connect/github.svg`}
                            alt="Linkedin Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div 
                        onClick={() => window.open("https://instagram.com/ryanyychen", "_blank")}
                        className="relative w-[30px] h-[30px] p-4 cursor-pointer transition-all duration-300 hover:scale-[1.1]">
                        <Image
                            src={`${prefix}/connect/instagram.svg`}
                            alt="Linkedin Icon"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect;