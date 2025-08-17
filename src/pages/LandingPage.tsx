import React, { useState } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIAgentTypesSection from "@/components/AIAgentTypesSection";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import GetEarlyAccessModal from '@/components/GetEarlyAccessModal';

const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div id="hero-section">
          <HeroSection onGetEarlyAccessClick={handleOpenModal} />
        </div>
        <div id="how-it-works-section">
          <HowItWorksSection />
        </div>
        <div id="agents-section">
          <AIAgentTypesSection />
        </div>
        {/* MarketOpportunitySection doesn't have a direct nav link, so no ID needed for now */}
        <MarketOpportunitySection />
        <div id="testimonials-section">
          <TestimonialsSection />
        </div>
        <div id="pricing-section">
          <PricingSection onGetStartedClick={handleOpenModal} />
        </div>
      </main>
      <div id="contact-section">
        <Footer />
      </div>
      <MadeWithDyad />
      <GetEarlyAccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LandingPage;