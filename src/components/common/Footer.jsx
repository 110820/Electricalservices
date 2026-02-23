import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-200 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Company Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="bg-black text-white font-bold px-3 py-2 rounded-md">
                UC
              </div> */}
              <h2 className="text-xl font-bold text-gray-900">
              Servixo
              </h2>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">About us</li>
              <li className="hover:text-black cursor-pointer">Investor Relations</li>
              <li className="hover:text-black cursor-pointer">Terms & conditions</li>
              <li className="hover:text-black cursor-pointer">Privacy policy</li>
              <li className="hover:text-black cursor-pointer">Anti-discrimination policy</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              For customers
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-black cursor-pointer">UC reviews</li>
              <li className="hover:text-black cursor-pointer">Categories near you</li>
              <li className="hover:text-black cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* Social + App Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              For professionals
            </h3>
            <p className="text-gray-600 mb-8 hover:text-black cursor-pointer">
              Register as a professional
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Social links
            </h3>

            <div className="flex gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:scale-105 transition">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:scale-105 transition">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:scale-105 transition">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center cursor-pointer hover:scale-105 transition">
                <FaLinkedinIn />
              </div>
            </div>

            {/* App Buttons */}
            <div className="space-y-4">
              <button className="bg-black text-white px-5 py-3 rounded-lg w-full hover:opacity-90 transition">
                Download on the App Store
              </button>

              <button className="bg-black text-white px-5 py-3 rounded-lg w-full hover:opacity-90 transition">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Urban Company. All rights reserved.
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;