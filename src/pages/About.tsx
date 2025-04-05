
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Truck, Award, Star, BarChart, Heart } from 'lucide-react';
import CTA from '@/components/home/CTA';

const About = () => {
  const stats = [
    { value: '1500+', label: 'Successful Moves' },
    { value: '10+', label: 'Years of Experience' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '25+', label: 'Professional Movers' },
  ];

  const values = [
    {
      icon: <Users className="w-10 h-10 text-moving-primary" />,
      title: 'Customer-Centric',
      description: 'We place our customers at the heart of everything we do, delivering personalized service that meets their unique needs.'
    },
    {
      icon: <Truck className="w-10 h-10 text-moving-primary" />,
      title: 'Reliability',
      description: 'Count on us to deliver on our promises with punctuality, consistency, and transparent communication.'
    },
    {
      icon: <Award className="w-10 h-10 text-moving-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from initial consultation to final delivery.'
    },
    {
      icon: <Star className="w-10 h-10 text-moving-primary" />,
      title: 'Integrity',
      description: 'Honesty, transparency, and ethical practices form the foundation of our business relationships.'
    },
    {
      icon: <BarChart className="w-10 h-10 text-moving-primary" />,
      title: 'Innovation',
      description: 'We continuously improve our methods and adopt new technologies to enhance the moving experience.'
    },
    {
      icon: <Heart className="w-10 h-10 text-moving-primary" />,
      title: 'Care',
      description: 'We handle your belongings with the same care and attention we would give to our own possessions.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-moving-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SwiftMove Masters</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We've been helping families and businesses relocate with care and efficiency for over a decade.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-moving-dark">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SwiftMove Masters was founded in 2014 with a simple mission: to take the stress out of moving by providing reliable, professional, and caring service.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small local operation with just two trucks has grown into a comprehensive moving company serving customers nationwide. Our growth has been driven by our unwavering commitment to customer satisfaction and our reputation for reliability.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped thousands of families and businesses start their new chapters with minimal disruption and maximum care. Our experienced team continues to uphold the values that have defined us from day one: reliability, integrity, and exceptional service.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-moving-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-moving-dark">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide our decisions and actions every day, defining who we are as a company
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-moving-dark">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who lead our company with vision and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200 h-48"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">Team Member {member}</h3>
                    <p className="text-moving-secondary mb-4">Position Title</p>
                    <p className="text-gray-600 text-sm">
                      Bio description goes here. This person has extensive experience in the moving industry and is dedicated to providing exceptional service.
                    </p>
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

export default About;
