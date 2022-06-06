import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const RequiredAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  const location = useLocation();
  console.log("auth");
  console.log(location);
  if (isAuth) {
    return children;
  } else {
    return (
      <Navigate
        to="/Login"
        replace={true}
        state={{ from: location.pathname }}
      />
    );
  }
};

export default RequiredAuth;
