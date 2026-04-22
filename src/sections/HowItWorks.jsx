import {
  FaMobileScreen,
  FaBowlFood,
  FaMotorcycle,
} from "react-icons/fa6";

const steps = [
  {
    id: "01",
    title: "Choose Your Meal",
    desc: "Browse delicious dishes and select your favorite meals easily.",
    icon: <FaMobileScreen />,
  },

  {
    id: "02",
    title: "We Cook Fresh",
    desc: "Our chefs prepare your order using fresh ingredients and care.",
    icon: <FaBowlFood />,
  },

  {
    id: "03",
    title: "Fast Doorstep Delivery",
    desc: "Your food arrives hot and fresh right at your doorstep.",
    icon: <FaMotorcycle />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-[#FFF7ED]">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <p className="text-[#EF4444] font-semibold uppercase tracking-wider mb-3">
          Simple Process
        </p>

        <h2 className="text-4xl font-bold mb-4">
          How Mr. Breado Works
        </h2>

        <p className="text-gray-600">
          Ordering food has never been easier. 
          Just follow these simple steps and enjoy your meal.
        </p>

      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-[#F97316] -translate-x-1/2 rounded-full"></div>

        <div className="space-y-16">

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                flex flex-col md:flex-row items-center gap-8
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `}
            >

              {/* Empty Space */}
              <div className="flex-1"></div>

              {/* Circle Icon */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-[#F97316] text-white flex items-center justify-center text-3xl shadow-lg">
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-md">

                <span className="text-[#EF4444] font-bold text-sm">
                  STEP {step.id}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;