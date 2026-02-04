import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "Salman",
    lastName: "Saeed",
    username: "salman123",
    image: null,
  });

  const updateProfile = (updates) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
