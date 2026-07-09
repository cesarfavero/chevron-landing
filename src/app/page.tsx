import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Experience } from "@/components/Experience";
import { HowItWorks } from "@/components/HowItWorks";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
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
