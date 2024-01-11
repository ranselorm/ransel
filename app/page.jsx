import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ChooseMe from "@/components/ChooseMe";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </div>
  );
}
