import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"; // optional (use if you have it)

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 🔝 Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer (optional) */}
      {/* <Footer /> */}

    </div>
  );
};

export default MainLayout;