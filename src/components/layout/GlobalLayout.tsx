import { Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import Nav from "../ui/Nav";

export default function GlobalLayout() {
  const { pathname } = useLocation();

  const getActive = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/running")) return "running";
    if (pathname.startsWith("/feed")) return "feed";
    if (pathname.startsWith("/profile")) return "profile";

    return "home";
  };

  return (
    <div className="bg-background flex min-h-screen justify-center">
      <div className="w-full max-w-md">
        <Header />

        <main className="px-4 pb-24">
          <Outlet />
        </main>

        <nav className="border-border bg-background fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t px-6 py-3">
          <Nav active={getActive()} />
        </nav>
      </div>
    </div>
  );
}
