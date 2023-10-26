import Image from 'next/image';
import { StAccoutButton, StAccoutButtonText, StSidebarFooter, StSmallButton } from './styled';
import avatar from '@/public/Avatar.png';
import LogoutIcon from '@/public/icons/logout.svg';

const SidebarFooter = () => (
    <StSidebarFooter>
        <StAccoutButton>
            <Image src={avatar} alt={'user avatar'} />
            <StAccoutButtonText>
                <span>James Whitlock</span>
                <span>+380670096582</span>
            </StAccoutButtonText>
        </StAccoutButton>
        <StSmallButton>
            <LogoutIcon />
        </StSmallButton>
    </StSidebarFooter>
);

export default SidebarFooter;
