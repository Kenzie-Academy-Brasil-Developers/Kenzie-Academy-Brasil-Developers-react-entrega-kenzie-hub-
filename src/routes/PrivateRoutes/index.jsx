import { Navigate, Outlet } from "react-router-dom";
import { ExampleContext } from "../../pages/provides/UserContext.jsx";
import { useContext } from "react";

export const PrivateRoutes = () => {
  const { user } = useContext(ExampleContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};
