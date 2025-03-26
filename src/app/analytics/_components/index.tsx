"use client";
import { useState, useEffect } from "react";
import { getCardsData } from "../fetch";
import { QuickCard } from "./card";
import * as icons from "../_components/icons";

type CardsDataType = {
  wearableDevice: { value: string };
  aiInsights: { value: string };
  motionAnalysis: { value: string };
};

export function OverviewCardsGroup() {
  const [data, setData] = useState<CardsDataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getCardsData();
      setData(result); 
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading || !data) return <p>Loading...</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      <QuickCard label="Wearable Device" data={data.wearableDevice} Icon={icons.Watch} />
      <QuickCard label="Personalized Ai-Insight" data={data.aiInsights} Icon={icons.AI_icon} />
      <QuickCard label="Last Activity" data={data.motionAnalysis} Icon={icons.Steps} />
    </div>
  );
}
