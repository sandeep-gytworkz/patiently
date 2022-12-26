import React, { createContext, useEffect, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "animate.css";
import AboutUs from "./pages/About/About";
import DataPrivacy from "./pages/DataPrivacy/DataPrivacy";
import Homepage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";

import Participate from "./pages/Participate/Participate";
import Signup from "./pages/SignUp/Signup";
import Slide9 from "./pages/Profile/UserProfile";

import VerifyOtp from "./pages/Login/VerifyOtp/VerifyOtp";
import ResetPassword from "./pages/Login/ResetPassword/ResetPassword";
import ForgotPasswordOtp from "./pages/Login/ForgotPassword/ForgotPasswordOtp";
import ContactUs from "./pages/ContactUs/ContactUs";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import { reducer } from "./Redux/Reducers";
import { initialState } from "./Redux/States";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Admin/AdminDashboard/Dashboard";
import Records from "./pages/Admin/Records/Records";
import ParticipantProfile from "./pages/Admin/Records/ParticipantProfile/ParticipantProfile";
import Participants from "./pages/Admin/Participants/Participants";
import AccountManagement from "./pages/Admin/AccountManagement/AccountManagement";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";

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
