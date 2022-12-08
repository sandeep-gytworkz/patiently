import React, { createContext, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "animate.css";
import AboutUs from "../src/UI/AboutUs/AboutUs";
import DataPrivacy from "./components/HomePage/DataPrivacy";
import Homepage from "./components/HomePage/HomePage";
import LoginPage from "./components/HomePage/LoginPage";

import Participate from "./components/Participate/Participate";
import Signup from "./components/Signup/Signup";
import Slide9 from "./components/Participate/Slides/Slide9";

import VerifyOtp from "./components/Participate/Slides/VerifyOtp";
import ResetPassword from "./components/HomePage/ResetPassword";
import ForgotPasswordOtp from "./components/HomePage/ForgotPasswordOtp";
import ContactUs from "./UI/ContactUs/ContactUs";
import HowItWorks from "./components/HomePage/HowItWorks";
import { reducer } from "./Redux/Reducers";
import { initialState } from "./Redux/States";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "../src/components/Admin-UI/Dashboard";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();
  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/participate-now" element={<Participate />} />
        <Route exact path="/data-privacy" element={<DataPrivacy />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/view-profile"
          element={
            <ProtectedRoute>
              <Slide9 />
            </ProtectedRoute>
          }
        />
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
        <Route
          exact
          path="/forgot-password-otp"
          element={<ForgotPasswordOtp />}
        />
      </Routes>
    </AppContext.Provider>
    // <Dashboard />
  );
}

export default App;
