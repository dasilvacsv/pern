import { createContext, useContext, useState, useEffect } from "react";
import Cookie from "js-cookie";
import axios from "../api/axios";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (data) => {
    try {
      const res = await axios.post("/signup", data);
      setUser(res.data);
      setIsAuth(true);
      return null; // Devuelve null en caso de éxito
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        setErrors(error.response.data);
      } else {
        setErrors([error.response.data.message]);
      }
      return false; // Devuelve false en caso de error
    }
  };
  const signin = async (data) => {
    try {
      const res = await axios.post("/signin", data);
      console.log(res.data);
      setUser(res.data);
      setIsAuth(true);

      return res.data;
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signout = async () => {
    await axios.post("/logout");
    setUser(null);
    setIsAuth(false);
  };

  useEffect(() => {
    setLoading(true);
    if (Cookie.get("token"));
    axios
      .get("/profile")
      .then((res) => {
        setUser(res.data);
        setIsAuth(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsAuth(false);
        setUser(null);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (errors) {
      const timeout = setTimeout(() => {
        setErrors(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        errors,
        signup,
        signin,
        signout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
