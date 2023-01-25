import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section`
    padding: 24px;
    text-align: center;
`;

export const NotFoundImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
`;

export const NotFoundLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 8px;
    border-radius: ${props => props.theme.radii.normal};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primaryVertical};
`;