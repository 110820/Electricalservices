import { useState, useRef } from "react";
import { Star, Percent, Check } from "lucide-react";
import { useParams } from "react-router-dom";

import switchIcon from "@/assets/images/switch.jpg";
import fanIcon from "@/assets/images/Fan.jpg";
import lightIcon from "@/assets/images/light.jpg";
import wiringIcon from "@/assets/images/wiring.jpg";
import doorbellIcon from "@/assets/images/doorbell.jpg";
import mcbIcon from "@/assets/images/mcb.jpg";
import inverterIcon from "@/assets/images/inverter.jpg";
import applianceIcon from "@/assets/images/appliance.jpg";
import consultIcon from "@/assets/images/conultant.jpg";
import cartImage from "@/assets/images/cart.jpg";

const categories = [
  { name: "Switch & socket", icon: switchIcon },
  { name: "Fan", icon: fanIcon },
  { name: "Wall/ceiling light", icon: lightIcon },
  { name: "Wiring", icon: wiringIcon },
  { name: "Doorbell", icon: doorbellIcon },
  { name: "MCB & submeter", icon: mcbIcon },
  { name: "Inverter & stabiliser", icon: inverterIcon },
  { name: "Appliance", icon: applianceIcon },
  { name: "Book a consultation", icon: consultIcon },
];

const servicesData = [
  {
    id: 1,
    title: "Switchbox installation",
    category: "Switch & socket",
    rating: 4.84,
    reviews: "20K reviews",
    price: 239,
    time: "30 mins",
    description: "Installed in specified area for new power outlet",
  },
  {
    id: 2,
    title: "Fan installation",
    category: "Fan",
    rating: 4.76,
    reviews: "18K reviews",
    price: 299,
    time: "45 mins",
    description: "Ceiling fan installation with proper wiring",
  },
  {
    id: 3,
    title: "Fan repair",
    category: "Fan",
    rating: 4.71,
    reviews: "11K reviews",
    price: 199,
    time: "30 mins",
    description: "Motor, regulator, and noise repair",
  },
  {
    id: 4,
    title: "Wall light installation",
    category: "Wall/ceiling light",
    rating: 4.79,
    reviews: "9K reviews",
    price: 159,
    time: "25 mins",
    description: "Wall or ceiling light fixture installation",
  },
  {
    id: 5,
    title: "Doorbell installation",
    category: "Doorbell",
    rating: 4.68,
    reviews: "7K reviews",
    price: 149,
    time: "20 mins",
    description: "Install wired or wireless doorbell system",
  },
];

const Services = () => {
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const sectionRefs = useRef({});
  const { type } = useParams();
   console.log(type); 

  const [openFAQ, setOpenFAQ] = useState(null);

  const handleCategoryClick = (categoryName) => {
    const section = sectionRefs.current[categoryName];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const faqData = [
  {
    question: "Does the cost include spare parts?",
    answer:
      "No, spare parts are charged separately if required during service.",
  },
  {
    question: "What if any issue occurs during the service?",
    answer:
      "The service is covered by a 30-day warranty for any issues after replacement. We will fix it for free.",
  },
  {
    question: "What if anything gets damaged?",
    answer:
      "Our professionals take full responsibility and damages will be covered as per policy.",
  },
  {
    question: "Are spare parts covered under warranty?",
    answer:
      "Warranty on spare parts depends on manufacturer terms and service type.",
  },
];

const ratings = [
  { star: 5, count: 7000 },
  { star: 4, count: 185 },
  { star: 3, count: 62 },
  { star: 2, count: 39 },
  { star: 1, count: 86 },
];

const totalReviews = ratings.reduce((acc, r) => acc + r.count, 0);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  return (
    <div className="bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* LEFT COLUMN */}
       <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
            Electrician
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-5">
            {categories.map((cat, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(cat.name)}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] group-hover:border-[#2563EB] transition">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <p className="text-sm text-[#0F172A] mt-3 leading-tight">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE COLUMN */}
       <div className="lg:col-span-2 max-h-none lg:max-h-[80vh] overflow-visible lg:overflow-y-auto pr-0 lg:pr-4 space-y-10">
          {[...new Set(servicesData.map((s) => s.category))]
            .filter(Boolean)
            .map((category) => (
              <div
                key={category}
                ref={(el) => (sectionRefs.current[category] = el)}
              >
                <h1 className="text-2xl font-bold text-[#0F172A] mb-6">
                  {category}
                </h1>

                {servicesData
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <div
                      key={service.id}
                      className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex justify-between items-start mb-6"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-[#0F172A]">
                          {service.title}
                        </h3>

                        <p className="text-sm text-[#64748B] mt-1">
                          {service.rating} ({service.reviews})
                        </p>

                        <p className="text-sm font-medium mt-2">
                          ₹{service.price} • {service.time}
                        </p>

                        <button
                          onClick={() => setSelectedService(service)}
                          className="text-purple-600 text-sm mt-3 font-semibold"
                        >
                          View details
                        </button>
                      </div>

                      <button
                        onClick={() => addToCart(service)}
                        className="border border-purple-600 text-purple-600 px-5 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
                      >
                        Add
                      </button>
                    </div>
                  ))}
              </div>
            ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* Cart */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 text-center shadow-sm">
            {cart.length === 0 ? (
              <>
                <img
                  src={cartImage}
                  alt="cart"
                  className="w-24 mx-auto mb-4"
                />
                <p className="text-[#080808]">
                  No items in your cart
                </p>
              </>
            ) : (
              <>
                <h3 className="font-semibold mb-3">Cart</h3>
                {cart.map((item, index) => (
                  <p key={index} className="text-sm mb-1">
                    {item.title}
                  </p>
                ))}
              </>
            )}
          </div>

          
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Percent className="text-green-600" />
                <div>
                  <h4 className="font-semibold">
                    Get visitation fee off
                  </h4>
                  <p className="text-sm text-[#080808]">
                    On orders above ₹500
                  </p>
                </div>
              </div>
            </div>



          {/* Promise */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold mb-3">UC Promise</h4>
            <div className="space-y-2 text-sm text-[#080808]">
              <div>✔ Verified Professionals</div>
              <div>✔ Hassle Free Booking</div>
              <div>✔ Transparent Pricing</div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    
    <div className="bg-white w-full max-w-3xl h-[90vh] rounded-xl overflow-hidden flex flex-col">

      {/* ===== Sticky Header ===== */}
      <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <button
          onClick={() => setSelectedService(null)}
          className="absolute right-6 top-6 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold">
          {selectedService.title}
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          ★ {selectedService.rating} ({selectedService.reviews})
        </p>

        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="text-xl font-semibold">
              ₹{selectedService.price}
            </p>
            <p className="text-sm text-gray-500">
              {selectedService.time}
            </p>
          </div>

          <button
            onClick={() => addToCart(selectedService)}
            className="border border-[#6D28D9] text-[#6D28D9] px-6 py-2 rounded-lg font-semibold hover:bg-[#6D28D9] hover:text-white transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* ===== Scrollable Body ===== */}
      <div className="overflow-y-auto p-6 space-y-10">

        {/* ===== Our Process ===== */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Our process</h3>

          {[
            {
              step: 1,
              title: "Inspection",
              desc: "We will check the space where you want to install the switchbox",
            },
            {
              step: 2,
              title: "Installation",
              desc: "We will install the switchbox with care",
            },
            {
              step: 3,
              title: "Cleanup",
              desc: "We will clean the area once work is done",
            },
            {
              step: 4,
              title: "Warranty activation",
              desc: "The service is covered by a 30-day warranty for any issues after installation",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                {item.step}
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Package Description ===== */}
        {/* ===== Please Note + Top Technicians ===== */}
<div className="bg-gray-50 rounded-xl overflow-hidden">

  {/* Please Note */}
  <div className="p-6">
    <h3 className="text-2xl font-bold mb-6">
      Please note
    </h3>

    <div className="space-y-4">

      <div className="flex gap-4 items-start">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
          i
        </div>
        <p className="text-gray-700">
          Provide a ladder, if required
        </p>
      </div>

      <div className="flex gap-4 items-start">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
          i
        </div>
        <p className="text-gray-700">
          If spare parts are needed, the electrician will source them from the local market
        </p>
      </div>

    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-200"></div>

  {/* Top Technicians */}
  <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left Side Content */}
    <div>
      <h3 className="text-2xl font-bold mb-6">
        Top technicians
      </h3>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <span className="text-xl">✔</span>
          <p>Background verified</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl">🔧</span>
          <p>Trained across all major brands</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl">🏅</span>
          <p>Certified under Skill India Programme</p>
        </div>

      </div>
    </div>

    {/* Right Side Image */}
    <div className="w-48 md:w-56">
      <img
        src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
        alt="Technician"
        className="rounded-lg"
      />
    </div>

  </div>
</div>

       {/* ===== Frequently Asked Questions ===== */}
<div className="mt-8">

  <h3 className="text-xl font-semibold mb-4">
    Frequently asked questions
  </h3>

  <div className="space-y-3">
    {faqData.map((faq, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg p-4 bg-white"
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() =>
            setOpenFAQ(openFAQ === index ? null : index)
          }
        >
          <p className="font-medium">{faq.question}</p>
          <span className="text-xl">
            {openFAQ === index ? "▲" : "▼"}
          </span>
        </div>

        {openFAQ === index && (
          <p className="text-gray-600 mt-3 text-sm">
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
</div>

{/* ===== Ratings Section ===== */}
<div className="mt-10">

  <div className="flex items-center gap-3 mb-6">
    <span className="text-3xl font-bold">★ 4.86</span>
    <span className="text-gray-500 text-sm">
      {totalReviews} reviews
    </span>
  </div>

  <div className="space-y-3">
    {ratings.map((r, index) => {
      const percentage = (r.count / totalReviews) * 100;

      return (
        <div key={index} className="flex items-center gap-3">
          <span className="w-6 text-sm">★ {r.star}</span>

          <div className="flex-1 bg-gray-200 h-2 rounded">
            <div
              className="bg-black h-2 rounded"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          <span className="w-12 text-sm text-right">
            {r.star === 5 ? "7K" : r.count}
          </span>
        </div>
      );
    })}
  </div>
</div>

        {/* ===== Reviews ===== */}
        <div className="space-y-6">

            <h3 className="text-xl font-semibold mb-4">
    Reviews
  </h3>
          <div>
            <p className="font-semibold">Bijay Singh</p>
            <p className="text-xs text-gray-500">
              Feb 11, 2026
            </p>
            <p className="text-sm mt-2">
              Over charge for a switch board installation... The person charged Rs-1725 extra. Really a pathetic service.
            </p>
          </div>

          <div>
            <p className="font-semibold">Gurtesh Matharu</p>
            <p className="text-xs text-gray-500">
              Feb 9, 2026
            </p>
            <p className="text-sm mt-2">
              The part he got from the local market is not good. One switch already stopped working.
            </p>
          </div>

          <div>
            <p className="font-semibold">Joynal</p>
            <p className="text-xs text-gray-500">
              Feb 12, 2026
            </p>
            <p className="text-sm mt-2">
              Excellent service and clean installation.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Services;
