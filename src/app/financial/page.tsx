"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { ExpensesCard } from "./overview";
import { Finance } from "@/components/Charts/financechart";
import { FinancialAssistanceCard } from "./card";


export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Financials" />
      <div>
      <ExpensesCard />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-6 2xl:gap-7.5 mt-5 py-3">
              <div className="col-span-12 lg:col-span-7">
                  <Finance />
              </div>
              <div className="col-span-12 lg:col-span-5">
                <FinancialAssistanceCard />
              </div>
            </div>
    </>
  );
}
