import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Activity, Heart, Home, Stethoscope, UserCheck, Baby, Ambulance } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Human Resource",
      description: "Access to skilled medical professionals including doctors, nurses, and therapists for comprehensive home care.",
      icon: Users,
      features: ["Qualified Doctors", "Certified Nurses", "Physiotherapists", "Medical Attendants"],
    },
    {
      title: "Diagnostics at Home",
      description: "Precise and reliable diagnostic services delivered to your doorstep with advanced medical equipment.",
      icon: Activity,
      features: ["Blood Tests", "ECG", "X-Ray", "Ultrasound"],
    },
    {
      title: "Women Wellness",
      description: "Specialized healthcare services designed for women's health needs at every stage of life.",
      icon: Heart,
      features: ["Prenatal Care", "Postnatal Support", "Gynecological Consultations", "Health Screenings"],
    },
    {
      title: "Door to Door Services",
      description: "Comprehensive medical services brought directly to your home for maximum convenience and comfort.",
      icon: Home,
      features: ["Home Visits", "Medical Consultations", "Treatment Plans", "Follow-up Care"],
    },
  ];

  const additionalServices = [
    {
      title: "Elderly Care",
      description: "Specialized care for senior citizens with chronic conditions and age-related health needs.",
      icon: UserCheck,
    },
    {
      title: "Critical Care",
      description: "Intensive medical supervision and care for patients with serious medical conditions.",
      icon: Stethoscope,
    },
    {
      title: "Pediatric Care",
      description: "Expert medical care for infants, children, and adolescents in the comfort of home.",
      icon: Baby,
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency medical response and urgent care services for critical situations.",
      icon: Ambulance,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Medical Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions delivered to your doorstep with professional excellence
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our primary healthcare services designed to meet your medical needs at home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 medical-shadow-hover smooth-transition">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional healthcare services tailored for specific medical needs and conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 text-center hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary medical-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience Quality Healthcare at Home?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today to schedule a consultation or learn more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-3"
              asChild
            >
              <Link to="/appointments">Book Appointment</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
              asChild
            >
              <Link to="/contact-us">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default Services;