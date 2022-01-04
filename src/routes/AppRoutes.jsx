import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import LandingPage from "../pages/LandingPage";
import InformationPage from "../pages/InformationPage";
import SchedulePage from "../pages/SchedulePage";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
