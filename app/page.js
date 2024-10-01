import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Project from "./_components/Project";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}
