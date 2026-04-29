export default function MyCrewSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold">내 크루</h2>

      <div className="scrollbar-none flex gap-4 overflow-x-auto pr-4 pb-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-card border-border min-w-[150px] cursor-pointer rounded-2xl border p-4 transition-all hover:shadow-md active:scale-[0.98]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--icon-bg)] shadow-inner" />

            <p className="mt-4 text-sm font-semibold">새벽 러너스</p>

            <p className="text-muted-foreground mt-1 text-xs">24명 참여</p>
          </div>
        ))}
      </div>
    </section>
  );
}
