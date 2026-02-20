import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary dummy login logic
    if (formData.email && formData.password) {
      const dummyUser = {
        id: 1,
        name: "Demo User",
        email: formData.email,
        role: "user",
      };

      login(dummyUser, "dummy-token-123");

      toast.success("Login successful");
      navigate("/dashboard");
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-lg p-8">

        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Login
        </h1>

        <p className="mt-2 text-sm text-[#64748B]">
          Access your account to manage bookings.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

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

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#2563EB] text-white rounded-md text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-sm text-[#64748B]">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#2563EB] font-medium hover:underline">
            Create one
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
