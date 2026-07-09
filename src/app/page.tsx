import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Works } from "@/components/Works";
import { Voices } from "@/components/Voices";
import { Faq } from "@/components/Faq";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";
import { GsapEffects } from "@/components/GsapEffects";

export default function Home() {
  return (
    <>
      <div className="noise-bg" aria-hidden />
      <GsapEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Works />
        <Voices />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
