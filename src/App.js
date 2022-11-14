import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/HomePage/HomePage";

import Participate from "./components/Participate/Participate";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Card />} />
          <Route exact path="/participate-now" element={<PageOne />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BackgroundCard /> */}
      {/* <Card /> */}
      <Participate />
    </>
  );
}

export default App;
