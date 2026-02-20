import { useState } from "react";
import { Star, ShieldCheck, Percent, X } from "lucide-react";
import geyserCheckImg from "@/assets/images/gy1.jpg"; // replace with geyser check image
import geyserServiceImg from "@/assets/images/gy2.jpg"; // replace
import geyserInstallImg from "@/assets/images/gy3.jpg"; // replace
import geyserUninstallImg from "@/assets/images/gy4.jpg"; // replace
import cartImg from "@/assets/images/cart.jpg";

const GeyserRepair = () => {
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [showOffers, setShowOffers] = useState(false);
  const [showWarrantyModal, setShowWarrantyModal] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const OfferItem = ({ title, desc }) => (
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

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">Geyser Repair</h1>

            <div className="flex items-center gap-2 mt-4 text-gray-700">
              <Star size={18} className="text-purple-600 fill-purple-600" />
              <span className="font-medium">4.73</span>
              <span>(1.3 M bookings)</span>
            </div>
          </div>

          <div
            onClick={() => setShowWarrantyModal(true)}
            className="bg-gray-100 p-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-gray-200"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck />
              <span className="text-sm">Up to 30 days warranty</span>
            </div>
            <span>›</span>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold">
            View Services
          </button>
        </div>

        {/* ================= MIDDLE COLUMN (SCROLLABLE) ================= */}
        <div className="md:col-span-2 h-[80vh] overflow-y-auto pr-4 space-y-10">

          <h2 className="text-3xl font-semibold">Repair & service</h2>

          <RepairCard
            title="Geyser check-up"
            rating="4.72"
            reviews="114K reviews"
            price="249"
            time="60 mins"
            image={geyserCheckImg}
            addToCart={addToCart}
            openModal={() => setSelectedService("Geyser check-up")}
          />

          <RepairCard
            title="Geyser service"
            rating="4.76"
            reviews="83K reviews"
            price="599"
            image={geyserServiceImg}
            addToCart={addToCart}
            openModal={() => setSelectedService("Geyser service")}
          />

          <h2 className="text-3xl font-semibold border-t pt-10">
            Installation & uninstallation
          </h2>

          <RepairCard
            title="Geyser installation"
            rating="4.78"
            reviews="49K reviews"
            price="499"
            time="60 mins"
            image={geyserInstallImg}
            addToCart={addToCart}
            openModal={() => setSelectedService("Geyser installation")}
          />

          <RepairCard
            title="Geyser uninstallation"
            rating="4.84"
            reviews="11K reviews"
            price="399"
            time="40 mins"
            image={geyserUninstallImg}
            addToCart={addToCart}
            openModal={() => setSelectedService("Geyser uninstallation")}
          />

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-6">

          {/* Cart */}
          <div className="bg-white border rounded-xl p-8 text-center shadow-sm">
            {cart.length === 0 ? (
              <>
                <img src={cartImg} alt="cart" className="w-24 mx-auto mb-4" />
                <p className="text-gray-600">No items in your cart</p>
              </>
            ) : (
              <>
                <h3 className="font-semibold mb-3">Cart</h3>
                {cart.map((item, i) => (
                  <p key={i}>{item.title}</p>
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

            {showOffers && (
              <div className="mt-5 space-y-4 border-t pt-4">
                <OfferItem title="Amazon cashback upto ₹100" desc="Via Amazon Pay balance" />
                <OfferItem title="Flat ₹100 cashback" desc="Via Rupay CC on POP app" />
                <OfferItem title="Up to ₹150 cashback" desc="Via Paytm UPI only" />
              </div>
            )}

            <button
              onClick={() => setShowOffers(!showOffers)}
              className="text-purple-600 text-sm mt-4 font-medium"
            >
              {showOffers ? "View Less Offers ▲" : "View More Offers ▼"}
            </button>
          </div>

          {/* Promise */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold mb-4">UC Promise</h4>
            <div className="space-y-3 text-sm">
              <div>✔ Verified Professionals</div>
              <div>✔ Hassle Free Booking</div>
              <div>✔ Transparent Pricing</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WARRANTY MODAL ================= */}
      {showWarrantyModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-xl rounded-2xl max-h-[85vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setShowWarrantyModal(false)}
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full"
            >
              <X size={18} />
            </button>

            <h2 className="text-2xl font-bold mb-6">
              <span className="text-teal-600">✔ UC cover</span> promise
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Up to 30 days warranty</h3>
                <p className="text-gray-600">
                  Free repair if the issue arises again.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Up to ₹10,000 damage cover</h3>
                <p className="text-gray-600">
                  If any damage happens during service.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Fixed rate card</h3>
                <p className="text-gray-600">
                  All prices are set basis market standard.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">On call quote verification</h3>
                <p className="text-gray-600">
                  We verify all quotes with senior experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
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


export default GeyserRepair;