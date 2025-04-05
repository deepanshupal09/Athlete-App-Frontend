"use client";

import { useEffect, useState } from "react";
import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { getAchievementsData } from "@/services/charts.services";
import { AchievementsChart } from "./chart";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export function Achievements({ className, timeFrame }: PropsType) {
  const [data, setData] = useState<
    { year: string; local: number; district: number; junior: number; national: number }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAchievementsData();
      setData(result);
    }

    fetchData();
  }, [timeFrame]); 

  return (
    <div
      className={cn(
        "rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Achievements Over {timeFrame || "Last 10 Years"}
        </h2>

        <PeriodPicker
          items={["Last 5 Years", "Last 10 Years"]}
          defaultValue={timeFrame || "Last 10 Years"}
          sectionKey="achievements"
        />
      </div>

      {data.length > 0 ? <AchievementsChart data={data} /> : <p>Loading achievements...</p>}
    </div>
  );
}
