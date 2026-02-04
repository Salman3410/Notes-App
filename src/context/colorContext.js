import { createContext } from "react";

const ColorContext = createContext();

const lightTheme = {
  mode: "light",

  background: "#F8FAFC",
  card: "#FFFFFF",
  border: "#E5E7EB",

  textPrimary: "#0F172A",
  textSecondary: "#64748B",

  accent: "#2563EB",
  success: "#22C55E",

  iconActive: "#2563EB",
  iconInactive: "#94A3B8",
};

export const ColorProvider = ({ children }) => {
  return (
    <ColorContext.Provider value={{ theme: lightTheme }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
