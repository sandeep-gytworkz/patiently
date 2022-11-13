import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/HomePage/HomePage";
import BackgroundCard from "./UI/Card/BackgroundCard";
import Card from "./UI/Card/Card";
import Header from "./UI/Header/Header";


function App() {
  const [appState, setAppState] = useState(false);
  const onParticipation = (element) => {
    setAppState(element);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/" element={<Card />}/>
        </Routes>
      </BrowserRouter>
      {/* <BackgroundCard /> */}
      {/* <Card /> */}
    </>
  );
}

export default App;
