import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import ProtectedRoute from "../components/common/ProtectedRoute";

// Public Pages
import Home from "../pages/public/Home";
import Services from "../pages/public/Services";
import ServiceDetails from "../pages/public/ServiceDetails";
import HomeServices from "../pages/public/HomeServices";

import ACRepair from "../pages/public/ACRepair";
import WashingMachineRepair from "../pages/public/WashingMachineRepair";
import RefrigeratorRepair from "../pages/public/RefrigeratorRepair";
import GeyserRepair from "../pages/public/GeyserRepair";
import MicrowaveRepair from "../pages/public/MicrowaveRepair";
import WaterPurifier  from "../pages/public/WaterPurifier.jsx";
import ServiceCard from "../components/common/service/ServiceCard";

// Auth Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// // User Pages
// import Dashboard from "../pages/user/Dashboard";
// import BookingPage from "../pages/user/BookingPage";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        {/* Redirect /services to electrician */}
        <Route path="/services" element={<Navigate to="/services/electrician" replace />} />

        {/* Services */}
        <Route path="/services/electrician" element={<Services />} />
        <Route path="/services/ac-repair" element={<ACRepair />} />
        <Route path="/services/washing-machine-repair" element={<WashingMachineRepair />} />
        <Route path="/services/refrigerator-repair" element={<RefrigeratorRepair />} />
        <Route path="/services/gyser-repair" element={<GeyserRepair />} />
        <Route path="/services/water-purifier" element={<WaterPurifier />} />
        <Route path="/services/microwave-repair" element={<MicrowaveRepair />} />

        {/* Dynamic Service */}
        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/services/card" element={<ServiceCard />} />
        <Route path="/home-services" element={<HomeServices />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Route>

      {/* ================= PROTECTED USER ROUTES ================= */}

      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute role="user">
            <BookingPage />
          </ProtectedRoute>
        }
      /> */}

      {/* ================= 404 FALLBACK ================= */}

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default AppRoutes;