import styled from 'styled-components';
import { colors } from '@/app/contants';

export const StAside = styled.aside`
    display: flex;
    flex-direction: column;
    background: ${colors.grey25};
    padding: 24px 12px;
    border-right: 1px solid ${colors.grey100};
`;

export const StSidebarHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const StSidebarFooter = styled.footer`
    border-top: 1px solid ${colors.grey200};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    margin-top: auto;
`;

export const StAccoutButton = styled.button`
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 0 8px;
    border: 1px solid transparent;
    transition: all 0.2s;
    border-radius: 8px;
    &:hover {
        border-color: ${colors.grey200};
    }
`;

export const StAccoutButtonText = styled.span`
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    span:first-child {
        font-size: 14px;
        font-weight: 500;
        ${colors.grey700};
    }
    span:last-child {
        font-size: 12px;
        ${colors.grey500};
    }
`;

export const StSmallButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    width: 1em;
    height: 1em;
    transition: all 0.2s;
    border-radius: 8px;
    border: 1px solid transparent;
    &:hover {
        border-color: ${colors.grey200};
    }
`;
