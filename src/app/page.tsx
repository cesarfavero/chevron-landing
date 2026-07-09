import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Works } from "@/components/Works";
import { Product } from "@/components/Product";
import { Faq } from "@/components/Faq";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise-bg" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Works />
        <Product />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
