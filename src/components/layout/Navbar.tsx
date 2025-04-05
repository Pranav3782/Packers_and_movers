
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-moving-primary">Swift<span className="text-moving-secondary">Move</span></span>
            <span className="hidden md:inline-block ml-1 text-xl font-semibold text-gray-700">Masters</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-moving-secondary font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-moving-secondary font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-moving-secondary font-medium transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-800 hover:text-moving-secondary font-medium transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+918000000000" className="flex items-center text-moving-primary mr-4">
              <Phone size={16} className="mr-1" />
              <span className="font-medium">800-000-0000</span>
            </a>
            <Button className="bg-moving-secondary hover:bg-moving-secondary/90 text-white">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <nav className="flex flex-col px-4 py-2">
            <Link 
              to="/" 
              className="py-3 px-2 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="py-3 px-2 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="py-3 px-2 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="py-3 px-2 text-gray-800 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="py-3">
              <a href="tel:+918000000000" className="flex items-center text-moving-primary mb-2 px-2">
                <Phone size={16} className="mr-1" />
                <span className="font-medium">800-000-0000</span>
              </a>
              <Button className="w-full bg-moving-secondary hover:bg-moving-secondary/90 text-white">
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
