import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          OmniAgent
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works-section" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#agents-section" className="text-gray-600 hover:text-blue-600 transition-colors">Agents</a>
          <a href="#testimonials-section" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#pricing-section" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#contact-section" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:block">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-full">
            Sign In
          </Button>
        </div>
        {/* Mobile menu button (can be expanded later) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            {/* Icon for mobile menu, e.g., Menu from lucide-react */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;