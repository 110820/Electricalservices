import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, phone } = formData;

    if (!fullName || !email || !password || !phone) {
      toast.error("Please fill all fields");
      return;
    }

    // Temporary dummy signup logic
    const newUser = {
      id: Date.now(),
      name: fullName,
      email: email,
      role: "user",
    };

    login(newUser, "dummy-token-123");

    toast.success("Account created successfully");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-lg p-8">

        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Create Account
        </h1>

        <p className="mt-2 text-sm text-[#64748B]">
          Register to book and manage services.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-[#0F172A] block mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#0F172A] block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-[#0F172A] block mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-[#0F172A] block mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-sm text-[#64748B]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
