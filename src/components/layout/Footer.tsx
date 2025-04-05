
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-moving-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">SwiftMove Masters</h3>
            <p className="text-gray-300 mb-4">
              Professional packing and moving services you can trust. We make your relocation experience smooth and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-moving-secondary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-moving-secondary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-moving-secondary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-moving-secondary" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-moving-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-moving-secondary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-moving-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-moving-secondary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-moving-secondary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-moving-secondary transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/local-moving" className="text-gray-300 hover:text-moving-secondary transition-colors">Local Moving</Link>
              </li>
              <li>
                <Link to="/services/long-distance" className="text-gray-300 hover:text-moving-secondary transition-colors">Long Distance Moving</Link>
              </li>
              <li>
                <Link to="/services/international" className="text-gray-300 hover:text-moving-secondary transition-colors">International Moving</Link>
              </li>
              <li>
                <Link to="/services/office-relocation" className="text-gray-300 hover:text-moving-secondary transition-colors">Office Relocation</Link>
              </li>
              <li>
                <Link to="/services/packing" className="text-gray-300 hover:text-moving-secondary transition-colors">Packing & Unpacking</Link>
              </li>
              <li>
                <Link to="/services/storage" className="text-gray-300 hover:text-moving-secondary transition-colors">Storage Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-moving-secondary" />
                <span className="text-gray-300">123 Moving Street, Suite 456, Relocation City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-moving-secondary" />
                <a href="tel:+918000000000" className="text-gray-300 hover:text-moving-secondary">800-000-0000</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-moving-secondary" />
                <a href="mailto:info@swiftmovemasters.com" className="text-gray-300 hover:text-moving-secondary">info@swiftmovemasters.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} SwiftMove Masters. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy" className="hover:text-moving-secondary">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-moving-secondary ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
