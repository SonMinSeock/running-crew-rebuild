import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function GlobalLayout() {
  return (
    <div className="bg-background mx-auto min-h-screen max-w-md">
      {/* 상단 Header */}
      <Header />

      {/* 페이지 콘텐츠 */}
      <main className="px-4 pb-24">
        <Outlet />
      </main>

      {/* 하단 네비 */}
    </div>
  );
}
