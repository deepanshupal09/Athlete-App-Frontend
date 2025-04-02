"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { AchievementCard } from "./overview";
import { Achievements } from "@/components/Charts/achievement_charts";


export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Achievements" />
      <div>
        <AchievementCard />
      </div>
      <div className="mt-6">
        <Achievements />
      </div>

    </>
  );
}
