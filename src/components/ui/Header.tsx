import { Sun, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <button className="border-border bg-card flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border">
        <User className="text-foreground h-5 w-5" />
      </button>

      <div className="flex items-center gap-3">
        <button className="border-border bg-card flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border">
          <Sun className="text-foreground h-5 w-5" />
        </button>

        <button className="border-border bg-card relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border">
          <Bell className="text-foreground h-5 w-5" />
          <span className="bg-primary absolute top-2 right-2 h-2 w-2 rounded-full" />
        </button>
      </div>
    </header>
  );
}
