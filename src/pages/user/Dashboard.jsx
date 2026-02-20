import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[#0F172A]">
        Welcome, {user?.name}
      </h1>

      <button
        onClick={logout}
        className="mt-6 px-4 py-2 bg-[#EF4444] text-white rounded-md text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
