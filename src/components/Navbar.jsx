import React from "react";
import "./Navbar.css";
import { FiPackage } from "react-icons/fi";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(TodosContext);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="container navbar">
      <div className="logo-container">
        <p className="logo">TO-DO App</p>
        <FiPackage size={24} color={"var(--fg)"} />
      </div>
      <div className="navbar-items">
        <div className="theme" onClick={() => handleTheme()}>
          {theme === "light" ? (
            <RiMoonLine size={24} color={"var(--secondary-fg)"} />
          ) : (
            <RiSunLine size={24} color={"var(--secondary-fg)"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
