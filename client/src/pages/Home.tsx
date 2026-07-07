/**
 * Captain Jon's Pool Service — Home Page
 * Design: Gulf Coast Authority (Navy + Gold)
 * Congruent with: poolleaksarasota.com
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import ChemicalDeliverySection from "@/components/ChemicalDeliverySection";
import ServicePlansSection from "@/components/ServicePlansSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import MaintenanceChecklist from "@/components/MaintenanceChecklist";
import TestimonialsSection from "@/components/TestimonialsSection";
import PoolLeakCTA from "@/components/PoolLeakCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <ChemicalDeliverySection />
        <ServicePlansSection />
        <MaintenanceChecklist />
        <ServiceAreasSection />
        <TestimonialsSection />
        <PoolLeakCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
