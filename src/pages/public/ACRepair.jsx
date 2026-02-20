import { useState, useRef } from "react";
import acIcon from "@/assets/images/ac.jpg";
import repairIcon from "@/assets/images/fanrep.jpg";
import cartImage from "@/assets/images/cart.jpg";
import { Percent } from "lucide-react";
import ac1 from "@/assets/images/ac1.jpg";
import ac2 from "@/assets/images/ac2.jpg";
import ac3 from "@/assets/images/ac3.jpg";
import ac4 from "@/assets/images/25per.jpg";

const acCategories = [
  { name: "Super saver packages", discount: "Upto 25% OFF", image: ac4 },
  { name: "Service", image: ac1 },
  { name: "Repair & gas refill", image: ac2 },
  { name: "Installation / Uninstallation", image: ac3 },
];

const ACRepair = () => {
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const serviceRef = useRef(null);
  const repairRef = useRef(null);
  const installRef = useRef(null);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const scrollToSection = (name) => {
    if (name === "Service" && serviceRef.current)
      serviceRef.current.scrollIntoView({ behavior: "smooth" });

    if (name === "Repair & gas refill" && repairRef.current)
      repairRef.current.scrollIntoView({ behavior: "smooth" });

    if (name === "Installation / Uninstallation" && installRef.current)
      installRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== MODAL ===== */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-lg rounded-2xl shadow-xl relative">

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 text-xl"
              >
                ✕
              </button>

              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-6">
                  {selectedService.title}
                </h2>

                <div className="space-y-4 text-gray-700">
                  {selectedService.description &&
                    selectedService.description.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-green-600">✔</span>
                        <p>{item}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="p-4 border-t">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== REST OF YOUR CODE (UNCHANGED) ===== */}

        {/* ===== TOP HEADING ===== */}
        <div className="mb-10 flex items-center justify-between flex-wrap gap-6">

          <div>
            <h1 className="text-4xl font-bold text-[#0F172A]">
              AC Service and Repair
            </h1>

            <p className="mt-3 text-gray-600">
              ⭐ 4.74 (11.5M bookings)
            </p>

            <div className="mt-5 bg-[#E2F8EC] border border-green-200 p-4 rounded-xl w-fit">
              <p className="text-green-700 text-sm font-medium">
                ✔ Upto 30 days warranty on repairs
              </p>
            </div>
          </div>

          {/* Small Images */}
          <div className="flex gap-4">
            <img
              src={acIcon}
              alt="AC"
              className="rounded-2xl object-cover h-40 w-full hover:scale-105 transition duration-500"
            />
            <img
              src={repairIcon}
              alt="Repair"
              className="rounded-2xl object-cover h-40 w-full hover:scale-105 transition duration-500"
            />
          </div>

        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* ===== LEFT COLUMN ===== */}
          {/* ===== LEFT COLUMN ===== */}
<div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
  <h2 className="text-lg font-semibold mb-6">
    Select a service
  </h2>

  <div className="grid grid-cols-2 gap-6">
    {acCategories.map((cat, index) => (
      <div
        key={index}
        onClick={() => scrollToSection(cat.name)}
        className="flex flex-col items-center justify-center text-center 
                   border rounded-xl p-4 cursor-pointer 
                   hover:border-[#2563EB] hover:shadow-md transition
                   aspect-square"
      >
        {/* Image */}
        <img
          src={cat.image}
          alt={cat.name}
          className="w-20 h-20 object-cover rounded-lg mb-3"
        />

        {/* Discount */}
        {cat.discount && (
          <p className="text-xs text-green-600 font-semibold mb-1">
            {cat.discount}
          </p>
        )}

        {/* Title */}
        <p className="text-sm font-medium text-gray-800">
          {cat.name}
        </p>
      </div>
    ))}
  </div>
</div>

          {/* ===== MIDDLE COLUMN (SCROLLABLE) ===== */}
          <div className="md:col-span-2 space-y-10 max-h-[600px] overflow-y-auto pr-4">

            {/* ===== SERVICE SECTION ===== */}
            <div ref={serviceRef}>
              <h2 className="text-xl font-semibold mb-4">Service</h2>

              <div className="space-y-6">
                <ServiceCard
                  title="Foam-jet service (1 AC)"
                  rating="4.74"
                  reviews="11.5M bookings"
                  price="1298"
                  time="1 hr 30 mins"
                  addToCart={addToCart}
                />
               <ServiceCard
  title="Foam-jet service (1 AC)"
  rating="4.74"
  reviews="11.5M bookings"
  price="1298"
  time="1 hr 30 mins"
  addToCart={addToCart}
  onView={() =>
    setSelectedService({
      title: "Foam-jet service (1 AC)",
      description: [
        "Applicable for both Split & Window ACs",
        "FoamJet cleaning of indoor unit",
        "Jet-spray wash of outdoor unit",
        "Deep cleans AC vents & filters",
        "Better cooling performance",
        "Reduced electricity consumption",
      ],
    })
  }
/>

              </div>
            </div>

            {/* ===== REPAIR SECTION ===== */}
            <div ref={repairRef}>
              <h2 className="text-xl font-semibold mb-4">
                Repair & Gas Refill
              </h2>

              <div className="space-y-6">
               <ServiceCard
                  title="AC gas refill"
                  rating="4.70"
                    reviews="5M bookings"
                    price="2499"
                    time="2 hrs"
                    addToCart={addToCart}
                    onView={() =>
                      setSelectedService({
                        title: "AC Gas Refill",
                        description: [
                          "Complete gas refill",
                          "Leak testing",
                          "Pressure check",
                          "Improved cooling",
                        ],
                      })
                    }
                  />

              </div>
            </div>

            {/* ===== INSTALLATION SECTION ===== */}
            <div ref={installRef}>
              <h2 className="text-xl font-semibold mb-4">
                Installation / Uninstallation
              </h2>

              <div className="space-y-6">
                <ServiceCard
  title="Split AC Installation"
  rating="4.80"
  reviews="2.3M bookings"
  price="1599"
  time="2 hrs"
  addToCart={addToCart}
  onView={() =>
    setSelectedService({
      title: "Split AC Installation",
      description: [
        "Indoor & outdoor unit fitting",
        "Copper pipe setup",
        "Gas pressure check",
        "Testing & demo",
      ],
    })
  }
/>

              </div>
            </div>

          </div>

          {/* ===== RIGHT COLUMN ===== */}
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
          </div>

        </div>
    
  );
};



/* ===== Reusable Service Card ===== */

const ServiceCard = ({
  title,
  rating,
  reviews,
  price,
  time,
  addToCart,
  onView,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-sm text-gray-500 mt-1">
          ⭐ {rating} ({reviews})
        </p>

        <p className="mt-2 font-medium">
          ₹{price} • {time}
        </p>

        <button
          onClick={onView}
          className="text-purple-600 text-sm mt-3 font-semibold"
        >
          View details
        </button>
      </div>

      <button
        onClick={() => addToCart({ title, price })}
        className="border border-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
      >
        Add
      </button>
    </div>
  );
};

export default ACRepair;
