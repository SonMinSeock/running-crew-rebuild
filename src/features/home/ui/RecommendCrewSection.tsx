export default function RecommendCrewSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-base font-semibold">추천 크루</h2>

      <div className="space-y-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-card border-border flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-5 transition-all hover:shadow-md active:scale-[0.98]"
          >
            {/* 왼쪽 */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--icon-bg)]" />

              <div>
                <p className="text-[15px] font-semibold">강남 러닝클럽</p>

                <p className="text-muted-foreground mt-1 text-xs">
                  45명 · 5km ·{" "}
                  <span className="text-primary font-medium">초급</span>
                </p>
              </div>
            </div>

            {/* 버튼 */}
            <button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-semibold transition-all hover:opacity-90 active:scale-95">
              참여
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
