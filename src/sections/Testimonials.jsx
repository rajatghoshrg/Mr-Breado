import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Food Blogger",
    review:
      "Fast delivery and amazing taste. The burgers were hot and fresh.",
  },

  {
    id: 2,
    name: "Priya Das",
    role: "Regular Customer",
    review:
      "Smooth ordering experience and delicious meals every time.",
  },

  {
    id: 3,
    name: "Amit Roy",
    role: "College Student",
    review:
      "Affordable food with premium quality and quick delivery.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-[#FFF1F2] to-[#FFE7D6]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#EF4444]/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-white/70 backdrop-blur-md text-[#EF4444] text-sm font-semibold shadow-sm mb-5">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Real experiences from people who love ordering from Mr. Breado.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((user) => (
            <div
              key={user.id}
              className="
                group relative overflow-hidden
                bg-white
                border border-orange-100
                rounded-[28px]
                p-7
                shadow-lg
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[#F97316]
              "
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-[#EF4444]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Stars */}
              <div className="relative z-10 flex gap-1 text-[#F97316] mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="relative z-10 text-gray-700 leading-relaxed mb-8">
                “{user.review}”
              </p>

              {/* User */}
              <div className="relative z-10 flex items-center gap-4">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#EF4444] text-white flex items-center justify-center font-bold shadow-md">
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                {/* Info */}
                <div>

                  <h4 className="font-bold text-gray-900">
                    {user.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {user.role}
                  </p>

                </div>

              </div>

              {/* Bottom Line */}
              <div className="relative z-10 mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F97316] to-[#EF4444] rounded-full transition-all duration-500"></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;