"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DotIcon } from "@/assets/icons";
import { getDoctorAnalyticsData } from "./fetch";

export function DoctorAssistanceCard() {
  const [data, setData] = useState<
    { name: string; icon: React.ElementType; isAvailable: boolean; description: string }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const analyticsData = await getDoctorAnalyticsData();
      setData(analyticsData);
    }

    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Doctor Assistance
      </h2>

      <ul>
        {data.map((item, key) => {
          const IconComponent = item.icon;

          return (
            <li key={key}>
              <div className="flex items-center gap-4.5 px-7.5 py-3 outline-none hover:bg-gray-2 dark:hover:bg-dark-2">
                <div className="relative shrink-0">
                  <IconComponent className="size-14 rounded-full" />
                  <span
                    className={cn(
                      "absolute bottom-0 right-0 size-3.5 rounded-full ring-2 ring-white dark:ring-dark-2",
                      item.isAvailable ? "bg-green" : "bg-orange-light",
                    )}
                  />
                </div>

                <div className="relative flex-grow">
                  <h3 className="font-medium text-dark dark:text-white">
                    {item.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "truncate text-sm font-medium dark:text-dark-5 xl:max-w-[8rem]",
                        item.isAvailable ? "text-green" : "text-red-500",
                      )}
                    >
                      {item.isAvailable ? "Available" : "Not Available"}
                    </span>

                    <DotIcon />

                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
