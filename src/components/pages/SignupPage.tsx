import { Mail, Lock, User } from "lucide-react";
import GoogleIcon from "../ui/icons/GoogleIcon";
import AuthHeader from "../ui/auth/AuthHeader";
import { Button } from "../ui/button";
import SocialButton from "../ui/auth/SocialButton";
import InputField from "../ui/auth/InputField";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import { useNavigate, Link } from "react-router-dom";
import { useGoogleLogin } from "../../hooks/useGoogleLogin";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate, isPending } = useSignup();
  const { mutate: googleLogin, isPending: isGooglePending } = useGoogleLogin();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");

      return;
    }

    mutate(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {
          navigate("/login");
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
          placeholder="이름"
          icon={User}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputField
          placeholder="이메일"
          icon={Mail}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          icon={Lock}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호 확인"
          icon={Lock}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <Button
        className="mt-6 h-12 w-full cursor-pointer rounded-full text-sm font-semibold transition-transform active:scale-95"
        onClick={handleSignup}
        disabled={isPending || isGooglePending}
      >
        {isPending ? "가입 중..." : "회원가입"}
      </Button>

      <p className="text-muted-foreground text-sm">빠르게 시작하기</p>

      <SocialButton
        icon={<GoogleIcon />}
        label="Google로 시작하기"
        onClick={() => googleLogin()}
        disabled={isGooglePending || isPending}
      />

      <p className="text-muted-foreground text-sm">
        이미 계정이 있나요?{" "}
        <Link
          className="text-primary cursor-pointer font-medium"
          to="/login"
          replace
        >
          로그인
        </Link>
      </p>
    </div>
  );
}
