type Props = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function SocialButton({
  icon,
  label,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      type="button"
      className="bg-card border-border flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border py-3 text-sm font-medium"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}

      <span className="leading-none">{label}</span>
    </button>
  );
}
