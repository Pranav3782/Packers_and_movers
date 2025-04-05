
import { ClipboardCheck, Truck, Home } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-12 h-12 text-moving-secondary" />,
      title: "Request a Quote",
      description: "Fill out our simple form or call us to get a free, no-obligation quote for your move."
    },
    {
      icon: <Truck className="w-12 h-12 text-moving-secondary" />,
      title: "Schedule Your Move",
      description: "We'll work with you to find the perfect date and time for your relocation needs."
    },
    {
      icon: <Home className="w-12 h-12 text-moving-secondary" />,
      title: "Enjoy Your New Space",
      description: "Relax as our professionals handle everything from packing to unpacking in your new location."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-moving-dark">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple 3-step process makes your move easy and stress-free
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center md:w-1/3">
              <div className="relative">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-moving-primary/10 mb-4">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -z-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-moving-secondary"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
