import { colors } from '@/app/contants';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const StFilterBar = styled.div`
    display: flex;
    align-items: center;
    gap: 0 12px;
    padding: 24px 0;
    opacity: 0;
    transform: translateY(10px);
    animation: 1s 0.5s ${fadeIn} ease-out forwards;

    div {
        margin-right: auto;
        color: ${colors.grey900};
        font-size: 18px;
        font-weight: 500;
    }
`;

export const StFilterButton = styled.button`
    border: 1px solid ${colors.grey200};
    border-radius: 8px;
    display: inline-flex;
    height: 40px;
    gap: 0 8px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    color: ${colors.grey700};
    align-items: center;
`;
