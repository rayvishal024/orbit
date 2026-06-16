import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Preview } from "@/components/landing/preview";
import { Features } from "@/components/landing/features";
import { AiShowcase } from "@/components/landing/ai-showcase";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Preview />
        <Features />
        <AiShowcase />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}