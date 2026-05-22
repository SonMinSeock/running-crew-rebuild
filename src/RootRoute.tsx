import { Navigate, Route, Routes } from "react-router-dom";
import GuestOnlyLayout from "./components/layout/GuestOnlyLayout";
import MemberOnlyLayout from "./components/layout/MemberOnlyLayout";
import GlobalLayout from "./components/layout/GlobalLayout";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import AuthLayout from "./components/layout/AuthLayout";
import SignUpPage from "./components/pages/SignUpPage";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<GuestOnlyLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Route>

      <Route element={<GlobalLayout />}>
        <Route element={<MemberOnlyLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
