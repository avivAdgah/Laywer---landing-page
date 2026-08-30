import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingMessageButton from "@/components/FloatingMessageButton";
import MobileContactBar from "@/components/MobileContactBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <WhyChooseUs />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingMessageButton />
      <MobileContactBar />
    </>
  );
}
