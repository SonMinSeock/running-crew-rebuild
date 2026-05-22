import { Lock, Mail, Activity } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleIcon from "../ui/icons/GoogleIcon";

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm text-center">
      {/* 로고 */}
      <div className="bg-primary mx-auto flex h-14 w-14 items-center justify-center rounded-full">
        <Activity className="h-6 w-6 text-white" />
      </div>

      <h1 className="mt-6 text-2xl font-bold">러닝 크루</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        함께 달리면 더 멀리 갈 수 있어요
      </p>

      {/* 입력폼 */}
      <div className="mt-8 space-y-4">
        {/* 이메일 */}
        <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
          <Mail className="text-muted-foreground h-5 w-5" />
          <Input
            placeholder="이메일"
            className="border-none bg-transparent p-0 focus-visible:ring-0"
          />
        </div>

        {/* 비밀번호 */}
        <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
          <Lock className="text-muted-foreground h-5 w-5" />
          <Input
            type="password"
            placeholder="비밀번호"
            className="border-none bg-transparent p-0 focus-visible:ring-0"
          />
        </div>
      </div>

      {/* 로그인 버튼 */}
      <Button className="bg-primary text-primary-foreground mt-6 h-12 w-full rounded-full text-sm font-semibold">
        로그인
      </Button>

      {/* 빠르게 시작하기 */}
      <p className="text-muted-foreground mt-6 text-sm">빠르게 시작하기</p>

      {/* Google 버튼 */}
      <button className="bg-card border-border mt-4 flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-medium">
        <GoogleIcon />
        <span className="leading-none">Google로 시작하기</span>
      </button>

      {/* 회원가입 */}
      <p className="text-muted-foreground mt-6 text-sm">
        계정이 없으신가요?{" "}
        <span className="text-primary cursor-pointer font-medium">
          회원가입
        </span>
      </p>
    </div>
  );
}
