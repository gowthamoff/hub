import Contact from "@/components/pages/Contact";
import Hero from "@/components/pages/Hero";
import Intro from "@/components/pages/Intro";
import Projects from "@/components/pages/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full font-bebas">
      <Hero />
      {/* <Intro />
      <Projects />
      <Contact /> */}
    </div>
  );
}
