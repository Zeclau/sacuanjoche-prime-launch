import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import RegionalCoverage from "@/components/landing/RegionalCoverage";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import InternationalReach from "@/components/landing/InternationalReach";
import Innovation from "@/components/landing/Innovation";
import WhatIsSPW from "@/components/landing/WhatIsSPW";
import HowItWorks from "@/components/landing/HowItWorks";
import Cities from "@/components/landing/Cities";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import StickyWhatsApp from "@/components/landing/StickyWhatsApp";

const Index = () => {
  // Subtle reveal-on-scroll for all <section> elements inside <main>
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = document.querySelectorAll<HTMLElement>("main > section:not(:first-child)");
    sections.forEach((s) => s.setAttribute("data-reveal", ""));

    if (prefersReduced) {
      sections.forEach((s) => s.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <RegionalCoverage />
        <TrustStrip />
        <WhatIsSPW />
        <ProblemSolution />
        <Features />
        <InternationalReach />
        <Innovation />
        <HowItWorks />
        <Cities />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Index;
