import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  if (!auth) {
    Navigate("/login");
  }
  return children;
};

export default PrivateRoute;
