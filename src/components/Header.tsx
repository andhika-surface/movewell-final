import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "figma:asset/1ca7998c0433e4b06c8f71b12b4f131550472630.png";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onBookingClick?: () => void;
}

export default function Header({ currentPage = "home", onNavigate, onBookingClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "Promo", value: "promo" },
    { label: "About", value: "about" },
    { label: "Contact", value: "contact" }
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#1b487f] to-[#0088be] border-b border-white/20 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center">
            <img 
              src={logoImage} 
              alt="Movewell Recovery" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <button 
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`${currentPage === item.value ? "text-white font-semibold" : "text-blue-100"} hover:text-white transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={onBookingClick}
            className="hidden lg:block bg-white text-[#1a497f] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Book Your Session
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button 
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`${currentPage === item.value ? "text-gray-900" : "text-gray-600"} hover:text-gray-900 transition-colors text-left py-2`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  onBookingClick?.();
                  setMobileMenuOpen(false);
                }}
                className="bg-[#1a497f] text-white px-6 py-3 rounded-lg hover:bg-[#0f3359] transition-colors text-center mt-2"
              >
                Book Your Session
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}