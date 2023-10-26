import React from 'react';
import { StMenu } from './styled';
import { usePathname } from 'next/navigation';
import Icon1 from '@/public/icons/bar-chart.svg';
import Icon2 from '@/public/icons/switch-horizontal.svg';
import Icon3 from '@/public/icons/tag.svg';
import Icon4 from '@/public/icons/credit-card-down.svg';
import Icon5 from '@/public/icons/coins.svg';
import Icon6 from '@/public/icons/money.svg';
import Icon7 from '@/public/icons/gear.svg';
import NavItem from './NavItem';
import { routes } from '@/app/contants';

const MENU_ITEMS = [
    { name: 'Dashboard', href: routes.dashboard, icon: <Icon1 /> },
    { name: 'Transactions', href: routes.transactions, icon: <Icon2 /> },
    { name: 'Merchants', href: routes.merchants, icon: <Icon3 /> },
    { name: 'Payouts', href: routes.payouts, icon: <Icon4 /> },
    { name: 'Tariffs', href: routes.tariffs, icon: <Icon5 /> },
    { name: 'Balance', href: routes.balance, icon: <Icon6 /> },
];

const Menu: React.FC = () => {
    const currentRoute = usePathname();

    return (
        <StMenu>
            {MENU_ITEMS.map(item => (
                <NavItem
                    name={item.name}
                    key={item.href}
                    href={item.href}
                    $isActive={currentRoute === item.href}
                    Icon={item.icon}
                />
            ))}
            <NavItem
                name="Settings"
                href={routes.settings}
                $isActive={currentRoute === routes.settings}
                Icon={<Icon7 />}
            />
        </StMenu>
    );
};

export default Menu;
