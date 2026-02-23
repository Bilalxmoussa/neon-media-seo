import { Web3HeroAnimated } from "@/components/ui/animated-web3-landing-page";
import TrustBar from "@/components/TrustBar";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import AreasServed from "@/components/AreasServed";
import CTA from "@/components/CTA";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      <main>
        <Web3HeroAnimated />
        <TrustBar />
        <Intro />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <AreasServed />
        <CTA />
      </main>
    </>
  );
}
