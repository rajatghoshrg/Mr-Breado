import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Food Blogger",
    review:
      "The delivery was unbelievably fast and the burger tasted amazing. Definitely ordering again!",
  },

  {
    id: 2,
    name: "Priya Das",
    role: "Regular Customer",
    review:
      "Fresh ingredients, hot meals, and smooth ordering experience. Mr. Breado never disappoints.",
  },

  {
    id: 3,
    name: "Amit Roy",
    role: "College Student",
    review:
      "Affordable prices and delicious food. Perfect for late-night cravings.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-white">

      {/* Heading */}
      <div className="max-w-3xl mb-16">

        <p className="text-[#EF4444] font-semibold uppercase tracking-wider mb-3">
          Customer Stories
        </p>

        <h2 className="text-4xl font-bold mb-4">
          People Love Our Food Experience
        </h2>

        <p className="text-gray-600">
          Real feedback from customers who enjoy ordering from Mr. Breado every day.
        </p>

      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Featured Large Card */}
        <div className="lg:col-span-2 bg-[#F97316] text-white rounded-3xl p-10 flex flex-col justify-between shadow-lg">

          <div>

            <div className="flex gap-1 text-white mb-6">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-2xl leading-relaxed font-medium">
              “{testimonials[0].review}”
            </p>

          </div>

          <div className="mt-10 flex items-center gap-4">

            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-white text-[#F97316] font-bold flex items-center justify-center">
              RS
            </div>

            <div>
              <h4 className="font-bold">
                {testimonials[0].name}
              </h4>

              <p className="text-sm text-white/80">
                {testimonials[0].role}
              </p>
            </div>

          </div>

        </div>

        {/* Side Reviews */}
        <div className="flex flex-col gap-6">

          {testimonials.slice(1).map((user) => (
            <div
              key={user.id}
              className="border rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >

              {/* Rating */}
              <div className="flex gap-1 text-[#F97316] mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-6">
                “{user.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-[#FFF7ED] text-[#EF4444] font-bold flex items-center justify-center">
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>

                  <h4 className="font-semibold">
                    {user.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {user.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;