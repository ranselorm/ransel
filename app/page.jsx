import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      {/* <Services /> */}
      <Portfolio />
      <Connect />
      {/* <Contact /> */}
    </div>
  );
}
