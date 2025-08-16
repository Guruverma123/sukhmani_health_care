import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import medicalEquipmentImage from "@/assets/medical-equipment.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Activity, Heart, Thermometer, Stethoscope, Zap, Monitor, Syringe, Shield } from "lucide-react";

const MedicalEquipment = () => {
  const equipment = [
    {
      category: "Monitoring Equipment",
      items: [
        {
          name: "Patient Monitors",
          description: "Advanced multi-parameter monitors for continuous vital sign monitoring including ECG, blood pressure, oxygen saturation, and temperature.",
          icon: Monitor,
          features: ["Real-time vital signs", "Alarm systems", "Data logging", "Wireless connectivity"],
        },
        {
          name: "ECG Machines",
          description: "12-lead electrocardiogram machines for heart rhythm analysis and cardiac health assessment.",
          icon: Activity,
          features: ["Digital display", "Print capability", "Arrhythmia detection", "Portable design"],
        },
        {
          name: "Pulse Oximeters",
          description: "Non-invasive oxygen saturation and pulse rate monitoring devices for respiratory assessment.",
          icon: Heart,
          features: ["Fingertip sensors", "Digital readout", "Battery operated", "Pediatric compatible"],
        },
      ],
    },
    {
      category: "Therapeutic Equipment",
      items: [
        {
          name: "Ventilators",
          description: "Life-support ventilators for patients requiring respiratory assistance and mechanical breathing support.",
          icon: Zap,
          features: ["Volume/pressure modes", "PEEP capability", "Alarm systems", "Backup power"],
        },
        {
          name: "Infusion Pumps",
          description: "Precision medication delivery systems for controlled administration of IV fluids and medications.",
          icon: Syringe,
          features: ["Programmable rates", "Safety alarms", "Multiple channels", "Battery backup"],
        },
        {
          name: "Oxygen Concentrators",
          description: "Medical-grade oxygen generation equipment for continuous oxygen therapy at home.",
          icon: Shield,
          features: ["Continuous flow", "Portable options", "Low maintenance", "Energy efficient"],
        },
      ],
    },
  ];

  const diagnosticEquipment = [
    {
      name: "Digital Thermometers",
      description: "Accurate temperature measurement devices",
      icon: Thermometer,
    },
    {
      name: "Blood Glucose Meters",
      description: "Point-of-care glucose monitoring systems",
      icon: Activity,
    },
    {
      name: "Digital Stethoscopes",
      description: "Enhanced auscultation with digital recording",
      icon: Stethoscope,
    },
    {
      name: "Blood Pressure Monitors",
      description: "Automated and manual BP measurement devices",
      icon: Heart,
    },
  ];

  const safetyFeatures = [
    "Regular calibration and maintenance",
    "Infection control protocols",
    "Emergency backup systems",
    "24/7 technical support",
    "Trained operator supervision",
    "Quality assurance testing",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Medical Equipment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art medical equipment and technology for comprehensive home healthcare services
          </p>
        </div>
      </section>

      {/* Equipment Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced Medical Technology at Your Home
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We bring hospital-grade medical equipment directly to your home, ensuring that you receive 
                the same quality of care and monitoring that you would expect in a medical facility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All our equipment is regularly maintained, calibrated, and operated by trained medical 
                professionals to ensure safety, accuracy, and reliability in every home visit.
              </p>
              <Button 
                size="lg" 
                className="medical-shadow-hover smooth-transition"
                asChild
              >
                <Link to="/contact-us">Request Equipment Information</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={medicalEquipmentImage}
                alt="Modern medical equipment in hospital setting"
                className="w-full h-[500px] object-cover rounded-lg medical-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      {equipment.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-neutral-light' : 'bg-background'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {category.category}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.items.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="card-gradient medical-shadow border-0 hover:scale-105 smooth-transition">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground text-center">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-center">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Diagnostic Equipment */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diagnostic Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential diagnostic tools for accurate health assessment and monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticEquipment.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="card-gradient medical-shadow border-0 text-center hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Quality */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Safety & Quality Assurance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We maintain the highest standards of equipment safety and quality to ensure 
                reliable and accurate medical care in every home visit.
              </p>
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Equipment Types", count: "50+" },
                { title: "Maintenance Schedule", count: "Monthly" },
                { title: "Calibration Accuracy", count: "99.9%" },
                { title: "Technical Support", count: "24/7" },
              ].map((stat, index) => (
                <Card key={index} className="card-gradient medical-shadow border-0 text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">{stat.count}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">{stat.title}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary medical-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need Specific Medical Equipment?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us to discuss your medical equipment needs and rental options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-3"
              asChild
            >
              <Link to="/contact-us">Contact Equipment Team</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
              asChild
            >
              <Link to="/services">Equipment Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MedicalEquipment;