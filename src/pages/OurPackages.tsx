import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, Star, Heart, Home, Users, Clock } from "lucide-react";

const OurPackages = () => {
  const packages = [
    {
      name: "Basic Care",
      price: "₹2,999",
      period: "per month",
      description: "Essential home healthcare services for basic medical needs",
      icon: Heart,
      popular: false,
      features: [
        "Monthly doctor visit",
        "Basic health monitoring",
        "Medication management",
        "Health consultation calls",
        "Emergency support (business hours)",
        "Basic diagnostic tests",
      ],
      color: "border-muted",
    },
    {
      name: "Comprehensive Care",
      price: "₹5,999",
      period: "per month",
      description: "Complete healthcare package for ongoing medical support",
      icon: Home,
      popular: true,
      features: [
        "Bi-weekly doctor visits",
        "24/7 nursing support",
        "Advanced health monitoring",
        "Physiotherapy sessions",
        "Complete diagnostic panel",
        "Medication delivery",
        "Family health education",
        "Emergency response 24/7",
      ],
      color: "border-primary bg-primary/5",
    },
    {
      name: "Premium Care",
      price: "₹9,999",
      period: "per month",
      description: "Luxury healthcare experience with dedicated medical team",
      icon: Users,
      popular: false,
      features: [
        "Dedicated care team",
        "Weekly doctor visits",
        "24/7 on-call physician",
        "Specialized consultations",
        "Complete lab services",
        "Advanced equipment access",
        "Nutritionist consultation",
        "Mental health support",
        "Priority emergency response",
      ],
      color: "border-muted",
    },
  ];

  const customPackages = [
    {
      title: "Elderly Care Package",
      description: "Specialized care designed for senior citizens with chronic conditions",
      features: ["Geriatric specialist", "Daily monitoring", "Medication reminders", "Fall prevention"],
      icon: Users,
    },
    {
      title: "Post-Surgery Care",
      description: "Comprehensive recovery support after surgical procedures",
      features: ["Wound care", "Pain management", "Recovery monitoring", "Rehabilitation"],
      icon: Heart,
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care for diabetes, hypertension, and other chronic conditions",
      features: ["Regular monitoring", "Lifestyle coaching", "Medication adjustment", "Specialist access"],
      icon: Clock,
    },
  ];

  const addOnServices = [
    { service: "Additional doctor visit", price: "₹500" },
    { service: "Emergency home visit", price: "₹1,200" },
    { service: "Specialist consultation", price: "₹800" },
    { service: "Advanced diagnostic test", price: "₹300-₹1,500" },
    { service: "Physiotherapy session", price: "₹400" },
    { service: "Nursing care (per hour)", price: "₹200" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Healthcare Packages
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect healthcare package tailored to your medical needs and budget
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Care Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible healthcare packages designed to meet different levels of medical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative medical-shadow hover:scale-105 smooth-transition ${pkg.color} ${
                    pkg.popular ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">{pkg.period}</span>
                    </div>
                    <CardDescription className="text-muted-foreground mt-2">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full mt-6 ${
                        pkg.popular 
                          ? 'bg-primary hover:bg-primary-hover text-primary-foreground' 
                          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                      } smooth-transition`}
                      size="lg"
                      asChild
                    >
                      <Link to="/appointments">{pkg.popular ? 'Get Started' : 'Choose Plan'}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Care Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored healthcare solutions for specific medical conditions and life stages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 hover:scale-105 smooth-transition">
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact-us">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Add-on Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your care package with additional services as needed
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient medical-shadow border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground text-center">
                  Additional Services & Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addOnServices.map((addon, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-neutral-light rounded-lg">
                      <span className="text-foreground font-medium">{addon.service}</span>
                      <span className="text-primary font-bold">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary medical-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact our team to discuss the best healthcare package for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-3"
              asChild
            >
              <Link to="/appointments">Schedule Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
              asChild
            >
              <Link to="/contact-us">Call Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default OurPackages;