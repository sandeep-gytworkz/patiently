import React, { useState } from "react";

import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import BackgroundCard from "./UI/Card/BackgroundCard";
import Card from "./UI/Card/Card";
function App() {
  const [appState, setAppState] = useState(false);
  const onParticipation = (element) => {
    setAppState(element);
  };
  return (
    <>
      {/* <HomePage /> */}
      <BackgroundCard />
      {/* <Card /> */}
    </>
  );
}

export default App;
