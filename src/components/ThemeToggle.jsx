import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [IsDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toogleTheme = () => {
    if (IsDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toogleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50",
        "p-3 rounded-full",
        "bg-background/70 backdrop-blur-md border border-border",
        "shadow-md hover:shadow-lg",
        "transition-all duration-300",
        "hover:scale-105",
        "focus:outline-hidden"
      )}
    >
      {IsDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 drop-shadow-sm" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 drop-shadow-sm" />
      )}
    </button>
  );
};
