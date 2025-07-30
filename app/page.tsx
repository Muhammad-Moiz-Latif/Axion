import Hero from "@/components/Hero";
import NavBar from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-full min-h-screen py-4 pr-6">
        <NavBar/>
        <Hero/>
      </div>
    </>
  );
}
