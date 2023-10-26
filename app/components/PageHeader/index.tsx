import React from 'react';
import { StPageHeader } from './styled';

type TProps = {
    title: string;
};
const PageHeader: React.FC<TProps> = ({ title }) => (
    <StPageHeader>
        <h1>{title}</h1>
    </StPageHeader>
);
export default PageHeader;
