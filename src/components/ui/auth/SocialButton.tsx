type Props = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export default function SocialButton({ icon, label, onClick }: Props) {
  return (
    <button
      className="bg-card border-border flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border py-3 text-sm font-medium"
      onClick={onClick}
    >
      {icon}

      <span className="leading-none">{label}</span>
    </button>
  );
}
