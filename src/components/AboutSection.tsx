import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctorConsultation from "@/assets/doctor-consultation.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={doctorConsultation}
              alt="Doctor consultation with elderly patient"
              className="w-full h-[500px] object-cover rounded-lg medical-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="mb-6">
              <p className="text-primary font-semibold text-lg tracking-wide uppercase mb-2">
                What About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Quality Medical Services At Your Comfort Place
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team of experienced healthcare professionals is committed to providing you and 
                your loved ones with the best care in the comfort of your own home. We understand 
                that recovery and healing happen best in familiar surroundings.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Highly trained and certified medical professionals
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  State-of-the-art medical equipment and technology
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  24/7 support and emergency response services
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Personalized care plans tailored to individual needs
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="medical-shadow-hover smooth-transition px-8 py-3"
              asChild
            >
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;