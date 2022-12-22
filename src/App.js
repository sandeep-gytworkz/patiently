import React, { createContext, useEffect, useReducer } from "react";
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
import Records from "./components/Admin-UI/Records";
import ParticipantProfile from "./components/Admin-UI/ParticipantProfile";
import Participants from "./components/Admin-UI/Participants";
import AccountManagement from "./components/Admin-UI/AccountManagement";
import "./App.css";
import AdminLogin from "./components/Admin-UI/AdminLogin";

export const AppContext = createContext();
// export const DashboardContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //? Removing logs in production

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      return;
    }

    const noop = () => {};
    [
      "assert",
      "clear",
      "count",
      "debug",
      "dir",
      "dirxml",
      "error",
      "exception",
      "group",
      "groupCollapsed",
      "groupEnd",
      "info",
      "log",
      "markTimeline",
      "profile",
      "profileEnd",
      "table",
      "time",
      "timeEnd",
      "timeline",
      "timelineEnd",
      "timeStamp",
      "trace",
      "warn",
    ].forEach((method) => {
      window.console[method] = noop;
    });
  });

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
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/records" element={<Records />} />
        <Route
          exact
          path="/participant-profile"
          element={<ParticipantProfile />}
        />
        <Route exact path="/participants" element={<Participants />} />
        <Route
          exact
          path="/account-management"
          element={<AccountManagement />}
        />
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
  );
}

export default App;
