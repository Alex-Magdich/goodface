import { TransactionCategory } from '../types';
import { StCategoryCell } from './styled';

type TProps = {
    category: TransactionCategory;
};

const CategoryCell: React.FC<TProps> = ({ category }) => (
    <StCategoryCell $category={category}>{category}</StCategoryCell>
);

export default CategoryCell;
