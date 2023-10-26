import FilterButton from './FilterButton';
import { StFilterBar } from './styled';
import CalendarIcon from '@/public/icons/calendar.svg';
import FilterIcon from '@/public/icons/filter-lines.svg';

const FilterBar = () => (
    <StFilterBar>
        <div>Transaction history</div>
        <FilterButton text="Select dates" Icon={<CalendarIcon />} />
        <FilterButton text="Apply filter" Icon={<FilterIcon />} />
    </StFilterBar>
);

export default FilterBar;
