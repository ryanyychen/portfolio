"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

const modes = [
  { key: "light", label: "Light", icon: <Sun className="w-4 h-4" /> },
  { key: "system", label: "System", icon: <Monitor className="w-4 h-4" /> },
  { key: "dark", label: "Dark", icon: <Moon className="w-4 h-4" /> },
];

const ThemeSwitcher: React.FC = () => {
  const [selected, setSelected] = useState("system");

  const applyTheme = (theme: string) => {
    const element = document.getElementById("page");
    if (!element) return;

    if (theme === "dark") {
      element.classList.add("dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
    } else if (theme === "system") {
      const systemPreferDark = window.matchMedia("(prefers-color-scheme: dark").matches;
      if (systemPreferDark) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  };

  const handleSelect = (key: string) => {
    setSelected(key);
    applyTheme(key);
  };

  useEffect(() => {
    if (selected !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    applyTheme("system");

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [selected]);

  return (
    <div className="relative flex w-fit rounded-2xl bg-muted p-1 shadow-inner">
      {modes.map((mode) => (
        <button
          key={mode.key}
          onClick={() => handleSelect(mode.key)}
          className="relative z-10 flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors"
        >
          {mode.icon}
          <span className="hidden md:inline">{mode.label}</span>
          {selected === mode.key && (
            <motion.div
              layoutId="highlight"
              className="absolute inset-0 z-[-1] rounded-xl bg-accent/40 backdrop-blur-md shadow"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default ThemeSwitcher;