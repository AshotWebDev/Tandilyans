import { createContext, useState, useEffect, ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  mode: Theme;
  setMode: (mode: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemProvider({ children }: { children: ReactNode }) {
  const initialMode =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || "system"
      : "system";

  const [mode, setMode] = useState<Theme>(initialMode as Theme);

  useEffect(() => {
    const handleThemeChange = async () => {
      const actulaMode =
        mode === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
          : mode;

      document.documentElement.classList.remove(
        actulaMode === "dark" ? "light" : "dark"
      );

      document.documentElement.classList.add(actulaMode);

      window.localStorage.setItem("theme", actulaMode);
    };

    handleThemeChange();
  }, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const systemModeChange = (e: MediaQueryListEvent) => {
      if (mode === "system") {
        setMode(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", systemModeChange);

    return () => {
      mediaQuery.removeEventListener("change", systemModeChange);
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemProvider };