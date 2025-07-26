import Image from "next/image";
import { prefix } from '@/app/prefix';

export default function AboutPage() {
    return (
        <main className="flex flex-col overflow-y-scroll items-center h-full">
            <p>Hi! I’m Ryan Chen, a Computer Science Master’s student at USC with a background in Mathematics-Computer Science from UC San Diego. I specialize in building intelligent systems at the intersection of AI, reinforcement learning, and full-stack development. Whether it’s deploying scalable web platforms, designing autonomous agents, or developing AI-powered teaching tools, I’m driven by a passion for creating practical, performant, and impactful software solutions. I’m always exploring new technologies and looking for opportunities to solve challenging problems with clean, scalable code.</p>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl">Education</h1>
                <div className="flex flex-col justify-items-end">
                    <Image src={`${prefix}/USC.png`} alt="USC Logo" width={727} height={184} className="inline-block mr-2 w-auto h-[90px]" />
                    <p className="text-xl self-center">Master of Science, Computer Science</p>
                </div>
                <div className="flex flex-col justify-items-end">
                    <Image src={`${prefix}/UCSD.png`} alt="UCSD Logo" height={1204} width={229} className="inline-block mr-2 w-auto h-[75px]" />
                    <p className="text-xl self-center">Bachelor of Science, Mathematics-Computer Science</p>
                </div>
            </div>
        </main>
    )
}