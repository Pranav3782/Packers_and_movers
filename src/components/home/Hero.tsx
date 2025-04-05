
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-moving-dark to-moving-primary text-white overflow-hidden">
      {/* Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
            Professional Packing & Moving Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
            We provide reliable, safe, and efficient relocation services for homes and businesses. Your move is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-moving-secondary hover:bg-moving-secondary/90 text-white font-semibold px-8">
              Get Free Quote
            </Button>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white font-semibold px-8">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stylized Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </section>
  );
};

export default Hero;
