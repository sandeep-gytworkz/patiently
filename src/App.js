import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AdminBackgroundCard from "./components/Admin-UI/AdminBackgroundCard";
import About from "./components/HomePage/About";
import DataSecurity from "./components/HomePage/DataSecurity";
import Homepage from "./components/HomePage/HomePage";
import LoginPage from "./components/HomePage/LoginPage";

import Participate from "./components/Participate/Participate";
import Slide9 from "./components/Participate/Slides/Slide9";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/participate-now" element={<Participate />} />
          <Route exact path="/data-security" element={<DataSecurity />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/view-profile" element={<Slide9 />} />
        </Routes>
      </BrowserRouter>

      {/* <AdminBackgroundCard /> */}
    </>
  );
}

export default App;
