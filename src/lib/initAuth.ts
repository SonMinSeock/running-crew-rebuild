import { useAuthStore } from "../stores/authStore";
import { supabase } from "./supabase";

export const initAuth = async () => {
  const setAuth = useAuthStore.getState().setAuth;
  const clearAuth = useAuthStore.getState().clearAuth;

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    if (session) setAuth(session);
    else clearAuth();
  });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) clearAuth();
  else setAuth(session);

  return () => subscription.unsubscribe();
};
