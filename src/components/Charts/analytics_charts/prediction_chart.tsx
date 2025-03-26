import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PredictionChart: React.FC = () => {
  const categories = ["Start", "5 min", "10 min", "15 min", "20 min", "Finish"];
  const actualPerformance = [8.2, 8.5, 8.3, 8.1, 8.4]; 
  const predictedPerformance = [8.3, 8.4, 8.5, 8.2, 8.5, 8.7]; 

  const [currPerformance] = useState<number>(actualPerformance[actualPerformance.length - 1]);
  const [predictedRate] = useState<number>(predictedPerformance[predictedPerformance.length - 1]);

  const series = [
    { name: "Current Performance", data: actualPerformance },
    { name: "Predicted Performance", data: predictedPerformance },
  ];

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
    colors: ["#5750F1", "#0ABEF9"],
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
      colors: ["#5750F1", "#0ABEF9"],
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
        formatter: (value) => `${value} m/s`, 
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
        formatter: (value) => `${value.toFixed(2)} m/s`,
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Athlete's Performance Analytics
        </h4>
      </div>
      <div className="-ml-4 -mr-5">
        <ReactApexChart options={options} series={series} type="area" height={310} />
      </div>
      <div className="flex flex-col gap-4 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Current Performance</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {currPerformance} m/s
          </h4>
        </div>
        <div className="xsm:w-1/2">
          <p className="font-medium">Predicted Performance</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            {predictedRate} m/s
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;