import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    return token && storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(true); // Start as true to prevent premature rendering

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
   

    // Token exists, verify it
    fetch(`${apiUrl}/api/verify-token`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Token Verified:", data);
        if (data.user) {
          setUser(data.user); // Set user data
        } else {
          console.warn("Invalid token, logging out.");
          logout();
        }
      })
      .catch((error) => {
        console.error("Verification failed:", error);
        logout();
      })
      .finally(() => {
        setLoading(false); // Ensure loading stops after verification
      });
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Ensure user data is also removed
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
