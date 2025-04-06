import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const VO2HeartRateChart: React.FC = () => {
  const heartRate = [60, 80, 100, 120, 140, 160, 180, 200]; // BPM
  const vo2Max = [20, 30, 40, 45, 50, 55, 60, 62]; // ml/kg/min

  const series = [
    {
      name: "VO₂ Max",
      data: vo2Max,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      fontFamily: "Satoshi, sans-serif",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#1E90FF"], 
    },
    markers: {
      size: 5,
      colors: ["#1E900F"],
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
    xaxis: {
      type: "category",
      categories: heartRate.map((hr) => `${hr} bpm`), // Display heart rate in bpm
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "VO₂ Max (ml/kg/min)",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      labels: {
        formatter: (value) => `${value.toFixed(1)}`,
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `${value} ml/kg/min`,
      },
    },
    colors: ["#1E90FF"],
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          VO₂ Max vs. Heart Rate
        </h4>
      </div>
      <div className="-ml-4 -mr-5">
        <ReactApexChart options={options} series={series} type="line" height={310} />
      </div>
      <div className="flex flex-col gap-4 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Peak VO₂ Max</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {vo2Max[vo2Max.length - 1]} ml/kg/min
          </h4>
        </div>
        <div className="xsm:w-1/2">
          <p className="font-medium">Max Heart Rate</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {heartRate[heartRate.length - 1]} bpm
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VO2HeartRateChart;