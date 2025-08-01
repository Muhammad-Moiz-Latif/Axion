import { Arimo } from "next/font/google"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})



export default function JoinUs() {
    return (
        <>
            <div className={`w-full h-[50vh] bg-black text-white ${arimo.className} flex flex-col items-center`}>
                <div className="flex justify-center w-full mb-10">
                    <div
                        className="w-[90%] h-[0.5px] bg-zinc-700"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                        }}
                    ></div>
                </div>
                <h1 className="text-5xl text-center tracking-tight mb-5">Let's make this official, sign up<br/>and start your journey</h1>
                <div className="flex gap-3 items-center mb-5">
                    <div className="flex">
                        <img src={p1.src} className="rounded-full size-5 object-contain"/>
                        <img src={p2.src} className="rounded-full size-5 object-contain"/>
                        <img src={p3.src} className="rounded-full size-5 object-contain"/>
                        <img src={p4.src} className="rounded-full size-5 object-contain"/>
                    </div>
                    <h1 className="text-xs text-zinc-400">1025+ active members</h1>
                </div>
                <button className="bg-[#DC2626] text-white text-sm tracking-tight px-5 py-3 rounded-[3px]">Become a member</button>
                 <div className="flex justify-center w-full mt-10">
                    <div
                        className="w-[90%] h-[0.5px] bg-zinc-700"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}