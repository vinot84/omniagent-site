import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is OmniAgent?",
      answer: "OmniAgent is a platform that allows you to deploy specialized AI coworkers into various departments of your business. These agents automate repetitive tasks, handle inquiries, and streamline workflows, freeing up your human employees to focus on more strategic initiatives."
    },
    {
      question: "Is it difficult to set up an AI agent?",
      answer: "Not at all. Our platform is designed to be user-friendly with a no-code interface. You can configure and train your AI agents using your existing documents and data, and integrate them into your current workflows with just a few clicks."
    },
    {
      question: "What kind of departments can OmniAgent support?",
      answer: "OmniAgent is versatile and can be deployed across virtually any department, including Customer Support, IT Operations, Human Resources, Finance & Accounting, Sales & Marketing, and more."
    },
    {
      question: "How does the pricing work?",
      answer: "We offer flexible pricing plans based on the number of AI agents you need and the complexity of the automations. Our plans start with a Starter package for small teams, a Pro package for growing businesses, and a custom Enterprise solution for large-scale deployments."
    },
    {
      question: "Is my data secure with OmniAgent?",
      answer: "Absolutely. We prioritize data security and privacy. Our platform is built with enterprise-grade security features, and we offer on-premise deployment options for organizations with strict data residency requirements."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700">
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

export default FAQSection;