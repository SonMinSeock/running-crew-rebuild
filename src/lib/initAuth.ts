import { useAuthStore } from "../stores/authStore";
import { supabase } from "./supabase";

export const initAuth = async () => {
  const setAuth = useAuthStore.getState().setAuth;
  const clearAuth = useAuthStore.getState().clearAuth;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    setAuth(session);
  }
  // 로그인 | 로그아웃 감지
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session) {
      // 로그인
      setAuth(session);
    } else {
      // 로그아웃
      clearAuth();
    }
  });
};
