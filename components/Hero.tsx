import bg from '../assets/muscles-wallpaper-5120x2880-photoaidcom-greyscale.jpg';
import { Arimo } from 'next/font/google';
import LightRays from './ui/LightRays';
import CalorieStat from './ui/CalorieStat';
import HeartRateStat from './ui/HeartRateStat';
import MuscleActivation from './ui/Muscle';
import BloodPressure from './ui/BloodPressure';
import learnmore from '../assets/right-up.png';

const arimo = Arimo({
    variable: '--font-arimo',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function Hero() {
    return (
        <div className={`relative h-screen w-full text-white ${arimo.className} flex justify-center items-center`}>
            {/* Light Rays Layer */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: -10, zIndex: 10 }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={2}
                    rayLength={0.8}
                    followMouse={true}
                    mouseInfluence={0}
                    noiseAmount={0.2}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            {/* Background Image Layer */}
            <img
                src={bg.src}
                alt="Muscular Background"
                className="absolute inset-0 top-7 w-full h-full object-cover z-0"
            />
            {/* Background stats for Image */}
            <div className='absolute left-[35%] top-[60%]'>
                <CalorieStat />
            </div>
            <div className='absolute right-[35%] bottom-[45%]'>
                <HeartRateStat />
            </div>
            <div className='absolute top-[40%] left-[35%]'>
                <MuscleActivation />
            </div>
            <div className='absolute top-[45%] right-[32%]'>
                <BloodPressure />
            </div>
            <div className='absolute bottom-8 flex flex-col gap-1'>
                <h1 className=' text-6xl text-center font-semibold'><span className='text-[#DC2626]'>Built.</span> Not Born.</h1>
                <p className='text-sm text-center text-zinc-400 leading-4 mb-2'>We offer data-driven fitness training that tracks real progress.</p>
                <div className='flex justify-center items-center gap-2'>
                    <button className='bg-[#DC2626]  text-sm py-[10px] px w-[9rem] rounded-[3px]'>Become a member</button>
                    <button className='py-[9px] text-sm w-[9rem] rounded-[3px] border-[1px] border-white flex justify-center items-center gap-1'>
                        <span>Learn More</span>
                        <img src={learnmore.src} className='size-4'/>
                    </button>
                </div>
            </div>

        </div>
    );
}
