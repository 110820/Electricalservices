import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="border border-[#E2E8F0] rounded-lg p-6 bg-white hover:shadow-sm transition">
      <h3 className="text-lg font-semibold text-[#0F172A]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm text-[#64748B]">
        {service.description}
      </p>

      <Link
        to={`/services/${service.id}`}
        className="inline-block mt-6 text-sm font-medium text-[#2563EB] hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default ServiceCard;
