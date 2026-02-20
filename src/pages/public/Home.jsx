import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceCard from "../../components/common/service/ServiceCard";
import heroImg from "../../assets/images/hero.jpg"; // make sure image exists

const services = [
  {
    id: 1,
    title: "AC Repair & Service",
    description: "Installation, gas refill, servicing and maintenance.",
  },
  {
    id: 2,
    title: "Refrigerator Repair",
    description: "Cooling issues, compressor repair and maintenance.",
  },
  {
    id: 3,
    title: "Washing Machine Repair",
    description: "Front load & top load repair and servicing.",
  },
];

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Professional Electronics Services <br />
              At Your Doorstep
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Reliable technicians. Transparent pricing. Fast booking.
              Experience corporate-level service quality for your home appliances.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/home-services"
                className="px-6 py-3 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300"
              >
                Explore Services
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-[#2563EB] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2 text-sm">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="mt-2 text-sm">Verified Technicians</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">4.8★</h3>
            <p className="mt-2 text-sm">Average Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2 text-sm">Customer Support</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
<section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-white to-[#F8FAFC]">

  {/* Background Blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#0F172A]">
        Popular Services
      </h2>
      <p className="mt-4 text-[#64748B] max-w-2xl mx-auto">
        Choose from our most booked and highly rated home appliance services.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {services.map((service) => (
        <div
          key={service.id}
          className="group relative bg-white/70 backdrop-blur-lg border border-white/40 p-8 rounded-2xl shadow-md 
          transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:border-blue-400"
        >
          {/* Animated Top Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative z-10">
            <ServiceCard service={service} />
          </div>
        </div>
      ))}

    </div>

    {/* View All Button */}
    <div className="mt-16 text-center">
      <Link
        to="/home-services"
        className="inline-block px-8 py-3 bg-[#2563EB] text-white rounded-xl font-medium 
        transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-700"
      >
        View all services →
      </Link>
    </div>

  </div>
</section>

      {/* ================= WHY CHOOSE US ================= */}
      {/* ================= WHY CHOOSE US ================= */}
<section className="relative py-24 bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F1F5F9] overflow-hidden">

  {/* Background Blurs */}
  <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
  <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#0F172A]">
        Why Choose Us
      </h2>
      <p className="mt-4 text-[#64748B] max-w-2xl mx-auto">
        Experience trusted, transparent and hassle-free home appliance services.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-12">

      {/* Card 1 */}
      <div className="group bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl p-10 shadow-md 
      transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-blue-400 text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center 
        bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full 
        shadow-lg group-hover:scale-110 transition duration-300">
          👨‍🔧
        </div>

        <h3 className="text-xl font-semibold text-[#0F172A] mt-6">
          Certified Professionals
        </h3>

        <p className="mt-4 text-[#64748B] text-sm">
          Skilled and background-verified technicians for safe and reliable service.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl p-10 shadow-md 
      transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-purple-400 text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center 
        bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full 
        shadow-lg group-hover:scale-110 transition duration-300">
          💰
        </div>

        <h3 className="text-xl font-semibold text-[#0F172A] mt-6">
          Transparent Pricing
        </h3>

        <p className="mt-4 text-[#64748B] text-sm">
          No hidden charges. Clear and upfront service pricing.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl p-10 shadow-md 
      transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-green-400 text-center">

        <div className="w-16 h-16 mx-auto flex items-center justify-center 
        bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full 
        shadow-lg group-hover:scale-110 transition duration-300">
          ⚡
        </div>

        <h3 className="text-xl font-semibold text-[#0F172A] mt-6">
          Quick Booking
        </h3>

        <p className="mt-4 text-[#64748B] text-sm">
          Schedule service in seconds with real-time availability.
        </p>
      </div>

    </div>
  </div>
</section>


     
{/* ================= CTA SECTION ================= */}
{/* ================= PREMIUM CTA SECTION ================= */}
<section className="relative py-32 bg-[#F8FAFC] overflow-hidden">

  {/* Light Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

  {/* Soft Glow Effects */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <div className="bg-white rounded-3xl p-16 shadow-xl border border-[#E2E8F0] relative overflow-hidden">

      {/* Floating Accent Shape */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl animate-bounce"></div>

      <h2 className="text-4xl font-bold text-[#0F172A] leading-tight">
        Need a Service Today?
      </h2>

      <p className="mt-6 text-[#64748B] text-lg max-w-2xl mx-auto">
        Book your service now and get professional assistance within hours.
        Fast response. Trusted experts. Transparent pricing.
      </p>

      {/* Animated Gradient Button */}
      <Link
        to="/home-services"
        className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-white
        bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
        bg-[length:200%_200%]
        animate-gradient
        shadow-lg hover:shadow-xl
        hover:scale-105 transition-all duration-300"
      >
        Get Started →
      </Link>

      {/* Trust Badges */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#475569]">

        <div className="flex items-center gap-2 bg-[#F1F5F9] px-4 py-2 rounded-full">
          ⭐ 10K+ Happy Customers
        </div>

        <div className="flex items-center gap-2 bg-[#F1F5F9] px-4 py-2 rounded-full">
          ✔ 4.8 Average Rating
        </div>

        <div className="flex items-center gap-2 bg-[#F1F5F9] px-4 py-2 rounded-full">
          🔒 100% Secure Booking
        </div>

      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
