import { LandingPage } from "../pages/LandingPage";
import { Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
