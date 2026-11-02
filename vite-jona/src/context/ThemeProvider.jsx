import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const COLORS = { light: "#ffffff", dark: "#151515" };

export function ThemeProvider({ children }) {
  // El script de index.html ya aplicó el tema guardado o el del sistema antes de pintar
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", COLORS[theme]);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sin almacenamiento disponible el tema dura solo esta visita
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
