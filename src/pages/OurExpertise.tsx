import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Clock, Users, Stethoscope, Shield, Microscope, Heart } from "lucide-react";

const OurExpertise = () => {
  const expertiseAreas = [
    {
      title: "Home Nursing Care",
      description: "Comprehensive nursing services delivered by certified professionals with years of experience in patient care.",
      icon: Heart,
      specialists: "50+ Certified Nurses",
      experience: "10+ Years Average Experience",
    },
    {
      title: "Medical Diagnostics",
      description: "Advanced diagnostic services using state-of-the-art equipment for accurate and timely medical assessments.",
      icon: Microscope,
      specialists: "15+ Lab Technicians",
      experience: "Certified Equipment Operation",
    },
    {
      title: "Critical Care Management",
      description: "Specialized intensive care services for patients requiring continuous medical monitoring and support.",
      icon: Stethoscope,
      specialists: "20+ ICU Specialists",
      experience: "Critical Care Certified",
    },
    {
      title: "Rehabilitation Services",
      description: "Physical therapy and rehabilitation programs designed to help patients recover and regain independence.",
      icon: Users,
      specialists: "25+ Physiotherapists",
      experience: "Rehabilitation Experts",
    },
  ];

  const certifications = [
    {
      title: "Medical Council Certification",
      description: "All our doctors are registered with the Indian Medical Council and maintain active licenses.",
      icon: Award,
    },
    {
      title: "Nursing Council Registration",
      description: "Our nursing staff holds valid certifications from the Indian Nursing Council.",
      icon: GraduationCap,
    },
    {
      title: "ISO Quality Standards",
      description: "We maintain ISO 9001:2015 certification for quality management in healthcare services.",
      icon: Shield,
    },
    {
      title: "Continuous Education",
      description: "Regular training programs ensure our team stays updated with latest medical practices.",
      icon: Clock,
    },
  ];

  const teamStats = [
    { number: "100+", label: "Medical Professionals" },
    { number: "50,000+", label: "Patients Served" },
    { number: "15+", label: "Medical Specialties" },
    { number: "99%", label: "Patient Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Medical Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering exceptional healthcare through specialized knowledge, advanced training, and years of experience
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Specialization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team excels in various medical specialties to provide comprehensive healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">
                          {area.title}
                        </CardTitle>
                        <p className="text-sm text-primary font-medium">{area.specialists}</p>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{area.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest professional standards through continuous certification and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 text-center hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Excellence Through Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team consists of highly qualified medical professionals who bring years of 
                hospital experience to home healthcare. Each member is carefully selected and 
                trained to deliver exceptional care in home settings.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Rigorous selection process for all medical staff",
                  "Continuous professional development programs",
                  "Regular performance evaluations and feedback",
                  "Specialized training in home healthcare delivery",
                  "Patient-centered care approach",
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="medical-shadow-hover smooth-transition">
                Meet Our Team
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Medical Doctors", count: "25+", specialty: "Multi-specialty" },
                { title: "Nursing Staff", count: "50+", specialty: "Critical Care Certified" },
                { title: "Physiotherapists", count: "15+", specialty: "Rehabilitation Experts" },
                { title: "Lab Technicians", count: "10+", specialty: "Diagnostic Specialists" },
              ].map((team, index) => (
                <Card key={index} className="card-gradient medical-shadow border-0 text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">{team.count}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">{team.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{team.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default OurExpertise;