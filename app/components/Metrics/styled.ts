import { colors } from '@/app/contants';
import styled, { css, keyframes } from 'styled-components';

const generateDelayAnimationForItems = (count: number, delay: number) => {
    let css = '';
    for (let i = 1; i <= count; i++) {
        css += `&:nth-child(${i}) {animation-delay: ${delay * i}ms};`;
    }
    return css;
};

const fadeIn = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const moveDown = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const animateLine = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

export const StMetricCard = styled.div`
    flex: 1 0 344px;
    border-radius: 8px;
    border: 1px solid ${colors.grey200};
    background-color: ${colors.white};
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1);

    .chart {
        path {
            &:nth-child(1),
            &:nth-child(2) {
                opacity: 0;
                transform: translateY(50%);
                animation: 1s 1s ${moveDown} ease-out forwards;
            }

            &:nth-child(3) {
                stroke-dasharray: 200;
                stroke-dashoffset: 200;
                animation: 1s 0.5s ${animateLine} ease-in forwards;
            }
        }
    }
`;

export const StMetrics = styled.div`
    display: flex;
    gap: 0 24px;
    padding: 24px 0 3px;
    overflow-x: auto;
    ${StMetricCard} {
        opacity: 0;
        transform: translateY(10px);
        animation: 0.5s ${fadeIn} ease-out forwards;
        ${generateDelayAnimationForItems(3, 200)};
    }
`;

export const StMetricCardHeader = styled.div`
    padding: 18px 10px 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${colors.grey900};
`;

export const StMetricCardBody = styled.div`
    padding: 12px 24px 24px;
    display: flex;
    justify-content: space-between;
`;

export const StMetricCardData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px 0;
`;
export const StMetricCardDataValue = styled.div`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.72px;
    color: ${colors.grey900};
`;

export const StMetricCardDataScore = styled.div<{ $isPositive: boolean }>`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey400};
    align-items: center;
    display: flex;
    ${({ $isPositive }) =>
        $isPositive
            ? css`
                  svg {
                      color: ${colors.green500};
                  }
                  span {
                      color: ${colors.green700};
                  }
              `
            : css`
                  svg {
                      transform: rotate(180deg);
                      color: ${colors.red500};
                  }
                  span {
                      color: ${colors.red700};
                  }
              `};
`;

export const StMetricCardFooter = styled.div`
    padding: 16px 24px;
    border-top: 1px solid ${colors.grey200};
    display: flex;
    justify-content: flex-end;
    color: ${colors.blue700};
    font-size: 14px;
    font-weight: 500;
`;
