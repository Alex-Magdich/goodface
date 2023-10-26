import Logo from '@/public/icons/Logo.svg';
import Arrows from '@/public/icons/double-arrows.svg';
import { StSidebarHeader, StSmallButton } from './styled';

const SidebarHeader = () => (
    <StSidebarHeader>
        <Logo />
        <StSmallButton>
            <Arrows />
        </StSmallButton>
    </StSidebarHeader>
);

export default SidebarHeader;
