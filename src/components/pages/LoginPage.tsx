import { useState } from "react";

import { Lock, Mail } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

import GoogleIcon from "../ui/icons/GoogleIcon";

import AuthHeader from "../ui/auth/AuthHeader";
import InputField from "../ui/auth/InputField";
import SocialButton from "../ui/auth/SocialButton";
import { useGoogleLogin } from "../../hooks/useGoogleLogin";
import { useLogin } from "../../hooks/useLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate, isPending } = useLogin();

  const { mutate: googleLogin } = useGoogleLogin();

  const handleLogin = () => {
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate("/");
        },

        onError: (error) => {
          console.error(error);

          alert(error.message);
        },
      },
    );
  };

  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <AuthHeader />

      <div className="space-y-4">
        <InputField
          placeholder="이메일"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type="password"
          placeholder="비밀번호"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        onClick={handleLogin}
        disabled={isPending}
        className="mt-6 h-12 w-full cursor-pointer rounded-full text-sm font-semibold"
      >
        {isPending ? "로그인 중..." : "로그인"}
      </Button>

      <p className="text-muted-foreground text-sm">빠르게 시작하기</p>

      <SocialButton
        icon={<GoogleIcon />}
        label="Google로 시작하기"
        onClick={() => googleLogin()}
      />

      <p className="text-muted-foreground text-sm">
        계정이 없으신가요?{" "}
        <span className="text-primary cursor-pointer font-medium">
          회원가입
        </span>
      </p>
    </div>
  );
}
