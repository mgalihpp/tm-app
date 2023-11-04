import React, { createContext, useState, ReactNode, useContext } from "react";
import themes from "./themes";

type Theme = any;

export const GlobalContext = createContext<Theme>(0);

export const GlobalUpdateContext = createContext<Function | undefined>(
  undefined
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<Theme>(0);
  const theme = themes[selected];

  const updateTheme = (newTheme: Theme) => {
    setSelected(newTheme);
  };

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={updateTheme}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
