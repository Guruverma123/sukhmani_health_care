import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const ContactUs = () => {
  const contactMethods = [
    {
      title: "Emergency Hotline",
      description: "24/7 emergency medical support",
      info: "+91 62844 09624",
      icon: Phone,
      action: "Call Now",
      urgent: true,
    },
    {
      title: "General Inquiries",
      description: "For appointments and general questions",
      info: "+91 62844 09624",
      icon: Phone,
      action: "Call",
      urgent: false,
    },
    {
      title: "WhatsApp Support",
      description: "Quick assistance via WhatsApp",
      info: "+91 62844 09624",
      icon: MessageCircle,
      action: "Message",
      urgent: false,
    },
    {
      title: "Email Support",
      description: "Send us your detailed queries",
      info: "info@sukhmanihealthcareathome.in",
      icon: Mail,
      action: "Email",
      urgent: false,
    },
  ];

  const officeLocations = [
    {
      city: "Jalandhar",
      address: "Mannat Clinic, Basant Vihar Road, Near St. Soldier Nursing Institute, Khambra, Jalandhar  144026, Punjab, India",
      phone: "+91 62844 09624",
      hours: "24/7 Emergency | Office: 9 AM - 6 PM",
    },
    {
      city: "Delhi",
      address: "456 Healthcare Plaza, Connaught Place, New Delhi - 110001",
      phone: "+91 98765 43211",
      hours: "24/7 Emergency | Office: 9 AM - 6 PM",
    },
    {
      city: "Bangalore",
      address: "789 Medical Hub, Koramangala, Bangalore - 560034",
      phone: "+91 98765 43212",
      hours: "24/7 Emergency | Office: 9 AM - 6 PM",
    },
  ];

  const departments = [
    {
      name: "Patient Care",
      phone: "+91 98765 43213",
      email: "care@sukhmanihealthcareathome.in",
      description: "Medical consultations and patient support",
    },
    {
      name: "Billing & Insurance",
      phone: "+91 98765 43214",
      email: "billing@sukhmanihealthcareathome.in",
      description: "Payment queries and insurance claims",
    },
    {
      name: "Equipment Services",
      phone: "+91 98765 43215",
      email: "equipment@sukhmanihealthcareathome.in",
      description: "Medical equipment rental and support",
    },
    {
      name: "HR & Careers",
      phone: "+91 98765 43216",
      email: "careers@sukhmanihealthcareathome.in",
      description: "Job opportunities and career inquiries",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our healthcare team for immediate assistance, appointments, or general inquiries
          </p>
        </div>
      </section>

      {/* Emergency & Quick Contact */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get Immediate Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach our medical team for urgent care and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={index} 
                  className={`card-gradient medical-shadow border-0 text-center hover:scale-105 smooth-transition cursor-pointer ${
                    method.urgent ? 'ring-2 ring-red-500 bg-red-50' : ''
                  }`}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      method.urgent ? 'bg-red-500' : 'bg-primary'
                    }`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-3">{method.info}</p>
                    <button className={`px-4 py-2 rounded-lg text-sm font-medium smooth-transition ${
                      method.urgent 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-primary hover:bg-primary-hover text-primary-foreground'
                    }`}>
                      {method.action}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our offices in major cities across India for personalized healthcare consultations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="card-gradient medical-shadow border-0">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">Address:</p>
                    <p className="text-foreground">{location.address}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">Phone:</p>
                    <p className="text-foreground font-semibold">{location.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">Hours:</p>
                    <p className="text-foreground">{location.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="card-gradient medical-shadow border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    {dept.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">{dept.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Operating Hours
            </h2>
          </div>

          <Card className="card-gradient medical-shadow border-0">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground text-center">
                Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-bold text-red-600 mb-2">Emergency Services</h3>
                  <p className="text-red-800">24 Hours / 7 Days a Week</p>
                  <p className="text-sm text-red-600 mt-2">Always available for urgent medical needs</p>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">Office Hours</h3>
                  <p className="text-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-foreground">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="text-center p-6 bg-neutral-light rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">Appointment Booking</h3>
                <p className="text-muted-foreground">Online booking available 24/7</p>
                <p className="text-muted-foreground">Phone booking during office hours</p>
                <div className="flex justify-center mt-4">
                  <Button 
                    className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 smooth-transition"
                    asChild
                  >
                    <Link to="/appointments">
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default ContactUs;