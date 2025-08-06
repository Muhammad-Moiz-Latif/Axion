import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import Plan from "@/components/Plan";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div className="max-w-full min-h-screen">
        <Hero />
        <LogoSlider />
        <Services/>
        <WhyChooseUs/>
        <Testimonials/>
        <Plan/>
      </div>
    </>
  );
}
