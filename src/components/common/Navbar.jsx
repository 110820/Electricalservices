import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaLocationArrow } from "react-icons/fa";


const Navbar = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-[#0F172A]">Servi</span>
            <span className="text-[#2563EB]">xo</span>
          </Link>

          {/* Middle Section - Location + Search */}
          <div className="hidden md:flex items-center gap-4">

            {/* Location Box */}
            <div
              onClick={() => setShowLocationModal(true)}
              className="flex items-center gap-3 px-4 py-2 border rounded-lg cursor-pointer 
              hover:border-[#2563EB] transition bg-white shadow-sm"
            >
              <FaMapMarkerAlt className="text-gray-500" />
              <span className="text-sm text-gray-700">
                Mumbai Central, Mumbai
              </span>
            </div>

            {/* Search Box */}
            <div className="flex items-center gap-3 px-4 py-2 border rounded-lg bg-white shadow-sm w-80">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for ‘AC service’"
                className="outline-none text-sm w-full"
              />
            </div>

          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link to="/home-services" className="hover:text-black">
              Home Services
            </Link>

            <Link
              to="/login"
              className="text-[#475569] hover:text-[#0F172A] transition duration-300"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-600 transition duration-300 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>

          </nav>
        </div>
      </header>

      {/* ================= LOCATION MODAL ================= */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white w-[600px] rounded-2xl shadow-xl p-8 relative">

            {/* Close Button */}
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute -top-5 -right-5 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-gray-100"
            >
              ✕
            </button>

            {/* Search Location */}
            <div className="flex items-center gap-3 border rounded-lg px-4 py-3 mb-6">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for your location/society/apartment"
                className="outline-none w-full text-sm"
              />
            </div>

            {/* Use Current Location */}
            <div className="flex items-center gap-3 text-[#2563EB] font-medium cursor-pointer hover:underline mb-6">
              <FaLocationArrow />
              <span>Use current location</span>
            </div>

            <hr className="my-4" />

            {/* Saved Section */}
            <h3 className="text-lg font-semibold mb-4">Saved</h3>

            <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="text-2xl">🏠</div>
              <div>
                <p className="font-medium">Home</p>
                <p className="text-sm text-gray-500">
                  311, Bank Colony, Nagpur, Maharashtra 440034
                </p>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400 mt-8">
              powered by Google
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;