import { Outlet } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme, useToggleTheme } from "../../hooks/useTheme";

export default function AuthLayout() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <div className="bg-background mx-auto min-h-screen max-w-md px-4 py-6">
      <div className="flex justify-end">
        <button
          className="border-border bg-card flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="text-foreground h-5 w-5" />
          ) : (
            <Moon className="text-foreground h-5 w-5" />
          )}
        </button>
      </div>
      <main className="flex min-h-[80vh] flex-col items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
