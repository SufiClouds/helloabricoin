import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";
import ClientSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection ";
import { Footer } from "./components/Footer";
import CalculateCoinPage from "./components/CalculateCoinPage";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Partners />
      <WhyChooseUs />
      <ContactSection />
      <Footer/>
      <CalculateCoinPage/>
      
    </div>

  );
}
