import { colors } from '@/app/contants';
import styled, { css } from 'styled-components';

export const StMetrics = styled.div`
    display: flex;
    gap: 0 24px;
    padding: 24px 0 3px;
    overflow-x: auto;
`;

export const StMetricCard = styled.div`
    flex: 1 0 344px;
    border-radius: 8px;
    border: 1px solid ${colors.grey200};
    background-color: ${colors.white};
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
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
