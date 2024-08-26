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
      {/* <Navbar /> */}
      <Hero />
      <About />
      {/* <Skills /> */}
      <Project />
      <Footer />      
    </main>
  );
}
