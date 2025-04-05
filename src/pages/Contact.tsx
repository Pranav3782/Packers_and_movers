
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/home/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      city: "New York",
      address: "123 Moving Street, Suite 456, New York, NY 10001",
      phone: "(212) 000-0000",
      email: "newyork@swiftmovemasters.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM"
    },
    {
      city: "Los Angeles",
      address: "789 Relocation Ave, Los Angeles, CA 90001",
      phone: "(310) 000-0000",
      email: "la@swiftmovemasters.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM"
    },
    {
      city: "Chicago",
      address: "456 Transport Blvd, Chicago, IL 60601",
      phone: "(312) 000-0000",
      email: "chicago@swiftmovemasters.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-moving-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions or ready to plan your move? Our team is here to help you every step of the way.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="bg-moving-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-moving-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Our customer service team is available to answer your questions</p>
                <a href="tel:+918000000000" className="text-moving-primary font-semibold hover:underline">
                  800-000-0000
                </a>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="bg-moving-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-moving-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions or request a detailed quote</p>
                <a href="mailto:info@swiftmovemasters.com" className="text-moving-primary font-semibold hover:underline">
                  info@swiftmovemasters.com
                </a>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="bg-moving-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-moving-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday: 8AM - 6PM</p>
                <p className="text-gray-600">Saturday: 9AM - 3PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            {/* Office Locations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-moving-dark">Our Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {offices.map((office, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                    <div className="h-48 bg-gray-200">
                      {/* Map placeholder - would be replaced with actual map */}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{office.city} Office</h3>
                      <ul className="space-y-3">
                        <li className="flex">
                          <MapPin className="w-5 h-5 text-moving-secondary mr-2 flex-shrink-0 mt-1" />
                          <span>{office.address}</span>
                        </li>
                        <li className="flex">
                          <Phone className="w-5 h-5 text-moving-secondary mr-2 flex-shrink-0" />
                          <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="hover:text-moving-primary">
                            {office.phone}
                          </a>
                        </li>
                        <li className="flex">
                          <Mail className="w-5 h-5 text-moving-secondary mr-2 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:text-moving-primary">
                            {office.email}
                          </a>
                        </li>
                        <li className="flex">
                          <Clock className="w-5 h-5 text-moving-secondary mr-2 flex-shrink-0 mt-1" />
                          <span>{office.hours}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
