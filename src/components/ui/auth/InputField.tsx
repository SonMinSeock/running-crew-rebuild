import { Input } from "../input";

type Props = {
  icon: React.ElementType;
} & React.ComponentProps<typeof Input>;

export default function InputField({ icon: Icon, ...props }: Props) {
  return (
    <div className="bg-card border-border focus-within:border-primary focus-within:ring-primary/30 flex items-center gap-4 rounded-full border px-4 py-3 focus-within:ring-1">
      <Icon className="text-muted-foreground h-5 w-5" />

      <Input
        {...props}
        className="flex-1 !border-none !bg-transparent !p-0 !shadow-none focus-visible:ring-0 focus-visible:outline-none"
      />
    </div>
  );
}
