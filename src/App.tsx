import { useEffect } from "react";
import RootRoute from "./RootRoute";
import { initAuth } from "./lib/initAuth";

function App() {
  useEffect(() => {
    initAuth();
  }, []);

  const stored = localStorage.getItem("theme-storage");

  if (stored) {
    const { state } = JSON.parse(stored);

    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (state.theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      root.classList.add(isDark ? "dark" : "light");
    } else {
      root.classList.add(state.theme);
    }
  }
  return (
    <>
      <RootRoute />
    </>
  );
}

export default App;
