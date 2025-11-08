// src/components/AuthCheck.js
import React from "react";
import { Navigate } from "react-router-dom";

// Helper: validate token
function isTokenValid(token) {
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expiry = payload.exp * 1000; // JWT exp in ms
    return Date.now() < expiry;
  } catch (error) {
    console.error("Token validation error:", error);
    return false;
  }
}

// Component: wrapper for protected routes
export const AuthCheck = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!isTokenValid(token)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Utility: quick check for login (e.g., in navbar/sidebar)
export const checkLogin = () => {
  const token = localStorage.getItem("token");
  if(isTokenValid(token)){
    return true;
  }
  return false;
};  


// profile from api 
export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!isTokenValid(token)) {
    return null; // still returns a Promise (because function is async)
  }

  try {
    const res = await fetch("http://localhost:5050/api/users/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Profile fetch failed:", res.status);
      return null;
    }

    const data = await res.json();
    if(data.success && data.user.status === "active"){
      return data.user || null; // adapt to your API response
    }
    return res.status(401).json({ success: false, message: "Unauthorized" });
  } catch (err) {
    console.error("Error fetching profile:", err);
    return null;
  }
};


