import { useMutation } from "@tanstack/react-query";
import { loginWithGoogle } from "../api/auth/authApi";

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: loginWithGoogle,
  });
};
