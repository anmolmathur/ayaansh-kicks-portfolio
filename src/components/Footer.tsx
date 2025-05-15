
import React from 'react';
import { Instagram, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-football-dark text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-2xl mb-2">Ayaansh Mathur</h2>
            <p className="text-gray-300">Professional Football Player</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-football-blue transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-football-blue transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:ayaansh.mathur@example.com" className="hover:text-football-blue transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#home" className="text-sm text-gray-300 hover:text-white">Home</a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-white">Skills</a>
            <a href="#gallery" className="text-sm text-gray-300 hover:text-white">Gallery</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
          </div>
          
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Ayaansh Mathur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
