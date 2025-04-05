
import { Shield, Clock, Award, DollarSign, ThumbsUp, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-10 h-10 text-moving-primary" />,
      title: "Fully Insured",
      description: "Your belongings are fully protected throughout the entire moving process."
    },
    {
      icon: <Clock className="w-10 h-10 text-moving-primary" />,
      title: "Punctual Service",
      description: "We value your time and always arrive as scheduled for your move."
    },
    {
      icon: <Award className="w-10 h-10 text-moving-primary" />,
      title: "Experienced Team",
      description: "Our movers have years of experience handling all types of relocations."
    },
    {
      icon: <DollarSign className="w-10 h-10 text-moving-primary" />,
      title: "Competitive Rates",
      description: "Quality moving services at transparent, affordable prices."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-moving-primary" />,
      title: "Satisfaction Guarantee",
      description: "We're not satisfied until you're completely happy with our service."
    },
    {
      icon: <Users className="w-10 h-10 text-moving-primary" />,
      title: "Customer-Focused",
      description: "Your specific needs and concerns are our top priority."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-moving-dark">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We stand out from the competition with our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
