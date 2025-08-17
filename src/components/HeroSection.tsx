import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
          Deploy AI coworkers in every department.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          OmniAgent automates the repetitive so your people can focus on what truly matters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Button className="px-8 py-3 text-lg bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Early Access
          </Button>
          <Button variant="outline" className="px-8 py-3 text-lg border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-gray-900 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;