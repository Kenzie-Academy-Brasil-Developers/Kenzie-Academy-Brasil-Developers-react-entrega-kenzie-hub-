import React, { createContext, useState } from "react";

export const ExampleContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <ExampleContext.Provider value={{ user, setUser }}>
      {children}
    </ExampleContext.Provider>
  );
};
