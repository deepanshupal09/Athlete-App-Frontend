"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, Suspense } from "react";
import { OverviewCardsGroup } from "./overview";
import InjuryRecoveryChart from "@/components/Charts/Injury_charts/predict";
import { PreventionTable } from "@/components/Charts/Injury_charts/preventiontable";
import { DoctorAssistanceCard } from "./card";

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Injuries" />
      <div className="">
          <OverviewCardsGroup />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-6 2xl:gap-7.5 mt-5 py-3">
        <div className="col-span-12 lg:col-span-7">
          <Suspense fallback={<div>Loading...</div>}>
            <PreventionTable />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Suspense fallback={<div>Loading...</div>}>
            <DoctorAssistanceCard />
          </Suspense>
        </div>
      </div>
      <div className="my-4 rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-dark dark:shadow-card md:p-6 xl:p-9">
        <Suspense fallback={<div>Loading...</div>}>
          <InjuryRecoveryChart />
        </Suspense>
      </div>
    </>
  );
}
