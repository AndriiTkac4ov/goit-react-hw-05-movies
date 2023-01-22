import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppHeader = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    min-height: ${props => props.theme.sizes(8)};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.white};
    background-image: repeating-linear-gradient(
        to right,
        ${props => props.theme.colors.primaryVertical},
        ${props => props.theme.colors.primaryVertical} 20px,
        ${props => props.theme.colors.secondaryVertical} 20px,
        ${props => props.theme.colors.secondaryVertical} 40px
    );
    /* background-color: #3fb1b5; */
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavItem = styled(NavLink)`
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
        color: #713333;
    }

    &.active {
        color: #ea332c;
    }
`;