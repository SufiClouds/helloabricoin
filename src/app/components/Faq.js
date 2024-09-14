"use client";
import { useState } from "react";

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      title: "What is Abri and the Abri Token Sale?",
      description:
        "Abri is an innovative cryptocurrency project at the forefront of artificial intelligence and blockchain integration. The Abri Token Sale is our fundraising event, allowing early contributors to acquire Abri tokens (AI) and be part of the project's exciting journey.",
    },
    {
      id: 2,
      title: "How do I participate in the Abri Token Sale?",
      description:
        "Participating in the Abri Token Sale is easy! Visit our official website during the specified ICO phase, connect your compatible wallet (like MetaMask), and follow the intuitive steps to contribute using BNB (Binance Coin) or other accepted cryptocurrencies.",
    },
    {
      id: 3,
      title: "What is an ICO?",
      description:
        "ICO stands for Initial Coin Offering. It's a fundraising method for cryptocurrency projects, allowing early supporters to purchase tokens at a set price before they are listed on exchanges. ICOs provide a way for projects to secure funding and for investors to get involved early in promising ventures.",
    },
    {
      id: 4,
      title: "Can I use any wallet to participate in the Abri Token Sale?",
      description:
        "We recommend using compatible wallets such as MetaMask or Trust Wallet for a seamless experience. Ensure your wallet supports BEP-20 tokens if you're contributing with BNB.",
    },
    {
      id: 5,
      title: "Is there a minimum or maximum contribution limit?",
      description:
        "Yes, there are limits in place to ensure a fair distribution. Refer to our official ICO documentation for specific details on the minimum and maximum contribution limits for each phase.",
    },
    {
      id: 6,
      title: "How can I stay updated on Abri's developments and announcements?",
      description:
        "Follow us on our official social media channels, join our community forums, and subscribe to our newsletter for real-time updates, announcements, and engaging discussions.",
    },
    {
      id: 7,
      title: "What makes Abri unique in the cryptocurrency space?",
      description:
        "Abri's uniqueness lies in its fusion of advanced AI technology and blockchain, creating a smarter and more intuitive cryptocurrency experience. Explore our whitepaper for an in-depth look at the innovative features that set Abri apart.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-[#08071B] text-white py-16 px-6">
      <h2 className="text-[#01EDFF] text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <div key={item.id} className="border border-gray-600 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
            >
              <h4 className="text-xl text-[#01EDFF] font-semibold">{item.title}</h4>
              <span className="ml-auto transition-transform duration-300">
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 border-t border-gray-600">
                <p className="text-base text-gray-300">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
