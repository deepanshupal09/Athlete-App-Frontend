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

interface InjuryData {
  name: string;
  riskPercentage: number;
  preventionTips: string;
}

export function PreventionTable({ className }: { className?: string }) {
  const [injuryData, setInjuryData] = useState<InjuryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockData: InjuryData[] = [
        { name: "Knee Injury", riskPercentage: 40, preventionTips: "Stretch properly, avoid overuse, and strengthen quadriceps." },
        { name: "Ankle Sprain", riskPercentage: 30, preventionTips: "Wear proper footwear and improve balance exercises." },
        { name: "Shoulder Dislocation", riskPercentage: 20, preventionTips: "Strengthen rotator cuff muscles and avoid overhead stress." },
        { name: "Lower Back Pain", riskPercentage: 50, preventionTips: "Maintain proper posture and strengthen core muscles." },
      ];
      setInjuryData(mockData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Injury Prevention based on your History
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[150px] !text-left">Injury Type</TableHead>
            <TableHead>Risk %</TableHead>
            <TableHead>Prevention Tips</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center">Loading...</TableCell>
            </TableRow>
          ) : (
            injuryData.map((injury, i) => (
              <TableRow
                className="text-center text-base font-medium text-dark dark:text-white"
                key={injury.name + i}
              >
                <TableCell className="!text-left">{injury.name}</TableCell>
                <TableCell>{injury.riskPercentage}%</TableCell>
                <TableCell>{injury.preventionTips}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
