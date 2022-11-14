import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PageOne from "./components/BasicInfo/PageOne";
import PageThree from "./components/BasicInfo/PageThree";

import Homepage from "./components/HomePage/HomePage";
import Card from "./UI/Card/Card";
import Participate from "./components/Participate/Participate";
// import BackgroundCard from "./UI/Card/BackgroundCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Card />} />
          <Route exact path="/participate-now" element={<Participate />} />
        </Routes>
      </BrowserRouter>
      {/* <BackgroundCard /> */}
      {/* <Card /> */}
    </>
  );
}

export default App;
