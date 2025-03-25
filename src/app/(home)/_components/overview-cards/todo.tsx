import { ArrowUpIcon, ArrowDownIcon, CloseIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import type { JSX, SVGProps } from "react";

type TaskType = {
  title: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Completed";
};

type PropsType = {
  task: TaskType;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function TodoCard({ task, Icon }: PropsType) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <ArrowUpIcon className="text-green-500" />;
      case "In Progress":
        return <ArrowDownIcon className="text-yellow-500" />;
      default:
        return <CloseIcon className="text-red-500" />;
    }
  };

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />

      <div className="mt-6 flex items-center justify-between">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {task.title}
          </dt>
          <dd className="text-sm font-medium text-dark-6">
            Due: {task.dueDate}
          </dd>
        </dl>

        <dl className="flex items-center gap-2 text-sm font-medium">
          {getStatusIcon(task.status)}
          <dt>{task.status}</dt>
        </dl>
      </div>

      <button className="mt-8 w-full rounded-md bg-blue-500 py-4 text-white hover:bg-blue-600">
        Detailed View
      </button>
    </div>
  );
}
