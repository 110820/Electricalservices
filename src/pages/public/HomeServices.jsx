import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 
 import massage from "../../assets/images/washmach.jpg";
 import cleaning from "../../assets/images/fanrep.jpg";
 import ac from "../../assets/images/ac.jpg";
 import salon from "../../assets/images/wiring1.jpg";
 import acIcon from "../../assets/images/acicon.jpg";
 import elecIcon from "../../assets/images/elec.jpg";
import waterIcon from "../../assets/images/wapu.jpg";
import gyserIcon from "../../assets/images/gyser.jpg";
import refrigIcon from "../../assets/images/refri.jpg";
import washIcon from "../../assets/images/wash.jpg";

const categories = [
 {
    name: "Electrician",
    slug: "electrician",
    image: elecIcon,
  },
  { name: "AC & Appliance Repair", 
    slug: "ac-repair",
    image: acIcon },

  { name: "Water Purifier",
    image: waterIcon,
    isModal: true  },

  { name: "Washing machine", 
    slug: "washing-machine-repair",
    image: washIcon },

  { name: "Refrigarator", 
    slug: "refrigerator-repair",
    image: refrigIcon },

  { name: "Gyser", 
    slug: "gyser-repair",
    image: gyserIcon },
];

const HomeServices = () => {

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-semibold text-[#0F172A] leading-tight">
            Home services at your doorstep
          </h1>

          <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0]">

            <h3 className="text-lg font-medium text-[#0F172A] mb-6">
              What are you looking for?
            </h3>

           {/* <div className="grid grid-cols-3 gap-6"> */}
  <div className="grid grid-cols-3 gap-6">
  {categories.map((cat, index) => (
    <div
      key={index}
      onClick={() =>
        cat.isModal
          ? setShowModal(true)
          : navigate(`/services/${cat.slug}`)
      }
      className="flex flex-col items-center text-center cursor-pointer group transition"
    >
      <div className="w-20 h-20 flex items-center justify-center bg-[#F1F5F9] rounded-xl overflow-hidden group-hover:bg-[#DBEAFE] transition duration-300">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-14 h-14 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      <p className="mt-3 text-sm text-[#475569] group-hover:text-[#2563EB] transition duration-300">
        {cat.name}
      </p>
    </div>
  ))}
</div>
</div>
    </div>


    {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 w-[500px] relative">

      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-3xl font-semibold mb-8">Appliances</h2>

      <div className="grid grid-cols-2 gap-8">

        {/* Water Purifier */}
        <div
          onClick={() => {
            setShowModal(false);
            navigate("/services/water-purifier");
          }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition">
            <img src={waterIcon} alt="Water Purifier" className="w-16" />
          </div>
          <p className="mt-3 text-sm">Water Purifier</p>
        </div>

        {/* Microwave */}
        <div
          onClick={() => {
            setShowModal(false);
            navigate("/services/microwave-repair");
          }}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition">
            <img src={acIcon} alt="Microwave" className="w-16" />
          </div>
          <p className="mt-3 text-sm">Microwave</p>
        </div>

      </div>
    </div>
  </div>
)}
   



        {/* RIGHT SIDE IMAGE COLLAGE */}
        <div className="grid grid-cols-2 gap-4">

         

          <img
            src={massage}
            alt="Massage"
            className="rounded-2xl object-cover h-64 w-full hover:scale-105 transition duration-500"
          />

          <img
            src={cleaning}
            alt="Cleaning"
            className="rounded-2xl object-cover h-64 w-full hover:scale-105 transition duration-500"
          />

          <img
            src={ac}
            alt="AC Repair"
            className="rounded-2xl object-cover h-64 w-full hover:scale-105 transition duration-500"
          />

           <img
            src={salon}
            alt="Salon"
            className="rounded-2xl object-cover h-64 w-full hover:scale-105 transition duration-500"
          />

        </div>
      </section>

    </div>
  );
};

export default HomeServices;
