import React from 'react';
import { StLink } from './styled';

export type TProps = {
    name: string;
    href: string;
    $isActive: boolean;
    Icon: React.ReactNode;
};

const NavItem: React.FC<TProps> = ({ name, href, $isActive, Icon }) => (
    <StLink href={href} key={href} $isActive={$isActive}>
        {Icon}
        <span>{name}</span>
    </StLink>
);

export default NavItem;
