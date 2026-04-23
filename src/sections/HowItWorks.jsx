import userOrder1 from "../assets/user-order-1.webp";
import userOrder2 from "../assets/user-order-2.webp";
import userOrder3 from "../assets/user-order-3.webp";

const steps = [
  {
    id: "1",
    title: "Explore Restaurants",
    desc:
      "Satisfy your cravings from our extensive list of restaurants — whether close by or miles away. Gintaa is your go-to for the best online food delivery app experience.",
    image: userOrder1,
  },

  {
    id: "2",
    title: "Order Fast, Pay Easy",
    desc:
      "With just a few taps, place your order and complete payment seamlessly — all through the best food delivery app.",
    image: userOrder2,
  },

  {
    id: "3",
    title: "Track Your Order",
    desc:
      "Monitor your order in real time — from preparation to doorstep delivery, stay informed at every stage with the best food ordering app.",
    image: userOrder3,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#FFF8F5] overflow-hidden py-24 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT */}

        <div className="text-center mb-28">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight">

            One Click,

            <span className="text-[#EF4444]">
              {" "}Endless Flavors!
            </span>

          </h2>

          <button
            className="
              mt-10
              bg-[#EF4444]
              hover:bg-[#DC2626]
              text-white
              px-8 py-4
              rounded-xl
              text-lg
              font-semibold
              transition-all duration-300
              hover:scale-105
              shadow-lg
            "
          >
            Order Food Online
          </button>

        </div>

        {/* MAIN SECTION */}

        <div className="relative">

          {/* WAVY LINE */}

<div className="hidden lg:block absolute -top-8 left-0 w-full z-0">

  <svg
    width="100%"
    height="90"
    viewBox="0 0 1200 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    <path
      d="
        M 60 45
        C 180 -10, 300 100, 430 45
        S 700 -10, 830 45
        S 1060 100, 1160 45
      "
      stroke="#D1D5DB"
      strokeWidth="3"
      strokeDasharray="10 10"
      strokeLinecap="round"
      fill="transparent"
    />

  </svg>

</div>

          {/* STEPS */}

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">

            {steps.map((step) => (

              <div
                key={step.id}
                className="group text-center flex
    flex-col
    h-full"
              >

                {/* NUMBER */}

                <div
                  className="
                    relative z-20
                    w-16 h-16
                    mx-auto
                    rounded-full
                    bg-white
                    shadow-xl
                    border border-red-100
                    flex items-center justify-center
                    text-[#EF4444]
                    text-3xl
                    font-black
                    mb-12
                  "
                >

                  {step.id}

                </div>

                {/* TEXT */}

                <div className="mb-10 flex-grow">

                  <h3 className="text-3xl font-bold text-black mb-5">

                    {step.title}

                  </h3>

                  <p
                    className="
                      text-gray-500
                      leading-relaxed
                      max-w-sm
                      mx-auto
                      text-lg
                    "
                  >

                    {step.desc}

                  </p>

                </div>

                {/* PHONE */}

                <div className="flex justify-center">

                  <div
                    className="
                     relative
                     w-[290px]
                     h-[580px]
                     bg-black
                     rounded-[55px]
                     p-[6px]
                     border-[5px]
                     border-[#EF4444]
                     shadow-2xl
                     transition-all duration-500
                     hover:scale-105
                     hover:-translate-y-3
                     hover:shadow-[0_25px_60px_rgba(239,68,68,0.35)]
                     "
                  >

                    {/* DYNAMIC ISLAND */}

                    <div
                      className="
                        absolute
                        top-3
                        left-1/2
                        -translate-x-1/2
                        w-28
                        h-6
                        bg-black
                        rounded-full
                        z-20
                      "
                    ></div>

                    {/* SCREEN */}

                    <div
                      className="
                        w-full
                        h-full
                        rounded-[42px]
                        overflow-hidden
                        bg-white
                      "
                    >

                      {/* IMAGE */}

                      <img
                        src={step.image}
                        alt={step.title}
                        className="
                        w-full
                        h-full
                       object-cover
                       transition-transform
                       duration-700
                       hover:scale-110
                       "
                      />

                    </div>

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