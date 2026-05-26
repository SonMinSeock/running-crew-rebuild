import type { User, Session } from "@supabase/supabase-js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AuthStore = {
  user: User | null;
  session: Session | null;
  setAuth: (session: Session | null) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,

        session: null,

        setAuth: (session) =>
          set({
            session,
            user: session?.user ?? null,
          }),

        clearAuth: () =>
          set({
            session: null,
            user: null,
          }),
      }),
      {
        name: "auth-storage",
      },
    ),
  ),
);
