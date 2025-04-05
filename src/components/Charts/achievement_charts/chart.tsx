"use client";

import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

type PropsType = {
  data: {
    year: string;
    local: number;
    district: number;
    junior: number;
    national: number;
  }[];
};

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function AchievementsChart({ data }: PropsType) {
  const options: ApexOptions = {
    colors: ["#34D399", "#FACC15", "#6366F1", "#EF4444"],
    chart: {
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    stroke: { width: 3, curve: "smooth" },
    markers: { size: 5 },
    grid: {
      strokeDashArray: 5,
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: data.map((d) => d.year),
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "inherit",
      fontWeight: 500,
      fontSize: "14px",
      markers: { size: 9, shape: "circle" },
    },
    yaxis: {
      title: { text: "Achievements" },
    },
  };

  return (
    <div className="-ml-3.5 mt-3">
      <Chart
        options={options}
        series={[
          { name: "Local Tournament", data: data.map((d) => d.local) },
          { name: "District Level", data: data.map((d) => d.district) },
          { name: "Junior Level", data: data.map((d) => d.junior) },
          { name: "National Qualified", data: data.map((d) => d.national) },
        ]}
        type="line"
        height={370}
      />
    </div>
  );
}
