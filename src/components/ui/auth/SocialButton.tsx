type Props = {
  icon: React.ReactNode;
  label: string;
};

export default function SocialButton({ icon, label }: Props) {
  return (
    <button className="bg-card border-border flex w-full items-center justify-center gap-3 rounded-full border py-3 text-sm font-medium">
      {icon}
      <span className="leading-none">{label}</span>
    </button>
  );
}
