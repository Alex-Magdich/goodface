import { colors } from '@/app/contants';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const activeStyle = css`
    background-color: ${colors.blue400};
    color: #fff;
    svg,
    span {
        color: currentColor;
    }
`;

export const StLink = styled(Link)<{ $isActive: boolean }>`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    height: 40px;
    gap: 12px;
    padding: 0 12px;
    align-items: center;
    border-radius: 8px;
    transition: all 0.2s;
    svg {
        color: ${colors.grey500};
    }
    span {
        color: ${colors.grey700};
    }
    ${({ $isActive }) =>
        $isActive
            ? css`
                  ${activeStyle};
              `
            : ''};
    &:hover {
        ${activeStyle};
    }
`;

export const StMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 4px 0;
    padding-bottom: 24px;
    flex-grow: 1;
    padding-top: 60px;
    ${StLink}:last-child {
        margin-top: auto;
    }
`;
