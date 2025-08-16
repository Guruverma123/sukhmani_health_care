import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Phone, User } from "lucide-react";

const Appointments = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book Your <span className="text-primary">Appointment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our experienced healthcare professionals. We're here to provide you with the best medical care at your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <Card className="medical-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Schedule Appointment</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-nursing">Home Nursing</SelectItem>
                        <SelectItem value="diagnostics">Diagnostics</SelectItem>
                        <SelectItem value="women-wellness">Women Wellness</SelectItem>
                        <SelectItem value="elder-care">Elder Care</SelectItem>
                        <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                        <SelectItem value="general-consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">09:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="14:00">02:00 PM</SelectItem>
                          <SelectItem value="15:00">03:00 PM</SelectItem>
                          <SelectItem value="16:00">04:00 PM</SelectItem>
                          <SelectItem value="17:00">05:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address</Label>
                    <Textarea id="address" placeholder="Enter your complete address for home visit" rows={3} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea id="message" placeholder="Any specific requirements or medical history details" rows={4} />
                  </div>

                  <Button className="w-full medical-shadow" size="lg">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="medical-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                  <CardDescription>Get in touch with us directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 XXXX XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">123 Medical Center Lane<br />Healthcare District, City - 400001</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Working Hours</p>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: Emergency Only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="medical-shadow border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-xl text-destructive flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency Contact
                  </CardTitle>
                  <CardDescription>24/7 Emergency medical assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-destructive mb-2">+91 XXXX XXXXXX</p>
                    <p className="text-muted-foreground">Available round the clock for medical emergencies</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="medical-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Service Areas</CardTitle>
                  <CardDescription>We provide services in the following areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>• Central Mumbai</div>
                    <div>• Andheri</div>
                    <div>• Bandra</div>
                    <div>• Powai</div>
                    <div>• Thane</div>
                    <div>• Navi Mumbai</div>
                    <div>• Borivali</div>
                    <div>• Malad</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default Appointments;