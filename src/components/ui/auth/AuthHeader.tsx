import AuthLogo from "./AuthLogo";

export default function AuthHeader() {
  return (
    <div className="flex flex-col items-center">
      <AuthLogo />

      <h1 className="mt-6 text-2xl font-bold">러닝 크루</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        함께 달리면 더 멀리 갈 수 있어요
      </p>
    </div>
  );
}
