import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../App";

function ProtectedRoute({ children }) {
  const appContext = useContext(AppContext);

  if (appContext.appState.login == false) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
