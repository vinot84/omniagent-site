import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">OmniAgent</h3>
          <p className="text-sm mb-2">Deploy AI coworkers in every department.</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} OmniAgent. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start">
              <Mail size={18} className="mr-2 text-gray-400" />
              <a href="mailto:info@omniagent.com" className="hover:text-white transition-colors">info@omniagent.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone size={18} className="mr-2 text-gray-400" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
            </li>
            <li className="text-sm">123 AI Street, Suite 400, Innovation City, CA 90210</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;