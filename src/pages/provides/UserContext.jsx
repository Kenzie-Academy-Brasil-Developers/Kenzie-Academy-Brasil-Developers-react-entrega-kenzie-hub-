import React, { createContext, useEffect, useState } from "react";
import { userApi } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const ExampleContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
 

  const navigate = useNavigate();
  const pathname = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const loadUser = async () => {
      setLoading(true);
      try {
        const { data } = await userApi.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(pathname);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@TOKEN");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      loadUser();
    }
  }, []);


  return (
    <ExampleContext.Provider value={{ user, setUser, loading }}>
      {children}
    </ExampleContext.Provider>
  );
};
