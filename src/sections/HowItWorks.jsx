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
    title: "Fresh Cooking",
    desc: "Our chefs prepare every order fresh using premium ingredients.",
    icon: <FaBowlFood />,
  },

  {
    id: "03",
    title: "Fast Delivery",
    desc: "Hot and fresh meals delivered quickly to your doorstep.",
    icon: <FaMotorcycle />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-[#FFE7D6] to-[#FFF1F2]">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EF4444]/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-24">

          <span className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-md text-[#EF4444] text-sm font-semibold border border-white shadow-sm mb-6">
            Simple Ordering Experience
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            How <span className="text-[#F97316]">Mr. Breado</span> Works
          </h2>

          <p className="text-gray-700 text-lg mt-6 leading-relaxed">
            Enjoy a seamless food delivery experience with
            fast ordering, fresh cooking and instant delivery.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#F97316] to-[#EF4444] -translate-x-1/2 rounded-full opacity-30"></div>

          <div className="space-y-24">

            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`
                  flex flex-col lg:flex-row items-center gap-12
                  ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
                `}
              >

                {/* Empty Space */}
                <div className="flex-1"></div>

                {/* Floating Icon */}
                <div className="relative z-20">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#F97316] blur-2xl opacity-40 rounded-full"></div>

                  {/* Icon Circle */}
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white flex items-center justify-center text-4xl shadow-2xl border-[6px] border-white">
                    {step.icon}
                  </div>

                </div>

                {/* Card */}
                <div className="flex-1">

                  <div className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/50 rounded-[36px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                    {/* Card Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F97316]/10 blur-3xl rounded-full"></div>

                    {/* Step Number */}
                    <span className="relative z-10 text-[#EF4444] font-bold tracking-[0.3em] text-sm">
                      STEP {step.id}
                    </span>

                    {/* Title */}
                    <h3 className="relative z-10 text-3xl font-bold text-gray-900 mt-5 mb-5">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-gray-700 text-lg leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Hover Line */}
                    <div className="relative z-10 mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F97316] to-[#EF4444] rounded-full transition-all duration-500"></div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;