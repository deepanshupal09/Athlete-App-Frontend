import { ArrowDownIcon, ArrowUpIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { JSX, SVGProps } from "react";

type PropsType = {
  label: string;
  data: {
    value: string;
  };
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function QuickCard({ label, data, Icon }: PropsType) {
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon className="size-12 text-primary" />
      <div className="mt-6 flex items-start justify-between">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {data.value}
          </dt>
          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </dl>
      </div>
    </div>
  );
}