"use client";

import { useEffect, useState } from "react";
import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { AthleteTrainingChart } from "./chart";
import { getWeeksTrainingData } from "@/services/charts.services3";

type TrainingDataType = {
  coreExercises: { x: string; y: number }[];
  newTrainings: { x: string; y: number }[];
  rest: { x: string; y: number }[];
};

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export function AthleteTraining({ className, timeFrame }: PropsType) {
  const [data, setData] = useState<TrainingDataType>({
    coreExercises: [],
    newTrainings: [],
    rest: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const trainingData: TrainingDataType = await getWeeksTrainingData(timeFrame);
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
          Athlete Training {timeFrame || "this week"}
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
