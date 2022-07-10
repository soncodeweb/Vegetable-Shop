import { createContext, useContext, useMemo, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useLocalStorage("user", null);

  // const [user, setUser] = useState(null);
  //   function signIn
  const navigate = useNavigate();
  const login = (user) => {
    setUser(user);
    navigate("/");
  };
  const logout = () => {
    const callApi = async () => {
      const result = await axios({
        method: "POST",
        url: "http://localhost/food_backEnd/admin/authen/logout.php",
        data: {},
      }).catch((error) => console.log(error));
      console.log(result?.data);
    };
    setUser(null);
    navigate("/");
    callApi();
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  if (typeof context === "undefined") throw new Error("useAuth must be used within a AuthProvider!");

  return context;
}

export { AuthProvider, useAuth };
