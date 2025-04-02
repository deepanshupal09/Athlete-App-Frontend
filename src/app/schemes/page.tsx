"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { SchemesTable } from "@/components/Charts/schemeschart";
import { useState } from "react";


export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Schemes, Sponsorships & Opportunities" />
      <div>  
      <SchemesTable/>
      </div>

    </>
  );
}
