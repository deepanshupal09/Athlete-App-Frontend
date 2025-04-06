import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "../icons";

export async function OverviewCardsGroup() {
  const { views, profit, products, users } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Upcoming Tasks"
        data={{
          ...views,
          value: compactFormat(views.value),
        }}
        Icon={icons.UpcomingTasks}
      />

      <OverviewCard
        label="Total Calories burnt"
        data={{
          ...profit,
          value: compactFormat(profit.value),
        }}
        Icon={icons.Calories}
      />

      <OverviewCard
        label="Total Steps"
        data={{
          ...products,
          value: compactFormat(products.value),
        }}
        Icon={icons.Steps}
      />

      <OverviewCard
        label="Water Intake"
        data={{
          ...users,
          value: compactFormat(users.value) + " l",
        }}
        Icon={icons.Water}
      />
    </div>
  );
}
