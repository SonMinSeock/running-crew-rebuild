import { Home, Activity, MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  active: "home" | "running" | "feed" | "profile";
};

export default function Nav({ active }: Props) {
  const navigate = useNavigate();

  const itemClass = (key: string) =>
    `flex flex-col items-center gap-1 transition-colors ${
      active === key
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div className="flex justify-between">
      <button className={itemClass("home")} onClick={() => navigate("/")}>
        <Home className="h-6 w-6" />
        <span className="text-xs font-medium">홈</span>
      </button>

      <button
        className={itemClass("running")}
        onClick={() => navigate("/running")}
      >
        <Activity className="h-6 w-6" />
        <span className="text-xs font-medium">러닝</span>
      </button>

      <button className={itemClass("feed")} onClick={() => navigate("/feed")}>
        <MessageCircle className="h-6 w-6" />
        <span className="text-xs font-medium">피드</span>
      </button>

      <button
        className={itemClass("profile")}
        onClick={() => navigate("/profile")}
      >
        <User className="h-6 w-6" />
        <span className="text-xs font-medium">프로필</span>
      </button>
    </div>
  );
}
