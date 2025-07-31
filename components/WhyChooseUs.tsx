import { Arimo } from "next/font/google"
import dude from '../assets/dude.png';
import rightup from '../assets/right-up.png';
import datadriven from '../assets/data-driven.png'
import results from '../assets/results.png';
import personalization from '../assets/personalization.png';
import greek from '../assets/greek.png';
import star from '../assets/star.png';



const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})


export default function WhyChooseUs() {
    return (
        <>
            <div className={`max-w-screen relative px-7 h-[100vh] bg-black text-white mb-32 flex flex-col ${arimo.className}`}>
                <img src={greek.src} className="absolute object-contain z-0 -top-30 right-7 size-[55rem] overflow-hidden" />
                <h1 className="text-5xl mb-2 z-10 tracking-tight">Why Choose Axion?</h1>
                <p className="text-sm text-zinc-400 mb-14 z-10 w-[33rem]">This isn't just another stop — it's the shift you've been waiting for, the moment where discipline meets direction, and your fitness journey truly begins to transform.</p>
                <div className="flex flex-col h-full w-full z-10">
                    <div className="flex flex-col gap-3 h-full justify-start items-start mb-10">
                        <div className="flex flex-1  pl-4 w-[40%] gap-4 items-center">
                            <img src={datadriven.src} className="size-10" />
                            <div className=" flex flex-col">
                                <h1 className="text-2xl mb-1 tracking-tight">Data-Driven Precision</h1>
                                <p className="text-sm text-zinc-400 text-start">Every plan we craft is powered by real metrics and tracked insights, ensuring progress you can clearly see and confidently measure.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 pl-4 w-[40%] gap-4 items-center ">
                            <img src={personalization.src} className="size-10" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl mb-1 tracking-tight">Tailored to You</h1>
                                <p className="text-sm text-zinc-400">No cookie-cutter programs here. Every workout and meal plan is carefully built around your unique body, lifestyle, and long-term goals.</p>
                            </div>
                        </div>
                        <div className="flex flex-1 pl-4 w-[40%] gap-4 items-center ">
                            <img src={results.src} className="size-10" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl mb-1 tracking-tight">Results That Stick</h1>
                                <p className="text-sm text-zinc-400">We blend science, structure, and long-term consistency to ensure your growth isn't just temporary — it's a real, lasting lifestyle shift.</p>
                            </div>
                        </div>
                    </div>
                    {/* company stats will go here */}
                    <div className="w-full h-44 rounded-md border border-zinc-800 bg-black flex justify-evenly items-center">
                        <div className="flex flex-col flex-1 h-full justify-center items-center border border-r-zinc-800 border-y-black border-l-black rounded-l-md">
                            <h1 className="text-5xl text-[#DC2626]">25K+</h1>
                            <p className="text-zinc-400 text-sm">Active Users</p>
                        </div>
                         <div className="flex flex-col flex-1 h-full justify-center items-center border border-r-zinc-800 border-y-black border-l-black rounded-l-md">
                            <h1 className="text-5xl text-[#DC2626]">98%</h1>
                            <p className="text-zinc-400 text-sm">Client Retention</p>
                        </div>
                         <div className="flex flex-col flex-1 h-full justify-center items-center border border-r-zinc-800 border-y-black border-l-black rounded-l-md">
                            <div className="flex gap-1 justify-center items-center">
                                <h1 className="text-5xl text-[#DC2626]">4.9</h1>
                                <img src={star.src} className="size-7"/>
                            </div>
                            
                            <p className="text-zinc-400 text-sm">Avg. Rating</p>
                        </div>
                         <div className="flex flex-col flex-1 justify-center items-center">
                            <h1 className="text-5xl text-[#DC2626]">120+</h1>
                            <p className="text-zinc-400 text-sm">Programs Offered</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}