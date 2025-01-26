import CallToAction from "@/components/CallToAction";
import Hero2 from "@/components/H2";
import Hero3 from "@/components/Hero3";
import Pricing from "@/components/PricePlan";
import System from "@/components/System";
import Testimonials from "@/components/Testimonials";
import ToolGrid from "@/components/ToolGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
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
