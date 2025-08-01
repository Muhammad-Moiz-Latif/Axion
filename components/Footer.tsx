"use client";

import logo from '../assets/AXION.png';
import { Arimo } from 'next/font/google';

const arimo = Arimo({
    variable: '--font-arimo',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']
})

export const Footer = () => {

    return (
        <div className={`w-full min-h-96 bg-black pt-10 px-7 ${arimo.className} text-white flex flex-col gap-10 justify-end`}>
            {/* Main content grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-end">

                {/* Logo and description */}
                <div className="flex flex-col relative w-full h-full">
                    <img
                        src={logo.src || "/placeholder.svg"}
                        className="size-32 absolute top-0"
                        alt="Company Logo"
                    />
                    <p className="text-sm text-zinc-300 md:max-w-none mt-24 pl-6">
                        You read this far, might as well sign up.
                    </p>
                    <div className='flex gap-3 pl-6 mt-5'>
                        <input className="text-xs border-b border-b-zinc-400" placeholder='First name' />
                        <input className="text-xs border-b border-b-zinc-400" placeholder='johndoe@osmo.supply' />
                    </div>
                    <button className='bg-zinc-800 w-20 mt-3 ml-6 text-sm px-3 py-1 rounded-[3px]'>Sign up</button>

                </div>

                {/* Links section */}
                <div className="flex flex-col sm:flex-row justify-around md:justify-start gap-8 sm:gap-10 md:gap-10">
                    {/* Quick Links */}
                    <div className="flex flex-col items-center sm:items-start pl-0 md:pl-24">
                        <h1 className=" mb-3 text-[#DC2626] text-xs">
                            Quick Links
                        </h1>
                        <ul className="flex flex-col gap-2 text-center sm:text-left">
                            {['About Us', 'Contact Us', 'FAQ', 'Privacy Policy', 'Services'].map((link, index) => (
                                <li
                                    key={index}
                                    className="text-md text-zinc-300 cursor-pointer hover:text-[#DC2626] transition-colors duration-300 tracking-tight"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className=" mb-3 text-[#DC2626] text-xs">
                            Social Links
                        </h1>
                        <ul className="flex flex-col gap-2 text-center sm:text-left">
                            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((social, index) => (
                                <li
                                    key={index}
                                    className="text-md text-zinc-300 cursor-pointer hover:text-[#DC2626] transition-colors duration-300 tracking-tight"
                                >
                                    {social}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Box */}
                <div className="flex flex-col rounded-xl p-6 gap-2 items-center justify-center border border-zinc-900 text-center hover:border-[#DC2626] transition-all duration-300">
                    <h1 className="text-xl cursor-pointer">
                        Contact Us
                    </h1>
                    <p className="text-zinc-300 text-sm mb-3">
                        Have questions? Reach out to our support team.
                    </p>
                    <button className="bg-[#DC2626] w-full sm:w-1/2 py-2 text-white rounded-[3px] text-base hover:bg-[#DC2626] transition-all duration-300">
                        Contact Support
                    </button>
                </div>
            </div>

            {/* Bottom section */}
            <div className="w-full flex flex-col gap-5 mt-20">
                <div className="text-center text-zinc-300 mb-5 text-xs md:text-sm">
                    © Copyright 2025, All Rights Reserved by Moiz Latif
                </div>
            </div>
        </div>
    );
};
