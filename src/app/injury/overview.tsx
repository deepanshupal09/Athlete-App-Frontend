"use client";
import { useState, useEffect } from "react";
import { getCardsData } from "./fetch";
import { QuickCard } from "../analytics/_components/card";
import * as icons from "./icons";

type CardsDataType = {
  lastInjury: { value: string };
  recoveryStatus: { value: string };
  rehabProgress: { value: string };
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
      <QuickCard label="Last Injury" data={data.lastInjury} Icon={icons.Injury} />
      <QuickCard label="Recovery Status" data={data.recoveryStatus} Icon={icons.Healing} />
      <QuickCard label="Rehabilitation Progress" data={data.rehabProgress} Icon={icons.Rehab} />
    </div>
  );
}
