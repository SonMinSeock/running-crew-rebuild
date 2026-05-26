import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth/authApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
