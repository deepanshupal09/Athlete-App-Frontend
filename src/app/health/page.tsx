"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Suspense } from "react";
import { HealthOverviewCardsGroup } from "./overview";
import { WeeklyTraining } from "@/components/Charts/health_charts";
import { MenstrualNutrition } from "@/components/menstruation_pie";
import VO2HeartRateChart from "@/components/Charts/health_charts/vo2chart";
import { AIHelpTable } from "@/components/Charts/health_charts/table";

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Health" />
      <div className="">
        <HealthOverviewCardsGroup />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-6 2xl:gap-7.5 mt-5 py-3">
        <div className="col-span-12 lg:col-span-7">
          <Suspense fallback={<div>Loading chart...</div>}>
            <WeeklyTraining />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Suspense fallback={<div>Loading pie chart...</div>}>
            <MenstrualNutrition />
          </Suspense>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-6 2xl:gap-7.5 mt-5 py-3">
        <div className="col-span-12 lg:col-span-6">
          <Suspense fallback={<div>Loading table...</div>}>
            <AIHelpTable />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Suspense fallback={<div>Loading chart...</div>}>
            <VO2HeartRateChart />
          </Suspense>
        </div>
      </div>
    </>
  );
}
