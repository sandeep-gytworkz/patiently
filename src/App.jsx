import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AdminNavBar from "./components/Admin-UI/common-components/AdminNavBar";
import Dashboard from "./components/Admin-UI/Dashboard";
import About from "./components/HomePage/About";
import DataSecurity from "./components/HomePage/DataSecurity";
import Homepage from "./components/HomePage/HomePage";
import LoginPage from "./components/HomePage/LoginPage";

import Participate from "./components/Participate/Participate";
import Slide9 from "./components/Participate/Slides/Slide9";
import { createContext, useReducer, useEffect } from "react";
import { initialState } from "./Redux/States";
import { reducer } from "./Redux/Reducers";
import ProtectedRoute from "./components/ProtectedRoute";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state.login);
  }, [state]);

  return (
    <AppContext.Provider value={{ appState: state, appDispatch: dispatch }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route exact path="/participate-now" element={<Participate />} />
          <Route
            exact
            path="/data-security"
            element={
              <ProtectedRoute>
                <DataSecurity />
              </ProtectedRoute>
            }
          />
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
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
