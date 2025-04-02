"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import EventsBox from "@/components/Charts/upcomingevents";
import { useState } from "react";



export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Upcoming Events" />
      <div>
        <EventsBox/>
      </div>

    </>
  );
}
