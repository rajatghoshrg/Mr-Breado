import {
  FaTruckFast,
  FaLeaf,
  FaClock,
  FaShieldHeart,
} from "react-icons/fa6";

const features = [
  {
    id: "01",
    title: "Lightning Fast Delivery",
    desc: "Get your favorite meals delivered hot and fresh within minutes.",
    icon: <FaTruckFast />,
  },
  {
    id: "02",
    title: "Fresh Daily Ingredients",
    desc: "Every dish is prepared using carefully selected fresh ingredients.",
    icon: <FaLeaf />,
  },
  {
    id: "03",
    title: "24/7 Ordering",
    desc: "Order anytime you want — breakfast, lunch, dinner, or midnight cravings.",
    icon: <FaClock />,
  },
  {
    id: "04",
    title: "Trusted Food Quality",
    desc: "We maintain hygiene and premium quality standards for every order.",
    icon: <FaShieldHeart />,
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-white">

      {/* Heading */}
      <div className="max-w-3xl mb-16">
        <p className="text-[#EF4444] font-semibold uppercase tracking-wider mb-3">
          Why People Love Us
        </p>

        <h2 className="text-4xl font-bold leading-tight">
          More Than Just Food Delivery
        </h2>

        <p className="text-gray-600 mt-4">
          Mr. Breado combines speed, freshness, and convenience
          to create a better food experience for everyone.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-8">

        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`
              flex flex-col md:flex-row
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              items-center gap-8
              border rounded-2xl p-8
              hover:shadow-lg transition
            `}
          >

            {/* Left Icon Area */}
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-[#FFF7ED] text-[#F97316] text-5xl shrink-0">
              {feature.icon}
            </div>

            {/* Right Content */}
            <div className="flex-1">

              <span className="text-[#EF4444] text-sm font-bold">
                FEATURE {feature.id}
              </span>

              <h3 className="text-2xl font-bold mt-2 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Features;