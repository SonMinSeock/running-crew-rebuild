import { Input } from "../input";

type Props = {
  icon: React.ElementType;
} & React.ComponentProps<typeof Input>;

export default function InputField({ icon: Icon, ...props }: Props) {
  return (
    <div className="bg-card border-border flex items-center gap-4 rounded-full border px-4 py-3">
      <Icon className="text-muted-foreground h-5 w-5" />
      <Input
        {...props}
        className="border-none bg-transparent p-0 focus-visible:ring-0"
      />
    </div>
  );
}
