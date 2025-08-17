import React from 'react';
import Header from "@/components/Header"; // New import
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIAgentTypesSection from "@/components/AIAgentTypesSection";
import MarketOpportunitySection from "@/components/MarketOpportunitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Added Header */}
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <AIAgentTypesSection />
        <MarketOpportunitySection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default LandingPage;