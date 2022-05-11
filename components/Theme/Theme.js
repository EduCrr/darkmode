import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Theme = () => {
  const [darkTheme, setDarkTheme] = useState("");

  const handleToggle = () => {
    if (window.localStorage.getItem("theme") === "dark") {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
      setDarkTheme("light");
    } else if (
      window.localStorage.getItem("theme") === "light" ||
      !window.localStorage.getItem("theme")
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
      setDarkTheme("dark");
    }
  };

  return (
    <>
      <div>
        <button onClick={handleToggle}>mudar</button>
      </div>
    </>
  );
};
