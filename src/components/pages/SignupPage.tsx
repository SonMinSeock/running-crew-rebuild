import { Mail, Lock, User } from "lucide-react";
import GoogleIcon from "../ui/icons/GoogleIcon";
import AuthHeader from "../ui/auth/AuthHeader";
import { Button } from "../ui/button";
import SocialButton from "../ui/auth/SocialButton";
import InputField from "../ui/auth/InputField";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-sm space-y-6 text-center">
      <AuthHeader />

      <div className="space-y-4">
        <InputField placeholder="이름" icon={User} />
        <InputField placeholder="이메일" icon={Mail} />
        <InputField type="password" placeholder="비밀번호" icon={Lock} />
        <InputField type="password" placeholder="비밀번호 확인" icon={Lock} />
      </div>

      <Button className="mt-6 h-12 w-full rounded-full text-sm font-semibold transition-transform active:scale-95">
        회원가입
      </Button>

      <p className="text-muted-foreground text-sm">빠르게 시작하기</p>

      <SocialButton icon={<GoogleIcon />} label="Google로 시작하기" />

      <p className="text-muted-foreground text-sm">
        이미 계정이 있나요?{" "}
        <span className="text-primary cursor-pointer font-medium">로그인</span>
      </p>
    </div>
  );
}
