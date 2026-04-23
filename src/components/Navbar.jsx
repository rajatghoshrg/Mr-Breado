import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { MdLanguage } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

// Button Component
import Button from "./Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = ["English", "Hindi"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      
      {/* LOGO */}
      <div className="text-2xl font-extrabold tracking-wide cursor-pointer">
        <span className="text-red-500">Mr</span>
        <span className="text-orange-500">Breado</span>
      </div>

      {/*  RIGHT SIDE */}
      <div className="flex items-center gap-6 relative">

        {/* HERO STATE */}
        {!scrolled && (
          <>
            {/* 🌐 Language */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition"
              >
                <MdLanguage size={20} />
                {language}
                <FaChevronDown size={12} />
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-36 bg-white shadow-lg rounded-lg overflow-hidden border z-50">
                  {languages.map((lang) => (
                    <div
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-red-50 cursor-pointer text-sm"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Get App */}
            <a href="#download">
              <Button className="px-6 py-2">
                Get App
              </Button>
            </a>
          </>
        )}

        {/* SCROLLED STATE */}
        {scrolled && (
          <>
            <Link
              to="/"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Order Online
            </Link>

            <Link
              to="/restaurant"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Add a Restaurant
            </Link>

            <Link
              to="/rider"
              className="text-gray-700 hover:text-red-500 transition"
            >
              Become a Rider
            </Link>

            {/* 🚀 Get App */}
            <a href="#download">
              <Button size="md">
                Get App
              </Button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;