import axios from "axios";
import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useContext,
  useEffect,
} from "react";
import { AuthValuesTypes, IAuth } from "./auth.types";
import { ADMINS } from "../../helpers/consts";
import { useNavigate } from "react-router-dom";
import { notify } from "../../components/alerts/Toastify";

export const authContext = createContext<AuthValuesTypes | null>(null);

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const API = "http://34.173.115.25/api/v1";

const AuthContextProvider = ({ children }: { children: ReactNode } & IAuth) => {
  const [currentUser, setCurrentUser] = useState<string | boolean>(false);
  const [error, setError] = useState<string | boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleRegister(
    formData: any,
    navigate: (path: string) => void
  ) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      navigate("/");
      console.log(res, "register response");
    } catch (err: any) {
      setError(err.response?.data?.detail || "An error occurred");
      notify(err.code.split("/")[1], "error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(
    formData: any,
    email: string,
    navigate: (path: string) => void
  ) {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.getItem("email");
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      checkAuth()
      console.log(res);
      navigate("/");
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.detail || "An error occurred");
      notify(err.code.split("/")[1], "error");
    }
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens") || "{}");
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/account/token/refresh/`,
        {
          refresh: tokens.refresh,
        },
        config
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem("email") || "";
      setCurrentUser(email);
    } catch (err: any) {
      console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    try {
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      setCurrentUser(false);
      navigate("/");
      console.log("logout");
    } catch (e: any) {
      notify(e.code.split("/")[1], "error");
    }
  }

  function isAdmin() {
    let user = localStorage.getItem("email")
    if (!user) {
      return false;
    }
    return ADMINS.includes(user);
  }

  const contextValue: AuthValuesTypes = {
    currentUser,
    isAdmin,
    error,
    loading,
    setError: setError as Dispatch<SetStateAction<string | boolean>>,
    handleRegister,
    handleLogin,
    checkAuth,
    handleLogout,
    setCurrentUser,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
