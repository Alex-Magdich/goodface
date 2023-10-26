import Image from 'next/image';
import { StNameCell } from './styled';

type TProps = {
    name: string;
    avatar: string;
};
const NameCell: React.FC<TProps> = ({ name, avatar }) => (
    <StNameCell>
        <Image src={'https://i.pravatar.cc/40?img=' + avatar} alt={''} width={40} height={40} />
        <div>{name}</div>
    </StNameCell>
);

export default NameCell;
