import { useState } from "react";
import { Star, ShieldCheck, Percent, X } from "lucide-react";
 import topLoadImg from "@/assets/images/topload.jpg";
 import frontLoadImg from "@/assets/images/frontload.jpg";
 import cartImg from "@/assets/images/cart.jpg";

const WashingMachineRepair = () => {
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // ✅ Modal state added
  const [showOffers, setShowOffers] = useState(false);
  const [showWarrantyModal, setShowWarrantyModal] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const OfferItem = ({ title, desc }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-green-100 p-3 rounded-lg">
        <Percent className="text-green-600" size={18} />
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">


        {/* ================= LEFT COLUMN ================= */}
         <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Washing Machine <br /> Repair
            </h1>

            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <Star size={18} className="text-purple-600 fill-purple-600" />
              <span className="font-medium">4.74</span>
              <span>(3.1 M bookings)</span>
            </div>
          </div>

          {/* Warranty */}
          <div
              onClick={() => setShowWarrantyModal(true)}
              className="bg-gray-100 p-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-200 transition"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-gray-700" />
                <span className="text-sm text-gray-700">
                  Up to 180 days warranty
                </span>
              </div>
              <span>›</span>
            </div>

          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold">
            View Services
          </button>
        </div>



        {/* ================= MIDDLE COLUMN ================= */}
         <div className="md:col-span-2 space-y-10">
          <h2 className="text-2xl font-semibold">Repair</h2>

          <RepairCard
            title="Automatic top load machine check-up"
            rating="4.77"
            reviews="356K reviews"
            price="199"
            image={topLoadImg}
            options="6 options"
            addToCart={addToCart}
            openModal={() =>
              setSelectedService("Automatic top load machine check-up")
            }
          />

          <RepairCard
            title="Automatic front load machine check-up"
            rating="4.75"
            reviews="158K reviews"
            price="199"
            image={frontLoadImg}
            options="7 options"
            addToCart={addToCart}
            openModal={() =>
              setSelectedService("Automatic front load machine check-up")
            }
          />
        </div>

        
        {/* ================= RIGHT COLUMN ================= */}
         <div className="space-y-6">

          {/* Cart */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-sm">
            {cart.length === 0 ? (
              <>
                <img
                  src={cartImg}
                  alt="cart"
                  className="w-24 mx-auto mb-4"
                />
                <p className="text-gray-600">No items in your cart</p>
              </>
            ) : (
              <>
                <h3 className="font-semibold mb-3">Cart</h3>
                {cart.map((item, i) => (
                  <p key={i} className="text-sm mb-1">
                    {item.title}
                  </p>
                ))}
              </>
            )}
          </div>

          {/* Coupon */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">

  <div className="flex items-center gap-4">
    <Percent className="text-green-600" />
    <div>
      <h4 className="font-semibold">Get ₹50 coupon</h4>
      <p className="text-sm text-gray-600">
        After first service delivery
      </p>
    </div>
  </div>

  {/* Dropdown List */}
  {showOffers && (
    <div className="mt-5 space-y-4 border-t pt-4">

      <OfferItem title="Amazon cashback upto ₹100" desc="Via Amazon Pay balance" />
      <OfferItem title="Flat ₹100 cashback" desc="Via Rupay CC on POP app" />
      <OfferItem title="Up to ₹100 cashback" desc="Valid for BHIM app only" />
      <OfferItem title="Up to ₹100 cashback" desc="Via POP UPI" />
      <OfferItem title="Up to ₹150 cashback" desc="Via Paytm UPI only" />

    </div>
  )}

  <button
    onClick={() => setShowOffers(!showOffers)}
    className="text-purple-600 text-sm mt-4 font-medium flex items-center gap-1"
  >
    {showOffers ? "View Less Offers" : "View More Offers"}
    <span
      className={`transition-transform duration-300 ${
        showOffers ? "rotate-180" : ""
      }`}
    >
      ▲
    </span>
  </button>

</div>

          {/* Promise */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold mb-4">UC Promise</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div>✔ Verified Professionals</div>
              <div>✔ Hassle Free Booking</div>
              <div>✔ Transparent Pricing</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WARRANTY MODAL ================= */}
{showWarrantyModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    
    <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl relative max-h-[85vh] overflow-y-auto">

      {/* Close Button */}
      <button
        onClick={() => setShowWarrantyModal(false)}
        className="absolute top-4 right-4 bg-gray-100 rounded-full p-2"
      >
        <X size={18} />
      </button>

      <div className="p-8 space-y-8">

        <h2 className="text-3xl font-bold">
          <span className="text-teal-600">✔ UC cover</span> promise
        </h2>

        <div className="border-t pt-6 space-y-8">

          <div>
            <h3 className="font-semibold text-lg">
              Up to 180 days warranty
            </h3>
            <p className="text-gray-600 mt-1">
              Free repair if the issue arises again.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Up to ₹10,000 damage cover
            </h3>
            <p className="text-gray-600 mt-1">
              If any damage happens during service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Fixed rate card
            </h3>
            <p className="text-gray-600 mt-1">
              All prices are set basis market standard.
            </p>
            <p className="underline mt-2 cursor-pointer">
              View rate card
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              On call quote verification
            </h3>
            <p className="text-gray-600 mt-1">
              We verify all the quotes, but if you're unsure you can call our senior experts.
            </p>
          </div>

          {/* Extra content for scroll */}
          <div className="pt-6 space-y-3 text-gray-500 text-sm">
            <p>Terms & conditions apply.</p>
            <p>Warranty valid only for service-related issues.</p>
            <p>Damage cover applicable during service window.</p>
            <p>Verification support available 24/7.</p>
            <p>Subject to inspection approval.</p>
            <p>Additional documentation may be required.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
)}

 {/* ================= MODAL ================= */}
 {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl p-8 relative">

            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-gray-200 rounded-full p-2"
            >
              <X size={18} />
            </button>

            <h2 className="text-3xl font-bold mb-6">
              Highly rated by customers for better performance
            </h2>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li>✔ Applicable for both top & front load</li>
              <li>✔ Deep cleaning of internal parts</li>
              <li>✔ Better washing performance</li>
            </ul>

            <hr className="my-6" />

            <h3 className="text-2xl font-bold mb-4">Our process</h3>

            <div className="space-y-4 text-gray-700">
              <p>1. Inspection & quote</p>
              <p>2. Approval or expert review</p>
              <p>3. Repair & spare parts</p>
              <p>4. Warranty activation (180 days)</p>
            </div>

            <button
              onClick={() => setSelectedService(null)}
              className="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

  const RepairCard = ({
  title,
  rating,
  reviews,
  price,
  image,
  options,
  addToCart,
  openModal,
}) => {
  return (
    <div className="border-b pb-10 flex justify-between items-start">
      <div className="max-w-md">
        <h3 className="text-lg font-semibold">{title}</h3>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <Star size={14} className="text-purple-600 fill-purple-600" />
          <span>{rating}</span>
          <span>({reviews})</span>
        </div>

        <p className="mt-3 font-medium">Starts at ₹{price}</p>

        <p className="text-sm text-gray-500 mt-2">
          Visitation fee will be adjusted in the final repair quote
        </p>

        <button
          onClick={openModal}
          className="text-purple-600 text-sm mt-3 font-medium"
        >
          View details
        </button>
      </div>
      {/* Right Side */}
      <div className="text-center">
        <img
          src={image}
          alt={title}
          className="w-32 h-40 object-contain bg-gray-100 rounded-xl p-3"
        />

        <button
          onClick={() => addToCart({ title, price })}
          className="border border-purple-600 text-purple-600 px-6 py-2 rounded-xl mt-3 hover:bg-purple-600 hover:text-white transition"
        >
          Add
        </button>

        <p className="text-xs text-gray-500 mt-2">{options}</p>
      </div>
    </div>
  );
};

export default WashingMachineRepair;