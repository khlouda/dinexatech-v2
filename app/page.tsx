import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Process />
      <Testimonials />
    </>
  );
}
