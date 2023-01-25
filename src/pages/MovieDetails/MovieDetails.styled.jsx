import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailLink = styled(NavLink)`
    font-size: ${props => props.theme.fontSizes.m}px;
    font-weight: ${props => props.theme.fontWeights.bold};
    text-decoration: none;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:not(:last-child) {
            margin-right: ${props => props.theme.sizes(6)};
        }

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.inFocusColor};
    }

    &.active {
        color: ${props => props.theme.colors.activeColor};
    }
`;