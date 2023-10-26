import { StFilterButton } from './styled';

type TPRops = {
    text: string;
    Icon: React.ReactNode;
};

const FilterButton: React.FC<TPRops> = ({ text, Icon }) => (
    <StFilterButton>
        {Icon}
        <span>{text}</span>
    </StFilterButton>
);

export default FilterButton;
