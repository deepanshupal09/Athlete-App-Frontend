"use client";
import { useState, useEffect } from "react";
import { getHealthData } from "./fetch";
import { QuickCard } from "../analytics/_components/card";
import * as icons from "./icons";

type HealthDataType = {
  heartRate: { value: string };
  sleepHours: { value: string };
  height: { value: string };
  weight: { value: string };
};

export function HealthOverviewCardsGroup() {
  const [data, setData] = useState<HealthDataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getHealthData();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading || !data) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <QuickCard label="Current Heart Rate" data={data.heartRate} Icon={icons.Heart} />
      <QuickCard label="Today's Sleep Hours" data={data.sleepHours} Icon={icons.Sleep} />
      <QuickCard label="Height" data={data.height} Icon={icons.Height} />
      <QuickCard label="Weight" data={data.weight} Icon={icons.Weight} />
    </div>
  );
}