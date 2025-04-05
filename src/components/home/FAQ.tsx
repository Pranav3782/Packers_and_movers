
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How far in advance should I book your moving services?",
      answer: "We recommend booking at least 2-4 weeks in advance for local moves and 4-6 weeks for long-distance moves. However, we understand that sometimes moves happen unexpectedly, so we do our best to accommodate last-minute requests based on availability."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, and specialized containers for fragile items. These can be included in your quote or purchased separately as needed."
    },
    {
      question: "Are my belongings insured during the move?",
      answer: "Yes, all your belongings are covered by our comprehensive moving insurance during the entire process. We offer basic coverage at no additional cost, with options to purchase extended coverage for high-value items."
    },
    {
      question: "How do you calculate the cost of a move?",
      answer: "Our pricing is based on several factors including distance, volume of items, accessibility at both locations (stairs, elevators, etc.), and any additional services required such as packing or storage. We provide transparent, detailed quotes with no hidden fees."
    },
    {
      question: "What items can't you move?",
      answer: "For safety and legal reasons, we cannot transport hazardous materials (flammables, explosives, chemicals), perishable items, plants, certain valuables, and personal/financial documents. We recommend transporting these items yourself."
    },
    {
      question: "Do you offer storage solutions?",
      answer: "Yes, we offer both short-term and long-term storage solutions in our secure, climate-controlled facilities. Your items will be carefully inventoried and stored in clean, monitored environments until you need them."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-moving-dark">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our moving services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
