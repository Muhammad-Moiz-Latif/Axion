import bg from '../assets/muscles-wallpaper-5120x2880-photoaidcom-greyscale.jpg';
import { Arimo } from 'next/font/google';
import LightRays from './ui/LightRays';
import CalorieStat from './ui/CalorieStat';
import HeartRateStat from './ui/HeartRateStat';
import MuscleActivation from './ui/Muscle';
import BloodPressure from './ui/BloodPressure';

const arimo = Arimo({
    variable: '--font-arimo',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function Hero() {
    return (
        <div className={`relative h-screen w-full text-white ${arimo.className} flex justify-center items-center`}>
            {/* Light Rays Layer */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: -10, right: 0, zIndex: 10 }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={1}
                    rayLength={1}
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
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className='absolute left-[35%] top-[65%]'> 
                <CalorieStat />
            </div>
            <div className='absolute right-[35%]'>
                <HeartRateStat/>
            </div>
            <div className='absolute top-[35%] left-[35%]'>
                <MuscleActivation/>
            </div>
            <div className='absolute top-[41%] right-[32%]'>
                <BloodPressure/>
            </div>
        </div>
    );
}
