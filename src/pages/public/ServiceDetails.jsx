import { useParams, Link } from "react-router-dom";

const dummyServiceDetails = {
  1: {
    title: "AC Repair & Service",
    description:
      "Complete AC repair including gas refill, cooling issue fix, installation and servicing.",
    price: "Starting from ₹499",
    includes: [
      "Inspection & diagnosis",
      "Gas refill",
      "Cleaning & maintenance",
      "30-day service warranty",
    ],
  },
  2: {
    title: "Refrigerator Repair",
    description:
      "Professional refrigerator repair for cooling issues, compressor faults and gas leakage.",
    price: "Starting from ₹399",
    includes: [
      "Full inspection",
      "Compressor repair",
      "Gas refill",
      "Spare part replacement",
    ],
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = dummyServiceDetails[id];

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center text-[#64748B]">
        Service not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Title Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-[#0F172A]">
          {service.title}
        </h1>
        <p className="mt-4 text-[#64748B] max-w-3xl">
          {service.description}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Service Info */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold text-[#0F172A]">
            What's Included
          </h2>

          <ul className="mt-6 space-y-4 text-sm text-[#64748B]">
            {service.includes.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 border-b border-[#E2E8F0] pb-4"
              >
                <span className="text-[#22C55E] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Card */}
        <div className="border border-[#E2E8F0] rounded-lg p-6 bg-white h-fit">
          <p className="text-sm text-[#64748B]">Service Price</p>

          <h3 className="text-2xl font-semibold text-[#0F172A] mt-2">
            {service.price}
          </h3>

          <Link
            to="/login"
            className="block mt-8 text-center px-6 py-3 bg-[#2563EB] text-white rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Book Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;
