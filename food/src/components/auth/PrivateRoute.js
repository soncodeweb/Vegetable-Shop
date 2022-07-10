import React, { Fragment } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authen/user/authContext";

function PrivateRoute({ children }) {
  let { user } = useAuth();
  let navigate = useNavigate();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
    // return <HomePage props={true}></HomePage>;
  }
  return children;
}

export default PrivateRoute;
