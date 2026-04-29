import { Play } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

export default function TodayRunCard() {
  return (
    <Card className="bg-card mt-2 w-full rounded-3xl p-7 shadow-sm">
      <p className="text-muted-foreground text-sm">오늘의 러닝</p>

      <div className="mt-5 flex items-end gap-10">
        <div>
          <p className="text-4xl font-bold tracking-tight">5.2</p>
          <p className="text-muted-foreground text-sm">km</p>
        </div>

        <div>
          <p className="text-4xl font-bold tracking-tight">32:15</p>
          <p className="text-muted-foreground text-sm">분</p>
        </div>
      </div>

      <Button className="bg-primary text-primary-foreground mt-6 h-12 w-full rounded-full text-base font-semibold">
        <Play className="mr-2 h-4 w-4" />
        러닝 시작
      </Button>
    </Card>
  );
}
