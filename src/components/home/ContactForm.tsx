
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveType: '',
    moveDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      moveType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Submitted",
        description: "We've received your request and will contact you shortly!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveType: '',
        moveDate: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 bg-moving-primary text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Request a Free Quote</h2>
            <p className="text-center mt-2 text-gray-200">
              Fill out the form below and we'll get back to you with a customized quote
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  placeholder="(123) 456-7890" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="moveType">Type of Move</Label>
                <Select 
                  value={formData.moveType}
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger id="moveType">
                    <SelectValue placeholder="Select move type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial/Office</SelectItem>
                    <SelectItem value="long-distance">Long Distance</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                    <SelectItem value="storage">Storage Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="moveDate">Preferred Move Date</Label>
                <Input 
                  id="moveDate" 
                  name="moveDate" 
                  type="date" 
                  required 
                  value={formData.moveDate}
                  onChange={handleChange}
                />
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us more about your move (origin, destination, special items, etc.)" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                type="submit" 
                className="w-full bg-moving-secondary hover:bg-moving-secondary/90 text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to our privacy policy and terms of service.
              We'll never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
