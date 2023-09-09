import { LandingPage } from "../pages/LandingPage";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import "../App.scss";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
