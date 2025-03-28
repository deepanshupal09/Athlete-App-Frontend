"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getMenstrualCycleData } from "@/services/charts.services4";
import { DonutChart } from "./chart";
import { Diet } from "@/app/(home)/_components/icons";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export function MenstrualNutrition({ timeFrame = "monthly", className }: PropsType) {
  const [data, setData] = useState<{ name: string; amount: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getMenstrualCycleData(timeFrame);
      setData(result);
    }
    fetchData();
  }, [timeFrame]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 grid-rows-[auto_1fr] gap-9 rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className
      )}
    >
      {/* <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white inline-flex items-center gap-x-4">
          <Diet />
          <div>Menstrual Cycle Nutrition Breakdown</div>
        </h2>
      </div> */}

      <div className="grid place-items-center">
        {data.length > 0 ? <DonutChart data={data} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}
