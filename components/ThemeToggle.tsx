"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  light: "light",
  dark: "dark",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<boolean | string>(themes.light);
  const themeHandler = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button className="btn btn-sm btn-outline " onClick={() => themeHandler()}>
      {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
}
