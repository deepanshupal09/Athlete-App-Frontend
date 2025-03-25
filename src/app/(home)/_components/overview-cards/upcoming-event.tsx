"use client";
import { Calendar } from "@/components/Layouts/sidebar/icons";
import { useEffect, useState } from "react";

type EventType = {
  title: string;
  date: string; 
};

const staticEvents: EventType[] = [
  { title: "District Selections", date: "2025-04-10 12:00:00" },
  { title: "Coach Interview", date: "2025-04-15 10:00:00" },
];

export function UpcomingEventCard() {
  const [events, setEvents] = useState<EventType[]>(staticEvents);
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date().getTime();
      const newTimeLeft: { [key: string]: string } = {};

      events.forEach((event) => {
        const eventTime = new Date(event.date).getTime();
        const timeDiff = eventTime - now;

        if (timeDiff > 0) {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

          newTimeLeft[event.title] = `${days}d ${hours}h ${minutes}m`;
        } else {
          newTimeLeft[event.title] = "Event Started!";
        }
      });

      setTimeLeft(newTimeLeft);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); 

    return () => clearInterval(interval);
  }, [events]);

  const addEvent = () => {
    const newEvent: EventType = {
      title: "New Event",
      date: "2025-05-01 09:00:00",
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <div className="flex items-center gap-2 px-4">
        <Calendar className="w-6 h-6 mx-2 text-gray-600 dark:text-gray-300" />
        <h2 className="text-lg font-bold text-dark dark:text-white">
          Upcoming Events
        </h2>
      </div>

      <div className="mt-4 p-4 ">
        {events.map((event, index) => (
          <div key={index} className="rounded-lg p-4 bg-gray-100 dark:bg-gray-800 flex justify-between my-2">
            <div>
              <p className="text-md font-semibold text-dark dark:text-white">{event.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
            </div>
            <p className="text-sm font-medium text-blue-500">{timeLeft[event.title]}</p>
          </div>
        ))}
      </div>

      <button
        onClick={addEvent}
        className="rounded-lg mt-4 mx-auto block w-[90%] bg-blue-500 py-2 text-white hover:bg-blue-600">
        Add More Events
      </button>
    </div>
  );
}
