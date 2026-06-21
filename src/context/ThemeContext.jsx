import React, { useEffect } from "react";

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return children;
};
