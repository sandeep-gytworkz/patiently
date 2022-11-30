import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "animate.css";

import AdminNavBar from "./components/Admin-UI/common-components/AdminNavBar";
import Dashboard from "./components/Admin-UI/Dashboard";
import About from "./components/HomePage/About";
import DataSecurity from "./components/HomePage/DataSecurity";
import Homepage from "./components/HomePage/HomePage";
import LoginPage from "./components/HomePage/LoginPage";

import Participate from "./components/Participate/Participate";
import Signup from "./components/Signup/Signup";
import Slide9 from "./components/Participate/Slides/Slide9";

import VerifyOtp from "./components/Participate/Slides/VerifyOtp";
import ResetPassword from "./components/HomePage/ResetPassword";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/participate-now" element={<Participate />} />
        <Route exact path="/data-security" element={<DataSecurity />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/view-profile" element={<Slide9 />} />
        <Route
          exact
          path="/verify-otp"
          element={
            <VerifyOtp
              isForgotPassword={true}
              changeSlide={() => {
                navigate("/reset-password");
              }}
            />
          }
        />
        <Route exact path="/reset-password" element={<ResetPassword />} />
      </Routes>

      {/* <Dashboard /> */}
    </>
  );
}

export default App;
