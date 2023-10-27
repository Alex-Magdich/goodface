import { CSSProperties } from 'react';
import AccountCell from './Cells/AccountCell';
import CategoryCell from './Cells/CategoryCell';
import EditCell from './Cells/EditCell';
import NameCell from './Cells/NameCell';
import TextCell from './Cells/TextCell';
import { getFormatedAmount } from './Cells/heplers';
import { StTableRow } from './styled';
import { TransactionType } from './types';
import { colors } from '@/app/contants';
import { data } from '@/app/mockData';

type TRowProps = {
    index: number;
    style: CSSProperties;
};

const TableRow: React.FC<TRowProps> = ({ index, style }) => {
    const { transaction, type, amount, date, category, account } = data[index];
    const formatedAmount = getFormatedAmount(amount, type);

    return (
        <StTableRow style={style}>
            <NameCell name={transaction.name} avatar={transaction.avatar} />
            <TextCell text={formatedAmount} color={type === TransactionType.debit ? colors.green500 : ''} />
            <TextCell text={date} />
            <CategoryCell category={category} />
            <AccountCell account={account} />
            <EditCell />
        </StTableRow>
    );
};

export default TableRow;
