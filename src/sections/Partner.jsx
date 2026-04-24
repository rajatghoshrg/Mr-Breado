import Button from "../components/Button";

const sections = [
  {
    title: "Onboard Fast, Serve Better",
    desc:
      "Our app makes onboarding simple and setup hassle-free, so you focus on what matters — great food and happy customers. Gintaa is also considered the best online food delivery app by many satisfied users.",
    image: "/images/partner/partner_image1.png",
    reverse: false,
  },
  {
    title: "Reach More Diners, Boost SalesKeep More Profit, Pay Less",
    desc:
      "No commission fees, and no hidden costs. Gintaa’s fair pricing model ensures you keep more money from every order placed through the Best Food Delivery app.",
    image: "/images/partner/partner_image2.png",
    reverse: true,
  },
  {
    title: "Reach More Diners, Boost Sales",
    desc:
      "Tap into a large network of food lovers ready to try your dishes. Expand your customer base and watch your order volumes climb steadily using the online food delivery apps platform built for success.",
    image: "/images/partner/partner_image3.png",
    reverse: false,
  },
];

const Partner = () => {
  return (
    <section className="bg-[#f3f4f6] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 reveal">
          Your Restaurant’s Growth Starts Here
        </h2>

        {/* SECTIONS */}
        <div className="space-y-28">

          {sections.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center min-h-[520px]"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >

              {/* TEXT */}
              <div
                className={`
                  flex justify-center
                  ${
                    item.reverse
                      ? "order-2 md:order-2 reveal-right"
                      : "order-2 md:order-1 reveal-left"
                  }
                `}
              >
                <div className="w-full max-w-[420px]">

                  <p className="text-gray-400 text-sm mb-3">
                    Expand Your Reach
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {item.desc}
                  </p>

                  <Button className="px-6 py-3 shadow-md">
                    Register as a Restaurant
                  </Button>

                </div>
              </div>

              {/* IMAGE */}
              <div
                className={`
                  flex justify-center
                  ${
                    item.reverse
                      ? "order-1 md:order-1 reveal-left"
                      : "order-1 md:order-2 reveal-right"
                  }
                `}
              >
                <div className="w-full max-w-[420px]">

                  <img
                    src={item.image}
                    alt="restaurant"
                    className="
                      w-full
                      h-[420px]
                      object-cover
                      rounded-xl
                      shadow-lg
                    "
                  />

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Partner;