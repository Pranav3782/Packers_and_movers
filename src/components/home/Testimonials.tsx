
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Residential Move",
      quote: "SwiftMove Masters made my family's move incredibly smooth. The team was professional, careful with our belongings, and finished ahead of schedule!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Office Relocation",
      quote: "Our business needed to relocate quickly with minimal downtime. SwiftMove Masters handled everything efficiently, and we were operational again in no time.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Long Distance Move",
      quote: "Moving across states was daunting, but SwiftMove Masters took care of everything. Their transparent pricing and constant communication made all the difference.",
      rating: 4
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Storage Customer",
      quote: "I needed temporary storage during my transition between homes. Their facilities were clean, secure, and the staff was always helpful when I needed access.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-moving-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < testimonials[currentIndex].rating ? "#f97316" : "none"} 
                    className={i < testimonials[currentIndex].rating ? "text-moving-secondary" : "text-gray-400"} 
                  />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="font-semibold">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-sm text-gray-300">
                {testimonials[currentIndex].role}
              </div>
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
              <button 
                onClick={handlePrevious}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
              <button 
                onClick={handleNext}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-moving-secondary' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
