"use client";
import { useCallback, useState } from "react";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Training from "@/components/sections/Training";
import Facilities from "@/components/sections/Facilities";
import Supplements from "@/components/sections/Supplements";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SquareRadicalIcon } from "lucide-react";
export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);
  return (
    <>
      {!introComplete && <Intro onComplete={handleIntroComplete} />}
      <main className="min-h-screen bg-[#060907]">
        <Header />
        <Hero introComplete={introComplete} />
        <About />
        <Training />
        <Facilities />
        <Supplements />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  );
}