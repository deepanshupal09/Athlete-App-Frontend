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
import { UpcomingTasks } from "@/app/(home)/_components/icons";
import { Button } from "@/components/ui-elements/button";

interface SchemeData {
  name: string;
  organization: string;
  type: "Government" | "Private";
  ageGroup: string;
}

export function SchemesTable({ className }: { className?: string }) {
  const [schemes, setSchemes] = useState<SchemeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      const mockData: SchemeData[] = [
        { name: "Khelo India Scholarship", organization: "Sports Authority of India", type: "Government", ageGroup: "Under 21" },
        { name: "Reliance Foundation Young Champs", organization: "Reliance Foundation", type: "Private", ageGroup: "Under 18" },
        { name: "GoSports Foundation Athlete Support", organization: "GoSports Foundation", type: "Private", ageGroup: "Under 25" },
        { name: "JSW Sports Excellence Program", organization: "JSW Sports", type: "Private", ageGroup: "Under 23" },
        { name: "Tata Trusts Athlete Development", organization: "Tata Trusts", type: "Private", ageGroup: "Under 22" },
        { name: "ONGC Sports Scholarship", organization: "ONGC", type: "Government", ageGroup: "Under 20" },
        { name: "Adidas Young Athletes Program", organization: "Adidas", type: "Private", ageGroup: "Under 19" },
        { name: "Lakshya Sports Athlete Support", organization: "Lakshya Sports", type: "Private", ageGroup: "Under 24" },
        { name: "Paralympic Athlete Support", organization: "Paralympic Committee of India", type: "Government", ageGroup: "All Ages" },
        { name: "Puma Emerging Athletes Program", organization: "Puma", type: "Private", ageGroup: "Under 22" },
      ];
      setSchemes(mockData);
      setLoading(false);
    }, 500);
  }, []);

  const paginatedSchemes = schemes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Schemes Recommended by AI for You
      </h2>
      
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[200px] !text-left">Name</TableHead>
            <TableHead>Organization</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Age Group</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">Loading...</TableCell>
            </TableRow>
          ) : (
            paginatedSchemes.map((scheme, i) => (
              <TableRow
                className="text-center text-base font-medium text-dark dark:text-white"
                key={scheme.name + i}
              >
                <TableCell className="!text-left">{scheme.name}</TableCell>
                <TableCell>{scheme.organization}</TableCell>
                <TableCell>{scheme.type}</TableCell>
                <TableCell>{scheme.ageGroup}</TableCell>
                <TableCell className="flex justify-center">
                  <UpcomingTasks className="w-6 h-6 text-primary cursor-pointer" />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      
      <div className="flex justify-between mt-4">
      <Button
            label="Previous"
            {...(currentPage === 0 ? { "aria-disabled": true } : {})}
            onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
            />

            <Button
            label="Next"
            {...((currentPage + 1) * itemsPerPage >= schemes.length ? { "aria-disabled": true } : {})}
            onClick={() => (currentPage + 1) * itemsPerPage < schemes.length && setCurrentPage(currentPage + 1)}
            />
    </div>
    </div>
  );
}
