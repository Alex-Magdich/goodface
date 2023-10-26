import { getChart } from './helpers';
import {
    StMetricCard,
    StMetricCardBody,
    StMetricCardData,
    StMetricCardDataScore,
    StMetricCardDataValue,
    StMetricCardFooter,
    StMetricCardHeader,
} from './styled';
import Dots from '@/public/icons/dots.svg';
import Arrow from '@/public/icons/arrow.svg';

type TProps = {
    title: string;
    value: string;
    score: number;
    isPositive: boolean;
};
const MetricCard: React.FC<TProps> = ({ title, value, score, isPositive }) => (
    <StMetricCard>
        <StMetricCardHeader>
            <div>{title}</div>
            <Dots />
        </StMetricCardHeader>
        <StMetricCardBody>
            <StMetricCardData>
                <StMetricCardDataValue>{value}</StMetricCardDataValue>
                <StMetricCardDataScore $isPositive={isPositive}>
                    <Arrow />
                    <span>{score}%</span>
                    &nbsp; vs last month
                </StMetricCardDataScore>
            </StMetricCardData>
            {getChart(isPositive)}
        </StMetricCardBody>
        <StMetricCardFooter>
            <button>View report</button>
        </StMetricCardFooter>
    </StMetricCard>
);

export default MetricCard;
