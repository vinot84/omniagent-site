import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "OmniAgent transformed our customer support. Response times are down by 60%, and customer satisfaction has never been higher!",
      name: "Jane Doe",
      title: "Head of Customer Success, TechCorp",
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane"
    },
    {
      quote: "Implementing OmniAgent's HR agent saved us countless hours on routine inquiries. Our HR team can now focus on strategic initiatives.",
      name: "John Smith",
      title: "HR Director, Global Solutions",
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=John"
    },
    {
      quote: "The finance agent is a game-changer. Automated invoice processing has eliminated errors and sped up our financial cycles significantly.",
      name: "Emily White",
      title: "CFO, Innovate Inc.",
      avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=Emily"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-lg rounded-xl bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-0 flex-grow">
                <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              </CardContent>
              <div className="flex items-center mt-auto">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;