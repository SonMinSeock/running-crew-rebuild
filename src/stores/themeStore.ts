import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set, get) => ({
        theme: "light",

        setTheme: (theme) => {
          const root = document.documentElement;

          root.classList.remove("light", "dark");

          if (theme === "system") {
            const isDark = window.matchMedia(
              "(prefers-color-scheme: dark)",
            ).matches;

            root.classList.add(isDark ? "dark" : "light");
          } else {
            root.classList.add(theme);
          }

          set({ theme });
        },

        toggleTheme: () => {
          const current = get().theme;
          const next = current === "light" ? "dark" : "light";
          get().setTheme(next);
        },
      }),
      {
        name: "theme-storage",
      },
    ),
  ),
);
