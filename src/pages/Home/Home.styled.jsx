import styled from 'styled-components';
import { Link } from "react-router-dom";

export const TrendMoviesSection = styled.section`
    padding-top: ${props => props.theme.sizes(2)};
    padding-right: ${props => props.theme.sizes(8)};
    padding-left: ${props => props.theme.sizes(8)};
    padding-bottom: ${props => props.theme.sizes(2)};
    background-color: ${props => props.theme.colors.homeBackground};
`;

export const TrendSectionTitle = styled.h2`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.m}px;
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.textColor};
`;

export const TrendMoviesList = styled.ol`
    margin: 0;
    padding: 0;
`;

export const TrendMovieItem = styled.li`
    color: ${props => props.theme.colors.textColor};
`;

export const TrendMovieLink = styled(Link)`
    text-decoration: none;
    margin-left: ${props => props.theme.sizes(1)};
    color: ${props => props.theme.colors.textColor};

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.inFocusColor};
        text-decoration: underline ${props => props.theme.colors.inFocusColor};
    }
`;
