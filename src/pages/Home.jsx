<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import { FaBurger } from "react-icons/fa6";

import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-[#F97316]">
          <FaBurger />
          <h1>Mr. Breado</h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <Link
            to="/login"
            className="text-[#EF4444] font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-[#EA580C] transition"
          >
            Sign Up
          </Link>

        </div>

      </nav>

      {/* Sections */}
      <Features />
      <HowItWorks />
      <Testimonials />

    </div>
  );
};

export default Home;
>>>>>>> fb7e2a851ba709b09279f27ef9348f6342f20a28
