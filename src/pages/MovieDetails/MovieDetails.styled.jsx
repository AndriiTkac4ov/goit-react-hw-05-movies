import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DetailsSection = styled.section`
    padding-top: ${props => props.theme.sizes(2)};
    padding-right: ${props => props.theme.sizes(8)};
    padding-left: ${props => props.theme.sizes(8)};
    padding-bottom: ${props => props.theme.sizes(2)};
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.moviesBackground};
`;

export const ButtonGoBack = styled.button`
    font-size: ${props => props.theme.fontSizes.s}px;
    font-weight: ${props => props.theme.fontWeights.normal};
    padding: 8px;
    margin-bottom: ${props => props.theme.sizes(2)};
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

export const DetailsWrapper = styled.div`
    display: flex;
    padding-bottom: ${props => props.theme.sizes(1)};
    margin-bottom: ${props => props.theme.sizes(2)};
    border-bottom: ${props => props.theme.borders.double};
    border-color: ${props => props.theme.colors.textColor};
`;

export const PosterWrapper = styled.div`
    margin-right: ${props => props.theme.sizes(3)};
`;

export const MovieTitle = styled.h3`
    font-size: ${props => props.theme.fontSizes.l}px;
    margin-bottom: ${props => props.theme.sizes(3)};
`;

export const OverviewTitle = styled.h4`
    font-size: ${props => props.theme.fontSizes.m}px;
    margin-bottom: ${props => props.theme.sizes(1)};
`;

export const OverviewText = styled.p`
    margin-bottom: ${props => props.theme.sizes(6)};
`;

export const AdditionalWrapper = styled.div`
    padding-bottom: ${props => props.theme.sizes(1)};
    margin-bottom: ${props => props.theme.sizes(2)};
    border-bottom: ${props => props.theme.borders.double};
    border-color: ${props => props.theme.colors.textColor};
`;

export const AdditionalList = styled.ul`
    list-style: none;
    padding-right: ${props => props.theme.sizes(3)};
    padding-left: ${props => props.theme.sizes(3)};
    margin: 0;
`;

export const AdditionalItem = styled.li`
    &:not(:last-child) {
        margin-bottom: ${props => props.theme.sizes(1)};
    }
`;

export const AdditionalLink = styled(NavLink)`
    text-decoration: none;
    font-size: ${props => props.theme.fontSizes.m}px;
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.textColor};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover:not(.active),
    &:focus:not(.active) {
        color: ${props => props.theme.colors.inFocusColor};
    }

    &.active {
        text-decoration: underline ${props => props.theme.colors.textColor};
    }
`;
