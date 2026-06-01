import type { User, Session } from "@supabase/supabase-js";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthStore = {
  isLoaded: boolean;
  user: User | null;
  session: Session | null;
  setAuth: (session: Session | null) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  devtools((set) => ({
    isLoaded: false,
    user: null,
    session: null,

    setAuth: (session) =>
      set({
        isLoaded: true,
        session,
        user: session?.user ?? null,
      }),

    clearAuth: () =>
      set({
        isLoaded: true,
        session: null,
        user: null,
      }),
  })),
);
