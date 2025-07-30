import Hero from "@/components/Hero";
import NavBar from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-full min-h-screen">
        <NavBar/>
        <Hero/>
      </div>
    </>
  );
}
