import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelector from "redux/auth/auth-selector";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login"></Redirect>}
    </Route>
  );
}
