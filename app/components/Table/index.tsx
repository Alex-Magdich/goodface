import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { StTable, StTableBody } from './styled';
import TableRow from './TableRow';
import TableHead from './TableHead';
import { data } from '@/app/mockData';

const Table = () => (
    <StTable>
        <TableHead />
        <StTableBody>
            <AutoSizer>
                {({ height, width }) => (
                    <List itemCount={data.length} height={height} itemSize={70} width={width}>
                        {TableRow}
                    </List>
                )}
            </AutoSizer>
        </StTableBody>
    </StTable>
);

export default Table;
