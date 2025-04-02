"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DotIcon } from "@/assets/icons";

type FinancialOption = {
  name: string;
  icon: React.ElementType;
  isAvailable: boolean;
  description: string;
};

const financialOptions: FinancialOption[] = [
  {
    name: "Learn Finance for Free",
    icon: () => <span className="h-10 w-10 text-3xl">📚</span>,
    isAvailable: true,
    description: "Use Google & YouTube to access free finance courses.",
  },
  {
    name: "Google Career Certificates",
    icon: () => <span className="h-10 w-10 text-3xl">🎓</span>,
    isAvailable: true,
    description: "Explore Google's finance & investment courses.",
  },
  {
    name: "Plan Your Finances with AI",
    icon: () => <span className="h-10 w-10 text-3xl">🤖</span>,
    isAvailable: true,
    description: "AI-driven financial planning tailored for athletes.",
  },
  {
    name: "Stock Market Insights",
    icon: () => <span className="h-10 w-10 text-3xl">📈</span>,
    isAvailable: false,
    description: "Stay updated with real-time stock market trends.",
  },
  {
    name: "Learn Secondary Skills with YouTube & AI",
    icon: () => <span className="h-10 w-10 text-3xl">💼</span>,
    isAvailable: true,
    description: "Develop side skills like freelancing, coding, and design.",
  },
];


export function FinancialAssistanceCard() {
  const [data, setData] = useState<FinancialOption[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(financialOptions);
    }, 1000);
  }, []);

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h2 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        Financial Assistance
      </h2>

      <ul>
        {data.map((item, key) => {
          const IconComponent = item.icon;

          return (
            <li key={key}>
              <div className="flex items-center gap-4.5 px-7.5 py-3 outline-none hover:bg-gray-2 dark:hover:bg-dark-2">
                <div className="relative shrink-0">
                  <IconComponent />
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
