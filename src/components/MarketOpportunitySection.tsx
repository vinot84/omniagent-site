import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketOpportunitySection: React.FC = () => {
  const stats = [
    { value: "70%", label: "Reduction in repetitive tasks" },
    { value: "45%", label: "Increase in employee productivity" },
    { value: "$15T", label: "Projected global AI market by 2030" },
    { value: "90%", label: "Enterprises planning AI adoption by 2025" },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The Future of Work is Here
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
          The market for AI-powered automation is exploding. OmniAgent positions your enterprise at the forefront of this revolution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-blue-700 text-white p-6 rounded-xl shadow-lg border-none">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-5xl font-extrabold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg opacity-90">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;