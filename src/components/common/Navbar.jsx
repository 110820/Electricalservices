import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-[#0F172A]">Servi</span>
          <span className="text-[#2563EB]">xo</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* <Link 
            to="/services" 
            className="relative text-[#475569] hover:text-[#0F172A] transition duration-300 group"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
          </Link> */}

          <Link to="/home-services" className="hover:text-black">
              Home Services
          </Link>

          {/* <Link to="/acrepair" className="hover:text-black">
              AC Repair
          </Link>

          <Link to="/washing-machine-repair" className="hover:text-black">
              Washing Machine Repair
          </Link> */}

          {/* <Link 
            to="/MicrowaveRepair" 
            className="text-[#475569] hover:text-[#0F172A] transition duration-300"
          >
            Microwave Repair
          </Link> */}



          <Link 
            to="/login" 
            className="text-[#475569] hover:text-[#0F172A] transition duration-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg bg-[#2563EB] text-white hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md"
          >
            Get Started
          </Link>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
