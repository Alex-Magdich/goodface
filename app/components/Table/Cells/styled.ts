import { colors } from '@/app/contants';
import styled from 'styled-components';
import { TransactionCategory } from '../types';
import { getColorByCategory } from './heplers';

export const StNameCell = styled.div`
    display: flex;
    font-weight: 500;
    color: ${colors.grey900};
    gap: 0 12px;
    align-items: center;
    img {
        border-radius: 50%;
    }
`;

export const StTextCell = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    color: ${({ color }) => color || colors.grey500};
`;

export const StCategoryCell = styled.div<{ $category: TransactionCategory }>`
    display: flex;
    padding: 6px 10px;
    align-items: center;
    gap: 0 6px;
    border-radius: 16px;
    justify-self: baseline;
    align-self: center;
    background-color: ${({ $category }) => colors[`${getColorByCategory($category)}50`]};
    color: ${({ $category }) => colors[`${getColorByCategory($category)}700`]};
    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ $category }) => colors[`${getColorByCategory($category)}500`]};
    }
`;

export const StAccountCell = styled.div`
    display: flex;
    align-items: center;
    gap: 0 12px;
    div {
        display: flex;
        flex-direction: column;
        line-height: 1.5;
        span:first-child {
            color: ${colors.grey900};
        }
        span:last-child {
            color: ${colors.grey500};
        }
    }
`;

export const StEditCell = styled.div`
    display: flex;
    align-items: center;
`;
