import { useRef } from "react";

import PageBackground from "./components/pageBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

export default function App() {
  const appRef = useRef(null);

  return (
    <div
      ref={appRef}
      className="app min-h-screen overflow-x-clip bg-brand-bg font-sans text-brand-text antialiased"
    >
      <PageBackground appRef={appRef} />

      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Pricing />
          <Testimonials />
          <CTA />
          <Contact />
        </main>

        <Footer />

        <FloatingWhatsApp />
        <BackToTop />
      </div>
    </div>
  );
}
