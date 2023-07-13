import React, { useContext } from "react";
import { Route, Navigate, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children}) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <>{children}</> : <Navigate to="/"/>;
  
}

export default PrivateRoute;
