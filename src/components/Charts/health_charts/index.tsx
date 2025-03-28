"use client";

import { useEffect, useState } from "react";
import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { AthleteTrainingChart } from "./chart";
import { getRunningTrainingData } from "@/services/charts.services4";

type TrainingDataType = {
  totalSteps: { x: string; y: number }[];
  distanceCovered: { x: string; y: number }[];
  maxSpeed: { x: string; y: number }[];
};

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export function WeeklyTraining({ className, timeFrame }: PropsType) {
  const [data, setData] = useState<TrainingDataType>({
    totalSteps: [],
    distanceCovered: [],
    maxSpeed: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const trainingData: TrainingDataType = await getRunningTrainingData(timeFrame);
        setData(trainingData);
      } catch (error) {
        console.error("Error fetching training data:", error);
      } finally {
        setLoading(false);
      }
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
          Running Data {timeFrame || " of this week"}
        </h2>

        <PeriodPicker
          items={["this week", "last week"]}
          defaultValue={timeFrame || "this week"}
          sectionKey="athlete-training"
        />
      </div>

      {loading ? <p>Loading data...</p> : <AthleteTrainingChart data={data} />}
    </div>
  );
}