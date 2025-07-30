import logo from '@/assets/AXION.png';
import { Arimo } from 'next/font/google';
import { ArrowDown } from 'lucide-react';

const arimo = Arimo({
    variable: '--font-arimo',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']
})


export default function NavBar() {
    return (
        <>
            <nav className={`fixed top-0 left-0 w-full h-14 flex justify-between items-center pr-6 text-white ${arimo.className} backdrop-blur-md bg-black/20 z-50`}>
                <img src={logo.src} className='size-32' alt="Axion logo" />

                <div className='flex gap-10 text-[15px] pl-16'>
                    <h1>Home</h1>
                    <h1>Pricing</h1>
                    <div className='flex items-center gap-0.5'>
                        <h1>Services</h1>
                        <ArrowDown className='text-[#DC2626] size-4' />
                    </div>
                    <h1>FAQ</h1>
                </div>

                <div className='flex gap-3'>
                    <button className='bg-white text-black w-[6.2rem] h-9 rounded-[3px] text-[15px]'>Login</button>
                    <button className='w-[6.2rem] h-9 text-white bg-[#DC2626] rounded-[3px] text-[15px]'>Get Started</button>
                </div>
            </nav>

        </>
    )
}