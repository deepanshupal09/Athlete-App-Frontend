"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface HelpData {
  question: string;
  explanation: string;
}

export function AIHelpTable({ className }: { className?: string }) {
  const [helpData, setHelpData] = useState<HelpData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockData: HelpData[] = [
        // {
        //   question: "How to create a balanced diet?",
        //   explanation: "A balanced diet includes macronutrients (carbs, protein, fats) and micronutrients (vitamins, minerals) in proper proportions.",
        // },
        {
          question: "Rich vegetarian protein sources?",
          explanation: "Lentils, chickpeas, tofu, paneer, quinoa, nuts, and seeds are excellent vegetarian protein sources.",
        },
        {
          question: "What is active calorie intake?",
          explanation: "Active calories are the calories burned during physical activities, separate from resting metabolic rate (BMR).",
        },
        {
          question: "How to calculate BMI?",
          explanation: "BMI = weight (kg) / height² (m²). A BMI between 18.5-24.9 is considered healthy.",
        },
      ];
      setHelpData(mockData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Get Help with AI
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[200px] !text-left">Question / Term</TableHead>
            <TableHead>Explanation</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={2} className="text-center">Loading...</TableCell>
            </TableRow>
          ) : (
            helpData.map((item, i) => (
              <TableRow
                className="text-center text-base font-medium text-dark dark:text-white"
                key={item.question + i}
              >
                <TableCell className="!text-left">{item.question}</TableCell>
                <TableCell>{item.explanation}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}