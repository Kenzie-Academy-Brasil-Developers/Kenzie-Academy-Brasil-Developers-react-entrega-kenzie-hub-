import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Dashboard } from "../../pages/Dashboard";
import { useState } from "react";

export const RouterMain = ({ setButton, setIsDashboard, user, setUser }) => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Login setButton={setButton} setUser={setUser} />}
      />
      <Route path="/register"  element={<Register setButton={setButton}/>} />
      <Route
        path="/dashboard"
        element={<Dashboard setIsDashboard={setIsDashboard} user={user} />}
      />
      <Route path="*" element={<Login setButton={setButton} setUser={setUser}/>} />
    </Routes>
  );
};
