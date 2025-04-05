
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Truck, Package, Archive, Building, Home, Globe } from 'lucide-react';
import CTA from '@/components/home/CTA';

const servicesData = [
  {
    id: 'residential',
    title: 'Residential Moving',
    icon: <Home className="w-12 h-12 text-moving-secondary" />,
    description: 'Our residential moving services cover everything from small apartments to large family homes. We handle your belongings with care, ensuring a smooth transition to your new home.',
    details: [
      'Careful handling of furniture and fragile items',
      'Disassembly and reassembly of furniture',
      'Floor and doorway protection',
      'Organized loading and unloading',
      'Placement of items in designated areas'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Moving',
    icon: <Building className="w-12 h-12 text-moving-secondary" />,
    description: 'Minimize downtime with our efficient commercial moving services. We work around your schedule to ensure your business operations continue smoothly during the transition.',
    details: [
      'After-hours and weekend moving options',
      'IT equipment handling and setup',
      'Office furniture disassembly and assembly',
      'Employee relocation assistance',
      'Project management for complex moves'
    ]
  },
  {
    id: 'packing',
    title: 'Packing & Unpacking',
    icon: <Package className="w-12 h-12 text-moving-secondary" />,
    description: 'Our professional packing services save you time and ensure maximum protection for your belongings. We use quality materials and efficient techniques for safe transport.',
    details: [
      'Full and partial packing options',
      'Custom crating for valuable items',
      'Unpacking and debris removal',
      'Specialized materials for fragile items',
      'Inventory management systems'
    ]
  },
  {
    id: 'long-distance',
    title: 'Long Distance Moving',
    icon: <Truck className="w-12 h-12 text-moving-secondary" />,
    description: 'Moving across state lines or across the country? Our long-distance moving services provide reliable, timely transportation with tracking capabilities.',
    details: [
      'Dedicated trucks for direct delivery',
      'GPS tracking of your shipment',
      'Climate-controlled transport options',
      'Interstate moving expertise',
      'Coordination with origin and destination teams'
    ]
  },
  {
    id: 'international',
    title: 'International Moving',
    icon: <Globe className="w-12 h-12 text-moving-secondary" />,
    description: 'Our international moving services handle all the complexities of overseas relocation, from customs documentation to safe overseas shipping.',
    details: [
      'Door-to-door service worldwide',
      'Customs documentation assistance',
      'Container and air freight options',
      'Storage at origin or destination',
      'International partners network'
    ]
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    icon: <Archive className="w-12 h-12 text-moving-secondary" />,
    description: 'Need temporary or long-term storage? Our secure, climate-controlled facilities keep your belongings safe until you need them.',
    details: [
      'Short and long-term options',
      'Climate-controlled units',
      '24/7 security monitoring',
      'Easy access to your belongings',
      'Inventory management system'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-moving-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Comprehensive Moving Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              From packing and loading to transportation and unpacking, we offer end-to-end solutions tailored to your specific moving needs.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {servicesData.map((service, index) => (
                <div key={service.id} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 bg-white rounded-lg shadow-md p-8`}>
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-moving-primary/10 p-8 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold mb-4 text-moving-dark">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 text-moving-secondary">•</div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-moving-secondary hover:bg-moving-secondary/90 text-white">
                      Get a Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
