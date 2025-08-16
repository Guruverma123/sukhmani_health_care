import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+91XXXXXXXXXX"; // Replace with actual number
  const message = "Hello! I'm interested in Sukhmani Healthcare At Home medical services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full medical-shadow-hover smooth-transition group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 smooth-transition pointer-events-none">
        WhatsApp Us
      </span>
    </button>
  );
};

export default WhatsAppButton;