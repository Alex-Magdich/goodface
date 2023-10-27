'use client';
import FilterBar from '@/app/components/FilterBar';
import Metrics from '@/app/components/Metrics';
import PageHeader from '@/app/components/PageHeader';
import Table from '@/app/components/Table';

const Dashboard = () => (
    <>
        <PageHeader title="Dashboard" />
        <Metrics />
        <FilterBar />
        <Table />
    </>
);

export default Dashboard;
