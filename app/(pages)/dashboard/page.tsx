"use client";
import FilterBar from "@/app/components/FilterBar";
import Metrics from "@/app/components/Metrics";
import PageHeader from "@/app/components/PageHeader";
import Table from "@/app/components/Table";

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard"/>
      <Metrics/>
      <FilterBar/>
      <Table/>
    </>
  )
}
