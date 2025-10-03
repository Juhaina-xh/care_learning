"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  user: null,
  token: null,
  login: (user, token) => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoredAuth = () => {
      try {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken) setToken(storedToken);

        if (storedUser && storedUser !== "undefined") {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
          } catch (err) {
            console.error("Failed to parse stored user:", err);
            localStorage.removeItem("user");
          }
        }
      } catch (err) {
        console.error("Error loading auth from localStorage:", err);
      } finally {
        setLoading(false);
      }
    };

    loadStoredAuth();
  }, []);

  const login = (userData, tokenValue) => {
    setUser(userData);
    setToken(tokenValue);
    localStorage.setItem("token", tokenValue);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
