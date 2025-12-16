import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import TestimonialsPage from "./components/TestimonialsPage";
import FAQPage from "./components/FAQPage";
import PromoPage from "./components/PromoPage";
import BookingModal from "./components/BookingModal";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is on admin route
    const path = window.location.pathname;
    if (path === "/adminbackend") {
      setCurrentPage("admin");
      // Check if already authenticated
      const authToken = localStorage.getItem("adminAuth");
      if (authToken === "true") {
        setIsAdminAuthenticated(true);
      }
    }
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Update URL without reloading
    window.history.pushState({}, "", page === "home" ? "/" : `/${page}`);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsAdminAuthenticated(false);
    setCurrentPage("home");
    window.history.pushState({}, "", "/");
  };

  const renderPage = () => {
    // Admin route handling
    if (currentPage === "admin") {
      if (!isAdminAuthenticated) {
        return <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />;
      }
      return <AdminDashboard onLogout={handleAdminLogout} />;
    }

    // Regular pages
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onBookingClick={handleBookingClick} />
            <Services />
            <TestimonialsPage onBookingClick={handleBookingClick} />
            <FAQPage onBookingClick={handleBookingClick} />
          </>
        );
      case "services":
        return <ServicesPage onBookingClick={handleBookingClick} />;
      case "promo":
        return <PromoPage onBookingClick={handleBookingClick} />;
      case "about":
        // Show both About and Team on the same page
        return (
          <>
            <AboutPage onBookingClick={handleBookingClick} />
            <TeamPage onBookingClick={handleBookingClick} />
          </>
        );
      case "contact":
        return <ContactPage />;
      default:
        return (
          <>
            <Hero onBookingClick={handleBookingClick} />
            <Services />
            <TestimonialsPage onBookingClick={handleBookingClick} />
            <FAQPage onBookingClick={handleBookingClick} />
          </>
        );
    }
  };

  // Don't show header/footer on admin page
  if (currentPage === "admin") {
    return (
      <div className="min-h-screen bg-white">
        {renderPage()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        onBookingClick={handleBookingClick}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}