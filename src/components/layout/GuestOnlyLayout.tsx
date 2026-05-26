import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useAuth";

export default function GuestOnlyLayout() {
  const user = useUser();

  if (user) {
    return <Navigate to={"/"} replace />;
  }
  return <Outlet />;
}
