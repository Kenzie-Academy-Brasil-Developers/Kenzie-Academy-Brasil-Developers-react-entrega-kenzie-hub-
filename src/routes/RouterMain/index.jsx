import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";
import { PrivateRoutes } from "../PrivateRoutes";
import { TechProvider } from "../../pages/provides/TechContext";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        ></Route>
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
