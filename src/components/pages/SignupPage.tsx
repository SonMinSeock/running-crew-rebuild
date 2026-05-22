import { Mail, Lock, User } from "lucide-react";
import AuthLogo from "../ui/AuthLogo";
import GoogleIcon from "../ui/icons/GoogleIcon";

export default function SignUpPage() {
  return (
    <div className="w-full space-y-6">
      {/* 로고 + 타이틀 */}
      <div className="flex flex-col items-center">
        <AuthLogo />

        <h1 className="mt-6 text-2xl font-bold">러닝 크루</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          함께 달리면 더 멀리 갈 수 있어요
        </p>
      </div>

      {/* 입력 영역 */}
      <div className="space-y-3">
        {/* 이름 */}
        <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
          <User className="text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="이름"
            className="text-foreground w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* 이메일 */}
        <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
          <Mail className="text-muted-foreground h-5 w-5" />
          <input
            type="email"
            placeholder="이메일"
            className="text-foreground w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* 비밀번호 */}
        <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
          <Lock className="text-muted-foreground h-5 w-5" />
          <input
            type="password"
            placeholder="비밀번호"
            className="text-foreground w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
          <Lock className="text-muted-foreground h-5 w-5" />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="text-foreground w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* 회원가입 버튼 */}
      <button className="bg-primary text-primary-foreground h-12 w-full rounded-full text-sm font-semibold">
        회원가입
      </button>

      {/* 빠르게 시작 */}
      <p className="text-muted-foreground text-center text-sm">
        빠르게 시작하기
      </p>

      {/* Google 로그인 */}
      <button className="bg-card border-border flex w-full items-center justify-center gap-3 rounded-full border py-3 text-sm font-medium">
        <GoogleIcon />
        <span className="leading-none">Google로 시작하기</span>
      </button>

      {/* 로그인 이동 */}
      <p className="text-muted-foreground text-center text-sm">
        이미 계정이 있나요?{" "}
        <span className="text-primary cursor-pointer font-semibold">
          로그인
        </span>
      </p>
    </div>
  );
}
