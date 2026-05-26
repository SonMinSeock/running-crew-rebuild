import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/auth/authApi";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};
