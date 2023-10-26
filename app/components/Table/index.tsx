import { CSSProperties } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { StTable, StTableBody, StTableHead, StTableRow } from './styled';
import NameCell from './Cells/NameCell';
import { data } from './data';
import TextCell from './Cells/TextCell';
import { TransactionType } from './types';
import { colors } from '@/app/contants';
import { getFormatedAmount } from './Cells/heplers';
import CategoryCell from './Cells/CategoryCell';
import AccountCell from './Cells/AccountCell';
import EditCell from './Cells/EditCell';

type TRowProps = {
    index: number;
    style: CSSProperties;
};

const Row: React.FC<TRowProps> = ({ index, style }) => {
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

const Table = () => (
    <StTable>
        <StTableHead>
            <div>Transaction</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Category</div>
            <div>Account</div>
            <div></div>
        </StTableHead>
        <StTableBody>
            <AutoSizer>
                {({ height, width }) => (
                    <List itemCount={data.length} height={height} itemSize={70} width={width}>
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </StTableBody>
    </StTable>
);

export default Table;
