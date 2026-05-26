import { useAuthStore } from "../stores/authStore";

export const useUser = () => useAuthStore((state) => state.user);

export const useSession = () => useAuthStore((state) => state.session);

export const useSetAuth = () => useAuthStore((state) => state.setAuth);

export const useClearAuth = () => useAuthStore((state) => state.clearAuth);
