
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-moving-primary to-moving-dark rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for a Stress-Free Move?</h2>
              <p className="text-gray-200 text-lg max-w-xl">
                Contact us today to get a free quote and let our professional team handle all your moving needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918000000000">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-semibold flex items-center">
                  <Phone size={18} className="mr-2" />
                  Call Now: 800-000-0000
                </Button>
              </a>
              <Button size="lg" className="bg-moving-secondary hover:bg-moving-secondary/90 text-white font-semibold">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
