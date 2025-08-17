import React from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: "#how-it-works-section", label: "How It Works", id: "how-it-works-section" },
    { href: "#agents-section", label: "Agents", id: "agents-section" },
    { href: "#testimonials-section", label: "Testimonials", id: "testimonials-section" },
    { href: "#pricing-section", label: "Pricing", id: "pricing-section" },
    { href: "#contact-section", label: "Contact", id: "contact-section" },
  ];

  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          OmniAgent
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 hover:text-gray-900 rounded-full">
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
                {navLinks.map(link => (
                  <SheetClose asChild key={link.id}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full">
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