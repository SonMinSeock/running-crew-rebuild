import { Navigate, Route, Routes } from 'react-router-dom';
import GuestOnlyLayout from './components/layout/GuestOnlyLayout';
import MemberOnlyLayout from './components/layout/MemberOnlyLayout';
import GlobalLayout from './components/layout/GlobalLayout';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import HomePage from './components/pages/HomePage';

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        {/* 로그인 전 */}
        <Route element={<GuestOnlyLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* 로그인 후 */}
        <Route element={<MemberOnlyLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
