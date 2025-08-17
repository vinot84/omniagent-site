import React from 'react';
import { Lightbulb, Settings, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Define Your Needs",
      description: "Identify repetitive tasks and specific departmental requirements that AI agents can address.",
    },
    {
      icon: Settings,
      title: "Configure & Train",
      description: "Easily configure your OmniAgent AI coworkers with your existing data and workflows. No coding required.",
    },
    {
      icon: Rocket,
      title: "Deploy & Scale",
      description: "Integrate seamlessly into your operations and watch your teams achieve new levels of productivity.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center justify-center p-0 mb-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                  <step.icon size={36} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;