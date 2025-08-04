import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const loadCredits = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/api/user/credits`, {
        headers: { token },
      });

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
      }
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (
      token &&
      token !== "null" &&
      token !== "undefined" &&
      token.length > 10
    ) {
      loadCredits();
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/image/generate-image`,
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        loadCredits();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCredits();
        if (data.creditBalance === 0) {
          navigate("/buy-credits");
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    token,
    setToken,
    credit,
    setCredit,
    loadCredits,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
