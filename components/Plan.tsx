import { Arimo } from "next/font/google"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})


export default function Plan() {
    return (
        <>
            <div className={`w-hull h-[120vh] bg-black ${arimo.className} text-white p-7 items-center flex flex-col mb-36`}>
                <h1 className="text-5xl tracking-tight text-center mb-3">One plan, constant updates.</h1>
                <p className="text-sm text-center text-zinc-400 mb-16">Access everything Axion has to offer — from expert routines to nutritional guides — <br />and connect with a community that trains with intention. Join now and lock in your rate for life. <br />No hidden charges. No surprises. Just progress.
                </p>
                <div className="flex justify-center items-center w-full h-full gap-5 px-36">
                    <div className="w-[60%] h-full border border-zinc-800 bg-zinc-950 rounded-md flex flex-col justify-end items-center px-10 pb-7">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <h1 className="text-center text-6xl ">$21</h1>
                            <div className="w-[2px] h-12 rotate-20 bg-white"></div>
                            <h1 className="text-6xl">mo</h1>
                        </div>

                        <div className="grid grid-cols-[40%,60%,40%] items-center w-full gap-1 mb-12">
                            <div className="flex justify-center w-full">
                                <div
                                    className="w-[90%] h-[0.5px] bg-zinc-600"
                                    style={{
                                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                    }}
                                ></div>
                            </div>
                            <h2 className="text-xs text-center uppercase">$240 Billed annually</h2>
                            <div className="flex justify-center w-full">
                                <div
                                    className="w-[90%] h-[0.5px] bg-zinc-600"
                                    style={{
                                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-[3px] flex gap-5 px-2 py-1 border border-zinc-800 mb-1">
                            <button>Quarterly</button>
                            <button className="bg-zinc-800 h-full py-2 px-3 rounded-[3px] border border-zinc-600">Annually</button>
                        </div>
                        <h1 className="text-zinc-400 text-xs text-center uppercase tracking-widest mb-14">you're saving $60 a year</h1>
                        <h1 className="text-center text-sm text-zinc-300 mb-5">One simple plan. Full access to everything — workouts, <br />nutrition, tools, and community. Just $60 a year.</h1>
                        <button className="w-full tracking-tight h-10 rounded-[3px] bg-white text-black">Become an Axion Member</button>
                    </div>
                    <div className="w-[60%] h-full  bg-[#DC2626] rounded-md flex flex-col justify-end items-center px-10 pb-7 text-black">
                        <h1 className="text-center text-6xl mb-2">$599</h1>
                        <div className="grid grid-cols-[40%,60%,40%] items-center w-full gap-1 mb-12">
                            <div className="flex justify-center w-full">
                                <div
                                    className="w-[90%] h-[0.5px] bg-black"
                                    style={{
                                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                    }}
                                ></div>
                            </div>
                            <h2 className="text-xs text-center uppercase">$240 Billed annually</h2>
                            <div className="flex justify-center w-full">
                                <div
                                    className="w-[90%] h-[0.5px] bg-black"
                                    style={{
                                        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="bg-red-800 rounded-[3px] px-2 py-1 border border-red-900 mb-1">
                            <button className="h-full py-2 px-3">Limited availability</button>
                        </div>
                        <h1 className="text-zinc-800 text-xs text-center uppercase tracking-widest mb-14">next price tier: €750</h1>
                        <h1 className="text-center text-sm text-black mb-5">No complicated tiers, just one plan that gives you full access to our Vault. Save with the yearly option.</h1>
                        <div className="relative w-full"> 
                            <button className="w-full tracking-tight h-[44px] rounded-[3px] bg-black text-white">Become a Lifetime Member</button>
                            <h4 className="text-black absolute top-2 right-20 text-[8px]">TM</h4>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}