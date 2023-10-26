import { AccountType } from '../types';
import { StAccountCell } from './styled';
import Visa from '@/public/icons/visa.svg';
import Mastercard from '@/public/icons/mastercard.svg';

type TProps = {
    account: {
        type: AccountType;
        number: number;
        expiry: string;
    };
};

const AccountCell: React.FC<TProps> = ({ account }) => (
    <StAccountCell>
        {account.type === AccountType.visa ? <Visa /> : <Mastercard />}
        <div>
            <span>
                {account.type}
                &nbsp;
                {account.number}
            </span>
            <span>Expiry {account.expiry}</span>
        </div>
    </StAccountCell>
);

export default AccountCell;
