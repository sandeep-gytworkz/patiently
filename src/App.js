import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Homepage from "./components/HomePage/HomePage";

import Participate from "./components/Participate/Participate";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/participate-now" element={<Participate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
