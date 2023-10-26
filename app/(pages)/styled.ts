import styled from 'styled-components';

export const StMainLayout = styled.section`
    display: grid;
    grid-template-columns: 280px 1fr;
    height: 100vh;
`;

export const StMain = styled.main`
    padding: 24px 40px 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
`;
