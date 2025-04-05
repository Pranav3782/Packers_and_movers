
import { Truck, Package, Clock, Shield, Home, Building, Globe } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="bg-moving-primary/10 p-3 rounded-full mb-4 text-moving-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Home size={28} />,
      title: "Residential Moving",
      description: "Complete home relocation services with careful handling of your belongings."
    },
    {
      icon: <Building size={28} />,
      title: "Commercial Moving",
      description: "Efficient office and business relocations with minimal disruption."
    },
    {
      icon: <Package size={28} />,
      title: "Professional Packing",
      description: "Expert packing services using quality materials for maximum protection."
    },
    {
      icon: <Globe size={28} />,
      title: "Long Distance Moving",
      description: "Reliable long-distance and interstate moving with tracking services."
    },
    {
      icon: <Truck size={28} />,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage options for both short and long term."
    },
    {
      icon: <Shield size={28} />,
      title: "Insured & Protected",
      description: "Your possessions are fully insured during the entire moving process."
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-moving-dark">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience hassle-free relocation with our comprehensive range of professional moving services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
