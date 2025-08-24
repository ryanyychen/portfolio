import React from "react";
import Image from "next/image";
import { prefix } from "@/app/prefix";

const email = <path fillRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"/>
const location = <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" />
const github = <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" />

const Connect: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center section">
            <h1 className="section-title">Let&apos;s Connect!</h1>
            <div className="flex flex-row w-[70vw] md:w-[40vw] mt-[3vh] justify-between">
                <div className="flex flex-col items-start w-[40vw] gap-6">
                    <div
                        onClick={() => window.open("mailto:yuyou.chen@usc.edu", "_blank")}
                        className="flex flex-row gap-2 items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.1]"
                    >
                        <div className="relative w-[40px] h-[40px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                className="fill-text"
                            >
                                {email}
                            </svg>
                            <p className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-background text-text text-xs font-bold text-center justify-center rounded-full">
                                1
                            </p>
                        </div>
                        <p className="text-md text-text">yuyou.chen@usc.edu</p>
                    </div>
                    <div
                        onClick={() => window.open("mailto:ryan.yychen@gmail.com", "_blank")}
                        className="flex flex-row gap-2 items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.1]"
                    >
                        <div className="relative w-[40px] h-[40px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                className="fill-text"
                            >
                                {email}
                            </svg>
                            <p className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-background text-text text-xs font-bold text-center justify-center rounded-full">
                                2
                            </p>
                        </div>
                        <p className="text-md text-text">ryan.yychen@gmail.com</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center transition-all duration-300 hover:scale-[1.1]">
                        <div className="relative w-[40px] h-[40px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40px"
                                height="40px"
                                viewBox="104 411 24 32"
                                className="fill-text"
                            >
                                {location}
                            </svg>
                        </div>
                        <p className="text-md text-text">Los Angeles, California</p>
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
                        className="relative w-[30px] h-[30px] cursor-pointer transition-all duration-300 hover:scale-[1.1]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30px"
                            height="30px"
                            viewBox="84 7399 20 19"
                            className="fill-text"
                        >
                            {github}
                        </svg>
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