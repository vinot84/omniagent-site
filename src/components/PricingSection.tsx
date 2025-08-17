import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingSectionProps {
  onGetStartedClick: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onGetStartedClick }) => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      per: "per agent/month",
      features: [
        "1 AI Agent",
        "Basic Automation",
        "Email Support",
        "Standard Integrations",
      ],
      buttonText: "Get Started",
      action: onGetStartedClick,
    },
    {
      name: "Pro",
      price: "$149",
      per: "per agent/month",
      features: [
        "Up to 5 AI Agents",
        "Advanced Automation",
        "Priority Support",
        "Custom Integrations",
        "Performance Analytics",
      ],
      buttonText: "Choose Pro",
      highlight: true,
      action: onGetStartedClick,
    },
    {
      name: "Enterprise",
      price: "Custom",
      per: "contact us",
      features: [
        "Unlimited AI Agents",
        "Full Departmental Automation",
        "Dedicated Account Manager",
        "On-Premise Deployment",
        "Custom AI Model Training",
      ],
      buttonText: "Contact Sales",
      action: () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`p-6 rounded-xl shadow-lg flex flex-col ${plan.highlight ? 'border-2 border-gray-900 scale-105' : 'border border-gray-200'} transition-all duration-300 hover:shadow-xl`}>
              <CardHeader className="p-0 mb-6 text-center">
                <CardTitle className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-gray-900' : 'text-gray-900'}`}>{plan.name}</CardTitle>
                <p className={`text-5xl font-extrabold mb-2 ${plan.highlight ? 'text-gray-900' : 'text-gray-900'}`}>{plan.price}</p>
                <p className="text-gray-700">{plan.per}</p>
              </CardHeader>
              <CardContent className="p-0 flex-grow mb-8">
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="text-gray-700 mr-2 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0 mt-auto">
                <Button 
                  onClick={plan.action}
                  className={`w-full py-3 text-lg rounded-full ${plan.highlight ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'}`}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;