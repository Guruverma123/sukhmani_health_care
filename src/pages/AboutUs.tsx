import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import doctorConsultation from "@/assets/doctor-consultation.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Clock, Heart, Shield, Star } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "5000+", label: "Happy Patients", icon: Users },
    { number: "50+", label: "Expert Doctors", icon: Award },
    { number: "24/7", label: "Available Support", icon: Clock },
    { number: "10+", label: "Years Experience", icon: Star },
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every patient with empathy, understanding their unique needs and providing personalized care.",
      icon: Heart,
    },
    {
      title: "Professional Excellence",
      description: "Our team maintains the highest standards of medical practice and continuous professional development.",
      icon: Award,
    },
    {
      title: "Trust & Safety",
      description: "We prioritize patient safety and maintain strict protocols to ensure the highest quality of care.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Sukhmani Healthcare At Home
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the way in home healthcare with compassionate care and professional excellence
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Sukhmani Healthcare At Home, we are committed to revolutionizing healthcare delivery 
                by bringing quality medical services directly to your doorstep. Our mission is to 
                make healthcare accessible, convenient, and affordable for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We envision a future where patients can receive the same level of professional 
                medical care at home as they would in a hospital setting, with the added comfort 
                of familiar surroundings and personalized attention.
              </p>
              <Button size="lg" className="medical-shadow-hover smooth-transition">
                Learn More About Our Services
              </Button>
            </div>
            <div className="relative">
              <img
                src={doctorConsultation}
                alt="Doctor providing home consultation"
                className="w-full h-[500px] object-cover rounded-lg medical-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Sukhmani Healthcare At Home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Sukhmani Healthcare At Home?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine medical expertise with compassionate care to deliver exceptional healthcare experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Certified and experienced medical professionals",
              "State-of-the-art medical equipment and technology",
              "24/7 emergency support and consultation",
              "Personalized care plans for every patient",
              "Affordable and transparent pricing",
              "Comprehensive medical services under one roof",
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <p className="text-muted-foreground text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default AboutUs;