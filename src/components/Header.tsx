import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/", current: location.pathname === "/" },
    { name: "ABOUT US", href: "/about-us", current: location.pathname === "/about-us" },
    { name: "SERVICES", href: "/services", current: location.pathname === "/services", hasDropdown: true },
    { name: "OUR EXPERTISE", href: "/our-expertise", current: location.pathname === "/our-expertise", hasDropdown: true },
    { name: "MEDICAL EQUIPMENT", href: "/medical-equipment", current: location.pathname === "/medical-equipment" },
    { name: "OUR PACKAGES", href: "/our-packages", current: location.pathname === "/our-packages" },
    { name: "CONTACT US", href: "/contact-us", current: location.pathname === "/contact-us" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center mr-3">
                <img 
                  src="/logo/favicon.png" 
                  alt="Sukhmani Healthcare Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '';
                    target.parentElement!.innerHTML = '<span class="text-primary-foreground font-bold text-xl">S</span>';
                  }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="flex justify-center text-xl font-bold text-foreground">Sukhmani</span>
                <span className="flex justify-center text-sm text-muted-foreground">Healthcare At Home</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`whitespace-nowrap text-xs font-medium smooth-transition ${
                  item.current
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="inline ml-1 h-3 w-3" />
                )}
              </Link>
            ))}
          </nav>

          {/* Appointment Button */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="default" 
              className="medical-shadow"
              asChild
            >
              <Link to="/appointments">APPOINTMENTS +</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted smooth-transition"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-xs font-medium rounded-md smooth-transition ${
                    item.current
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  variant="default" 
                  className="w-full"
                  asChild
                >
                  <Link to="/appointments">APPOINTMENTS +</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;