import Menu from '../Menu';
import { StAside } from './styled';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => (
    <StAside>
        <SidebarHeader />
        <Menu />
        <SidebarFooter />
    </StAside>
);

export default Sidebar;
