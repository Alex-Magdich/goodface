import { colors } from '@/app/contants';
import styled, { css } from 'styled-components';

const tableLayout = css`
    grid-template-columns: 2fr 0.5fr 0.5fr 170px 200px 60px;
`;

export const StTable = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`;

export const StTableHead = styled.div`
    display: grid;
    border-bottom: 1px solid ${colors.grey200};
    height: 44px;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.grey500};
    ${tableLayout};
`;

export const StTableBody = styled.div`
    flex: 1 1 auto;
`;

export const StTableRow = styled.div`
    display: grid;
    ${tableLayout};
    border-bottom: 1px solid ${colors.grey200};
    font-size: 14px;
`;
