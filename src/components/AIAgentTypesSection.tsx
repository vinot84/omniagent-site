import React from 'react';
import {
  Headset, Laptop, Users, DollarSign, Briefcase, Heart, ShoppingBag, Plane, Film, Phone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIAgentTypesSection: React.FC = () => {
  const agentTypes = [
    { name: "Customer Support", icon: Headset, description: "Automate inquiries, provide instant help." },
    { name: "IT Operations", icon: Laptop, description: "Streamline tech support, manage infrastructure." },
    { name: "Human Resources", icon: Users, description: "Handle onboarding, policy queries, employee support." },
    { name: "Finance & Accounting", icon: DollarSign, description: "Automate invoicing, expense tracking, reporting." },
    { name: "Sales & Marketing", icon: Briefcase, description: "Qualify leads, personalize outreach, analyze market." },
    { name: "Healthcare", icon: Heart, description: "Assist with patient queries, appointment scheduling." },
    { name: "Retail", icon: ShoppingBag, description: "Manage inventory, personalize shopping experiences." },
    { name: "Travel & Hospitality", icon: Plane, description: "Bookings, itinerary management, guest services." },
    { name: "Entertainment", icon: Film, description: "Content recommendations, event management." },
    { name: "Telecom", icon: Phone, description: "Customer service, network monitoring, billing support." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          AI Agents for Every Department
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agentTypes.map((agent, index) => (
            <Card key={index} className="p-6 text-center shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center justify-center p-0 mb-4">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-full mb-3">
                  <agent.icon size={32} />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">{agent.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-gray-600">{agent.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentTypesSection;