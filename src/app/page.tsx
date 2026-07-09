import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Experience } from "@/components/Experience";
import { HowItWorks } from "@/components/HowItWorks";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";
import { AmbientLights } from "@/components/AmbientLights";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <AmbientLights />
      <div className="site-vignette" aria-hidden />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <Features />
        <Experience />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </>
  );
}
