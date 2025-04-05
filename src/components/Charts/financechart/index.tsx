"use client";

import { useEffect, useState } from "react";
import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { getMonthlyFinancialData } from "@/services/charts.services";
import { FinancialChart } from "./chart";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export function Finance({ className, timeFrame }: PropsType) {
  const [data, setData] = useState<{ income: { x: string; y: number }[]; expenses: { x: string; y: number }[] }>({
    income: [],
    expenses: [],
  });
  
  useEffect(() => {
    async function fetchData() {
      const result = await getMonthlyFinancialData(timeFrame);
      setData(result);
    }
    fetchData();
  }, [timeFrame]);
  

  return (
    <div
      className={cn(
        "rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Financial Analytics ({timeFrame || "This Month"})
        </h2>

        <PeriodPicker
          items={["This Month", "Last Month"]}
          defaultValue={timeFrame || "This Month"}
          sectionKey="finance"
        />
      </div>

      <FinancialChart data={data} />
    </div>
  );
}
