/**
 * Captain Jon's Pool Service — Home Page
 * Design: Gulf Coast Authority (Navy + Gold)
 * Complete homeowner pool care: weekly service, chemical delivery, and leak detection.
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import ChemicalDeliverySection from "@/components/ChemicalDeliverySection";
import ServicePlansSection from "@/components/ServicePlansSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import AboutSection from "@/components/AboutSection";
import MaintenanceChecklist from "@/components/MaintenanceChecklist";
import TestimonialsSection from "@/components/TestimonialsSection";
import PoolLeakCTA from "@/components/PoolLeakCTA";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import MobileStickyBar from "@/components/MobileStickyBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <AboutSection />
        <ChemicalDeliverySection />
        <ServicePlansSection />
        <MaintenanceChecklist />
        <ServiceAreasSection />
        <TestimonialsSection />
        <PoolLeakCTA />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
