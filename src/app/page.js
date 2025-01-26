import CallToAction from "@/components/CallToAction";
import Hero2 from "@/components/H2";
import HeroSection from "@/components/Hero";
import Hero3 from "@/components/Hero3";
import LogoSection from "@/components/Logo";
import Pricing from "@/components/PricePlan";
import System from "@/components/System";
import Testimonials from "@/components/Testimonials";
import ToolGrid from "@/components/ToolGrid";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <HeroSection/>
      <LogoSection/>
      <Hero2/>
      <Hero3/>
      <System/>
      <ToolGrid/>
      <Testimonials/>
      <Pricing/>
      <CallToAction/>
    </div>
  );
}
