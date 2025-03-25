import { HeartRateGraph } from "@/components/Charts/payments-overview";
import { BalancedDiet } from "@/components/Charts/used-devices";
import { Sleep } from "@/components/Charts/sleep";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import { ChatsCard } from "./_components/chats-card";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { RegionLabels } from "./_components/region-labels";
import { WeatherCard } from "./_components/WeatherCard";
import { TodoCard } from "./_components/overview-cards/todo";
import { ArrowUpIcon } from "@/assets/icons";
import { UpcomingEventCard } from "./_components/overview-cards/upcoming-event";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};
const sampleTask = {
  title: "Gym session",
  dueDate: "2025-03-30",
  status: "In Progress" as "In Progress" | "Pending" | "Completed",
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <HeartRateGraph
          className="col-span-12 xl:col-span-7"
          key={extractTimeFrame("payments_overview")}
          timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
        />

        <Sleep
          key={extractTimeFrame("weeks_profit")}
          timeFrame={extractTimeFrame("weeks_profit")?.split(":")[1]}
          className="col-span-12 xl:col-span-5"
        />

        <BalancedDiet
          className="col-span-12 xl:col-span-5"
          key={extractTimeFrame("used_devices")}
          timeFrame={extractTimeFrame("used_devices")?.split(":")[1]}
        />

        <WeatherCard className="col-span-12 xl:col-span-7" />

        {/* <RegionLabels /> */}

        <div className="col-span-12 grid xl:col-span-8">
          {/* <Suspense fallback={<TopChannelsSkeleton />}>
            <TopChannels />
          </Suspense> */}
          <TodoCard task={sampleTask} Icon={ArrowUpIcon} />;
        </div>

        {/* <Suspense fallback={null}>
          <ChatsCard />
        </Suspense> */}
      <UpcomingEventCard />
      </div>
    </>
  );
}
