import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getProfile } from "./AuthCheck";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    getProfile()
      .then((user) => {
        if (!mounted) return;

        if (user) {
          setProfile(user);
        } else if (localStorage.getItem("token")) {
          // ❌ No user → clear token + redirect (only if not already on /login)
          localStorage.removeItem("token");
          if (location.pathname !== "/login") {
            alert("User must login first, user session expired");
            navigate("/login", { replace: true });
          }
        }
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [navigate, location.pathname]);

  return (
    <AuthContext.Provider value={{ profile, setProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
