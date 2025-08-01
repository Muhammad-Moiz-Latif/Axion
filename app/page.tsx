import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import LogoSlider from "@/components/LogoSlider";
import NavBar from "@/components/Nav";
import Plan from "@/components/Plan";
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
  
        <LogoSlider />
        <Services/>
        <WhyChooseUs/>
        <Testimonials/>
        <Plan/>
        <JoinUs/>
        <Footer/>
      </div>
    </>
  );
}
