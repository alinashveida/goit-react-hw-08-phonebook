import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelector from "redux/auth/auth-selector";

export default function PubliceRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
