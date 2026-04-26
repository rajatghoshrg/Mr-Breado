import { useState } from "react";
import Button from "../components/Button";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What makes Mr. Breado Food Delivery stand out?",
    answer:
      "Mr. Breado offers the best food at the lowest price with no hidden fees, ensuring great deals and seamless delivery experience.",
  },
  {
    question: "What opportunities does Mr. Breado provide for delivery partners?",
    answer:
      "Delivery partners can earn flexibly with high demand orders, incentives, and a platform that supports growth.",
  },
  {
    question: "What does it take to start delivering with Mr. Breado?",
    answer:
      "Simply download the Delivery Partner App, register, and you're set to start earning quickly on Mr. Breado.",
  },
  {
    question: "How can restaurants benefit from joining Mr. Breado?",
    answer:
      "Restaurants get more visibility, increased orders, and access to a large customer base.",
  },
  {
    question: "Is it complicated for restaurants to join Mr. Breado?",
    answer:
      "No, onboarding is simple, fast, and hassle-free.",
  },
  {
    question: "Is there a fee to join Mr. Breado as a restaurant partner?",
    answer:
      "No hidden fees. Transparent pricing ensures better earnings.",
  },
  {
    question: "What kind of support does Mr. Breado offer to restaurant partners?",
    answer:
      "Dedicated support team, analytics dashboard, and growth tools.",
  },
  {
    question:
      "Why choose Mr. Breado for food delivery, delivery work, or restaurant partnership?",
    answer:
      "Because Mr. Breado combines affordability, speed, and reliability into one platform.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("delivery");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const tabContent = {
    customer: {
      title: "The food you love, delivered fast!",
      desc:
        "Only Mr. Breado gives you the best food at the lowest price. No hidden fees, no surprises—just great deals, always.",
    },
    delivery: {
      title: "Deliver More, Earn More.",
      desc:
        "Join Mr. Breado Delivery Partner and turn every ride into a rewarding experience—daily payouts, no hidden cuts!",
    },
    restaurant: {
      title: "Grow Your Restaurant’s Reach",
      desc:
        "Join the food delivery wave with zero stress. Seamless onboarding, easy integration, guaranteed growth.",
    },
  };

  const tabs = ["customer", "delivery", "restaurant"];

  return (
    <>
      {/* FAQ SECTION */}
      <section className="bg-[#f3f4f6] py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-md bg-white overflow-hidden"
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full flex justify-between items-center
                    px-5 py-4 text-left text-sm md:text-base transition
                    ${
                      activeIndex === index
                        ? "text-red-500"
                        : "text-gray-700"
                    }
                  `}
                >
                  {faq.question}

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`
                    px-5 text-sm text-gray-500 overflow-hidden transition-all duration-300
                    ${activeIndex === index ? "max-h-40 py-3" : "max-h-0"}
                  `}
                >
                  {faq.answer}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="bg-gradient-to-r from-[#7dd3fc] to-[#f59e0b] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

          <div className="flex justify-center">
            <img
              src="/images/faq/faq_image.png"
              alt="Mr Breado App"
              className="w-[280px] md:w-[360px]"
            />
          </div>

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Download Our Apps Now
            </h2>

            <p className="text-gray-700 mb-6">
              Available for IOS and Android devices.
            </p>

            <div className="flex gap-6 border-b border-gray-400 w-fit mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    capitalize pb-2 px-3 text-sm md:text-base transition
                    ${
                      activeTab === tab
                        ? "text-red-500 border-b-2 border-red-500 font-semibold"
                        : "text-gray-600 hover:text-red-500"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {tabContent[activeTab].title}
            </h3>

            <p className="text-gray-700 mb-6">
              {tabContent[activeTab].desc}
            </p>

            <Button size="md">
              Download the App
            </Button>

          </div>

        </div>
      </section>
    </>
  );
};

export default FAQ;