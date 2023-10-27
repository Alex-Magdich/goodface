import React from 'react';
import { StMetrics } from './styled';
import MetricCard from './MetricCard';
import { metricsData } from '@/app/mockData';

const Metrics = () => (
    <StMetrics>
        {metricsData.map(item => (
            <MetricCard {...item} key={item.title} />
        ))}
    </StMetrics>
);

export default Metrics;
