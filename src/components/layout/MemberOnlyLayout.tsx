import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useAuth";

export default function MemberOnlyLayout() {
  const user = useUser();

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}
