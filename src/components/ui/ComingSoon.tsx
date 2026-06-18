type ComingSoonProps = {
  title: string;
  description?: string;
};

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="border-border bg-card space-y-3 rounded-2xl border border-dashed px-5 py-8 text-center">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-muted-foreground text-sm">
        {description ?? "준비중입니다."}
      </p>
    </div>
  );
}
