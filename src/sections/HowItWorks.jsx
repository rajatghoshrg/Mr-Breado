import userOrder1 from "../assets/user-order-1.webp";
import userOrder2 from "../assets/user-order-2.webp";
import userOrder3 from "../assets/user-order-3.webp";

const steps = [
  {
    id: "1",
    title: "Explore Restaurants",
    desc:
      "Satisfy your cravings from our extensive list of restaurants nearby.",
    image: userOrder1,
  },

  {
    id: "2",
    title: "Order Fast, Pay Easy",
    desc:
      "Place your order quickly and complete payments seamlessly.",
    image: userOrder2,
  },

  {
    id: "3",
    title: "Track Your Order",
    desc:
      "Monitor your order live from preparation to doorstep delivery.",
    image: userOrder3,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white overflow-hidden pt-24 pb-20 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-4xl sm:text-5xl font-black text-black">

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
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Order Food Online
          </button>

        </div>

        {/* Main */}

        <div className="relative">

          {/* Connected Dotted Line */}

          <div className="hidden lg:block absolute top-0 left-0 w-full z-0">

            <svg
              width="100%"
              height="120"
              viewBox="0 0 1200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="
                  M 80 60
                  C 220 -20, 320 140, 470 60
                  S 760 -20, 910 60
                  S 1080 140, 1180 60
                "
                stroke="#CBD5E1"
                strokeWidth="3"
                strokeDasharray="10 10"
                strokeLinecap="round"
                fill="transparent"
              />

            </svg>

          </div>

          {/* Steps */}

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-14 items-start">

            {steps.map((step) => (

              <div
                key={step.id}
                className="text-center"
              >

                {/* Number */}

                <div
                  className="
                    w-16 h-16
                    rounded-full
                    bg-white
                    shadow-lg
                    flex items-center justify-center
                    mx-auto
                    text-[#EF4444]
                    text-3xl
                    font-black
                    mb-10
                  "
                >

                  {step.id}

                </div>

                {/* Title */}

                <h3 className="text-3xl font-bold text-black mb-5">

                  {step.title}

                </h3>

                {/* Description */}

                <p
                  className="
                    text-gray-500
                    leading-relaxed
                    text-lg
                    max-w-sm
                    mx-auto
                    mb-12
                  "
                >

                  {step.desc}

                </p>

                {/* Phone */}

                <div className="flex justify-center">

                  <div
                    className="
                      relative
                      w-[240px]
                      h-[500px]
                      bg-black
                      rounded-[45px]
                      p-[5px]
                      border-[4px]
                      border-[#EF4444]
                      shadow-2xl
                      overflow-hidden
                      transition-all
                      duration-500
                      hover:scale-105
                      hover:-translate-y-2
                    "
                  >

                    {/* Camera */}

                    <div
                      className="
                        absolute
                        top-3
                        left-1/2
                        -translate-x-1/2
                        w-24
                        h-5
                        bg-black
                        rounded-full
                        z-20
                      "
                    ></div>

                    {/* Screen */}

                    <div
                      className="
                        w-full
                        h-full
                        rounded-[38px]
                        overflow-hidden
                        bg-white
                      "
                    >

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