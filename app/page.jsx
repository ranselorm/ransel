import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChooseMe from "@/components/ChooseMe";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <ChooseMe />
      <Portfolio />
    </div>
  );
}
