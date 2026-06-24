import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Education from "@/components/Education";
import Flagship from "@/components/Flagship";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Flagship />
        <Projects />
        <Capabilities />
        <Process />
        <Education />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
