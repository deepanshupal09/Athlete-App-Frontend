"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const InjuryRecoveryChart: React.FC = () => {
  const categories = ["Day 1", "Week 1", "Week 2", "Week 3", "Week 4", "Full Recovery"];
  const actualRecovery = [10, 30, 50, 65, 80]; 
  const predictedRecovery = [15, 35, 55, 70, 85, 100]; 

  const [currRecovery] = useState<number>(actualRecovery[actualRecovery.length - 2]);
  const [predictedRecoveryRate] = useState<number>(predictedRecovery[predictedRecovery.length - 2]);

  const series = [
    { name: "Actual Recovery", data: actualRecovery },
    { name: "Predicted Recovery", data: predictedRecovery },
  ];

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
    colors: ["#FF5733", "#17A2B8"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 410,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 5,
      colors: ["#FF5733", "#17A2B8"],
      strokeWidth: 2,
      shape: "circle",
      hover: {
        size: 8,
      },
    },
    grid: {
      strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}% Recovered`,
      },
    },
    xaxis: {
      type: "category",
      categories: categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value.toFixed(0)}%`,
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Current Injury Recovery Progress
        </h4>
      </div>
      <div className="-ml-4 -mr-5">
        <ReactApexChart options={options} series={series} type="area" height={310} />
      </div>
      <div className="flex flex-col gap-4 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Current Recovery</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {currRecovery}%
          </h4>
        </div>
        <div className="xsm:w-1/2">
          <p className="font-medium">Predicted Recovery</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {predictedRecoveryRate}%
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InjuryRecoveryChart;
