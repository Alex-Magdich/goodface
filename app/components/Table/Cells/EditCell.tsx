import EditIcon from '@/public/icons/edit.svg';
import { StSmallButton } from '../../Sidebar/styled';
import { StEditCell } from './styled';

const EditCell = () => (
    <StEditCell>
        <StSmallButton>
            <EditIcon />
        </StSmallButton>
    </StEditCell>
);

export default EditCell;
