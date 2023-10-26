import React from 'react';
import { StMetrics } from './styled';
import MetricCard from './MetricCard';

const data = [
    {
        title: 'Total customers',
        value: '2,420',
        score: 40,
        isPositive: true,
    },
    {
        title: 'Members',
        value: '1,210',
        score: 10,
        isPositive: false,
    },
    {
        title: 'Active now',
        value: '360',
        score: 20,
        isPositive: true,
    },
];

const Metrics = () => (
    <StMetrics>
        {data.map(item => (
            <MetricCard {...item} key={item.title} />
        ))}
    </StMetrics>
);

export default Metrics;
