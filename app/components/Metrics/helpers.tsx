import ChartPositive from '@/public/chart-positive.svg';
import ChartNegative from '@/public/chart-negative.svg';

export const getChart = (isPositive: boolean) => (isPositive ? <ChartPositive /> : <ChartNegative />);
