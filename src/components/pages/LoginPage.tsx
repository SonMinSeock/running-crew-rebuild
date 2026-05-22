import { Lock, Mail } from "lucide-react";
import { Button } from "../ui/button";
import GoogleIcon from "../ui/icons/GoogleIcon";
import AuthHeader from "../ui/auth/AuthHeader";
import InputField from "../ui/auth/InputField";
import SocialButton from "../ui/auth/SocialButton";

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <AuthHeader />

      <div className="space-y-4">
        <InputField placeholder="이메일" icon={Mail} />
        <InputField type="password" placeholder="비밀번호" icon={Lock} />
      </div>

      <Button className="mt-6 h-12 w-full cursor-pointer rounded-full text-sm font-semibold">
        로그인
      </Button>

      <p className="text-muted-foreground text-sm">빠르게 시작하기</p>

      <SocialButton icon={<GoogleIcon />} label="Google로 시작하기" />

      <p className="text-muted-foreground text-sm">
        계정이 없으신가요?{" "}
        <span className="text-primary cursor-pointer font-medium">
          회원가입
        </span>
      </p>
    </div>
  );
}
