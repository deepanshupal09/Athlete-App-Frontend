import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SchemesTableSkeleton() {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Schemes for Athletes
      </h2>
      
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead>Name</TableHead>
            <TableHead>Organization</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Age Group</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-6 w-full" /></TableCell>
              <TableCell><Skeleton className="h-6 w-full" /></TableCell>
              <TableCell><Skeleton className="h-6 w-full" /></TableCell>
              <TableCell><Skeleton className="h-6 w-full" /></TableCell>
              <TableCell><Skeleton className="h-6 w-6" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}