import { Users, Activity, Heart, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Human Resource",
      description: "We provide access to a network of skilled medical professionals, including Doctors, Nurses, Therapists",
      icon: Users,
      href: "#human-resource"
    },
    {
      title: "Diagnostics",
      description: "We are dedicated to providing precise and reliable diagnostic services at home for your better health.",
      icon: Activity,
      href: "#diagnostics"
    },
    {
      title: "Women Wellness",
      description: "We are dedicated to empowering women to prioritize their health and well-being at every stage of life.",
      icon: Heart,
      href: "#women-wellness"
    },
    {
      title: "Door to Door",
      description: "We believe that access to quality healthcare should be as easy as opening your front door.",
      icon: Home,
      href: "#door-to-door"
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Our Home Base Services
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient medical-shadow medical-shadow-hover smooth-transition hover:scale-105 border-0 group cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 smooth-transition">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;