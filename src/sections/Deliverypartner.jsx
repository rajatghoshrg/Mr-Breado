import riderImg from "../assets/rider.jpeg";
import appBanner from "../assets/appbanner.jpeg";

import Button from "../components/Button";

import { FaCheck } from "react-icons/fa6";

const benefits = [
  {
    title: "High Earnings, Guaranteed Growth",
    desc: "Become a Mr Breado Delivery Partner and earn ₹50,000+* per month. The more you deliver, the more you earn—simple and rewarding!",
  },

  {
    title: "Flexible Hours, Zero Pressure",
    desc: "With Mr Breado, you are your own boss. We offer a reliable platform with top-tier support and unmatched partner benefits to fuel your success through nearby online food delivery.",
  },

  {
    title: "Deliver With Confidence",
    desc: "Enjoy assured insurance coverage, timely support, and secure payments—so you can focus on earning worry-free. Every delivery counts—and we’re here to support you every step of the way.",
  },

  {
    title: "Daily Fast Payouts",
    desc: "Enjoy the convenience of daily payouts—reliable, fast, and hassle-free. Our efficient payout system ensures timely and accurate payments, helping you manage your finances with confidence.",
  },
];

const DeliveryPartner = () => {
  return (
    <section className="bg-[#FDF5F4] py-24 px-5 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE IMAGE */}

        <div className="flex justify-center lg:justify-start w-full">

          <div
            className="
              relative
              w-full
              max-w-[550px]
              aspect-[4/5]
              overflow-hidden
              rounded-[40px]
              shadow-[0_25px_80px_rgba(239,68,68,0.25)]
              group
              bg-black
            "
          >

            {/* GLOW EFFECT */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-tr
                from-[#EF4444]/10
                to-[#F97316]/10
                z-10
              "
            ></div>

            {/* IMAGE */}

            <img
              src={riderImg}
              alt="Delivery Rider"
              className="
                w-full
                h-full
                object-contain
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

          </div>

        </div>

        {/* RIGHT SIDE CONTENT */}

        <div>

          {/* TOP TAG */}

          <span
            className="
              inline-block
              bg-white
              text-[#EF4444]
              px-6 py-3
              rounded-full
              text-sm
              font-semibold
              shadow-sm
            "
          >
            For Delivery Partners
          </span>

          {/* HEADING */}

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              font-black
              text-gray-900
              leading-tight
            "
          >
            Deliver Fast,
            <br />

            <span className="text-[#EF4444]">
              Earn Even Faster
            </span>

          </h2>

          {/* BENEFITS */}

          <div className="mt-14 space-y-10">

            {benefits.map((item, index) => (

              <div
                key={index}
                className="flex gap-5 items-start"
              >

                {/* ICON */}

                <div
                  className="
                    min-w-[55px]
                    h-[55px]
                    rounded-full
                    bg-[#EF4444]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                    shadow-lg
                  "
                >

                  <FaCheck />

                </div>

                {/* TEXT */}

                <div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-gray-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-gray-600
                      text-lg
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* BUTTON */}

          <div className="mt-14">

            <Button>
              Become a MrBreado Rider
            </Button>

          </div>

        </div>

      </div>

      {/* APP BANNER IMAGE */}

<div className="mt-24">

  <div
    className="
      w-full
      overflow-hidden
      shadow-[0_25px_80px_rgba(239,68,68,0.15)]
    "
  >

    <img
      src={appBanner}
      alt="Mr Breado Banner"
      className="
        w-full
        h-full
        object-cover
      "
    />

  </div>

</div>

    </section>
  );
};

export default DeliveryPartner;