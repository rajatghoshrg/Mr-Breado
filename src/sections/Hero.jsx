import Button from "../components/Button";

// Food Icons
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiNoodles } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-[#fff7f5] relative overflow-hidden">
      
      {/* 🍔 Floating Food Icons */}
      <FaPizzaSlice className="absolute left-10 top-20 text-red-400 text-4xl opacity-20 animate-pulse" />
      <GiHamburger className="absolute right-10 top-24 text-orange-400 text-5xl opacity-20 animate-pulse" />
      <GiNoodles className="absolute left-1/4 bottom-10 text-yellow-400 text-5xl opacity-20 animate-pulse" />

      {/* 🔥 CONTENT */}
      <div className="max-w-4xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-red-500">Mr. Breado</span>{" "}
          <span className="text-gray-800">Serves</span>
          <br />
          <span className="text-blue-600">Fresh Happiness</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 text-lg">
          Whether you are craving bold flavors, scaling your restaurant, or ready to earn – 
          we deliver faster, smarter, tastier experiences every single time today.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Button size="lg">
            Download the App
          </Button>
        </div>
      </div>

      {/* 🍔 FOOD STRIP (NO SCROLLBAR) */}
      <div className="mt-16 px-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max">
          
          {[
            "https://images.unsplash.com/photo-1604908176997-431ba4c5c0f3",
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
            "https://images.unsplash.com/photo-1605478039225-5b8a0e6a61c5",
            "https://images.unsplash.com/photo-1604908177522-040b5f6c3b75"
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="food"
              className="w-52 h-36 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Hero;