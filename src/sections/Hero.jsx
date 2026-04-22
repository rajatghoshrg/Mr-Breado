import { useEffect } from "react";
import Button from "../components/Button";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiNoodles } from "react-icons/gi";

const Hero = () => {
  const images = [
    "/images/hero/herofood1.png",
    "/images/hero/herofood2.png",
    "/images/hero/herofood3.avif",
    "/images/hero/herofood4.avif",
    "/images/hero/herofood5.avif",
    "/images/hero/herofood6.avif",
    "/images/hero/herofood7.avif",
    "/images/hero/herofood8.avif",
    "/images/hero/herofood9.avif",
    "/images/hero/herofood10.avif",
    "/images/hero/herofood11.avif",
    "/images/hero/herofood12.avif",
    "/images/hero/herofood13.avif",
    "/images/hero/herofood14.avif",
    "/images/hero/herofood15.avif",
    "/images/hero/herofood16.avif",
    "/images/hero/herofood17.avif",
    "/images/hero/herofood18.avif",
    "/images/hero/herofood19.avif",
    "/images/hero/herofood20.avif"
  ];

  // 🔥 Scroll zoom effect
  useEffect(() => {
    const handleScroll = () => {
      const img = document.getElementById("heroBigImage");
      if (!img) return;

      const scrollY = window.scrollY;
      const scale = 1 + scrollY * 0.0003;

      img.style.transform = `scale(${Math.min(scale, 1.2)})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-24 md:pt-28 pb-12 md:pb-16 bg-[#fff7f5] relative overflow-hidden">

      {/* 🍔 Floating Icons */}
      <FaPizzaSlice className="hidden md:block absolute left-10 top-20 text-red-400 text-4xl opacity-20 animate-pulse" />
      <GiHamburger className="hidden md:block absolute right-10 top-24 text-orange-400 text-5xl opacity-20 animate-pulse" />
      <GiNoodles className="hidden md:block absolute left-1/4 bottom-10 text-yellow-400 text-5xl opacity-20 animate-pulse" />

      {/* 🔥 CONTENT */}
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug md:leading-tight">
          <span className="text-red-500">Mr. Breado</span>{" "}
          <span className="text-gray-800">Serves</span>
          <br />
          <span className="text-blue-600">Fresh Happiness</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg px-2">
          Whether you are craving bold flavors, scaling your restaurant, or ready to earn – 
          we deliver faster, smarter, tastier experiences every single time today.
        </p>

        <div className="mt-6 sm:mt-8">
          <Button size="md" className="w-full sm:w-auto">
            Download the App
          </Button>
        </div>
      </div>

      {/* 🍔 AUTO SLIDING IMAGES */}
      <div className="mt-10 md:mt-16 overflow-hidden">
        <div className="flex gap-4 animate-scroll-left w-max">
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="food"
              className="w-36 h-24 sm:w-48 sm:h-32 md:w-52 md:h-36 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

      {/* 🍽️ BIG PARALLAX IMAGE */}
      <div className="mt-12 md:mt-20 w-full overflow-hidden">
        <img
          id="heroBigImage"
          src="/images/hero/heroimagebig.avif"   // 👉 your big image
          alt="big food"
          className="w-full h-[400px] sm:h-[500px] md:h-[700px] object-cover transition-transform duration-300 ease-out"
        />
      </div>

    </section>
  );
};

export default Hero;