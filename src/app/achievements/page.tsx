"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { Suspense } from "react";
import { AchievementCard } from "./overview";
import { Achievements } from "@/components/Charts/achievement_charts";


export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Achievements" />
      <div>
      <Suspense fallback={<div>Loading Achievements...</div>}>
        <AchievementCard />
      </Suspense>
      </div>
      <div className="mt-6">
        <Suspense fallback={<div>Loading Charts...</div>}>
        <Achievements />
        </Suspense>
      </div>

    </>
  );
}

