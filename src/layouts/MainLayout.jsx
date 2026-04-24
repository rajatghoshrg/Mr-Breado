import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal"; // ✅ IMPORTANT

const MainLayout = ({ children }) => {
  useReveal(); // ✅ global scroll animation

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;