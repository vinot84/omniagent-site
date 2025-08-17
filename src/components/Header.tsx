import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

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
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-6 pt-8">
                <a href="#how-it-works-section" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
                <a href="#agents-section" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Agents</a>
                <a href="#testimonials-section" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#pricing-section" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#contact-section" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Sign In
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;