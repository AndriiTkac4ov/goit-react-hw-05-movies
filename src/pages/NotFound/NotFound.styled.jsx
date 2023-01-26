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
    margin-bottom: ${props => props.theme.sizes(2)};
    max-width: 100%;
    height: auto;
`;

export const NotFoundText = styled.p`
    margin-bottom: ${props => props.theme.sizes(2)};
`;

export const NotFoundLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 8px;
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.secondaryVertical};
    border: ${props => props.theme.borders.normal};
    border-color: ${props => props.theme.colors.textColor};
    border-radius: ${props => props.theme.radii.normal};
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.secondaryVertical};
        background-color: ${props => props.theme.colors.inFocusColor};
        border-color: ${props => props.theme.colors.inFocusColor};
    }
`;