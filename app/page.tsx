import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import NavBar from "@/components/Nav";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-full min-h-screen">
        <NavBar />
        <Hero />
        <div className="px-8 flex justify-center">
          <div
            className="w-[70%] h-[0.5px] bg-zinc-700 mt-7"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
          ></div>
        </div>
        <LogoSlider />
        <Services/>
        <WhyChooseUs/>
        <Testimonials/>
      </div>
    </>
  );
}
