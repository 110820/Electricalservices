import { useState } from "react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-[#0F172A]">
          Book Service
        </h1>
        <p className="mt-3 text-sm text-[#64748B]">
          Fill in your details to schedule your service appointment.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg p-8">
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#0F172A] mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#0F172A] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-[#0F172A] mb-2">
              Service Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#0F172A] mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              required
            />
          </div>

          {/* Time */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#0F172A] mb-2">
              Preferred Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
              required
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-[#0F172A] mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-[#2563EB] text-white rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Confirm Booking
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BookingPage;
