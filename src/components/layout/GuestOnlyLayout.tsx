import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthLoaded, useUser } from "../../hooks/useAuth";

export default function GuestOnlyLayout() {
  const isLoaded = useIsAuthLoaded();
  const user = useUser();

  if (!isLoaded) return null;
  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
}
