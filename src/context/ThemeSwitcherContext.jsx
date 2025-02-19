import { createContext, useState } from "react";

const ThemeSwitcherContext = createContext();

const ThemeSwitcherContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("Light");

  const handleSetTheme = () => {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  };

  return (
    <ThemeSwitcherContext.Provider value={{ theme, setTheme, handleSetTheme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

export { ThemeSwitcherContext, ThemeSwitcherContextProvider };
