import { colors } from '@/app/contants';
import { StTextCell } from './styled';

type TProps = {
    text: string | number;
    color?: string;
};
const TextCell: React.FC<TProps> = ({ text, color = '' }) => <StTextCell color={color}>{text}</StTextCell>;

export default TextCell;
