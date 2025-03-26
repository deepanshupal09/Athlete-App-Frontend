"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import PredictionChart from "@/components/Charts/analytics_charts/prediction_chart";
import { OverviewCardsGroup } from "./_components";
import { AthleteTraining } from "@/components/Charts/analytics_charts";
import { AnalyticsCard } from "./_components/overview";

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Analytics" />

      <div className="">
        <OverviewCardsGroup />
      </div>

      <div className="my-4 rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-9">
        <PredictionChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-6 2xl:gap-7.5 mt-5 py-3">
        <div className="col-span-12 lg:col-span-7">
          <AthleteTraining />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <AnalyticsCard />
        </div>
      </div>
    </>
  );
}
