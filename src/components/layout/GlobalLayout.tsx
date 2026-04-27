import { Outlet } from 'react-router-dom';

export default function GlobalLayout() {
  return (
    <div>
      <header>네비 영역</header>
      <Outlet />
    </div>
  );
}
