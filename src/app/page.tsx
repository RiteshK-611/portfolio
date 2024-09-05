import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-[#ff520e] via-[#ff520e] to-[#ff520e] blur-[100px] flex-none h-[212px] opacity-50 overflow-visible absolute right-0 top-0 w-[1047px] z-[1]"></div>
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Project />
      <Footer />      
    </main>
  );
}
