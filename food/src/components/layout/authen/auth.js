import { useState, createContext, useContext, Children } from "react";

const AuthContext = createContext(null);
export const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };

  const logout = (user) => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{Children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("useAuth must be used within a AuthProvider");
};
