import styled from 'styled-components';

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const CastName = styled.h4`
    width: 150px;
    margin-bottom: ${props => props.theme.sizes(1)};
`;

export const CastCharacter = styled.p`
    width: 150px;
`;