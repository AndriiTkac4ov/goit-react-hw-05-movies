import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MoviesSection = styled.section`
    padding-top: ${props => props.theme.sizes(2)};
    padding-right: ${props => props.theme.sizes(8)};
    padding-left: ${props => props.theme.sizes(8)};
    padding-bottom: ${props => props.theme.sizes(2)};
    background-color: ${props => props.theme.colors.moviesBackground};
`;

// for SearchForm part
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radii.normal};
    overflow: hidden;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchFormButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.theme.sizes(6)};
    height: ${props => props.theme.sizes(6)};
    border: 0;
    opacity: 0.6;
    background-color: ${props => props.theme.colors.secondaryVertical};
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
    }
`;

export const SearchFormButtonLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: ${props => props.theme.fontSizes.m}px;
    border: ${props => props.theme.borders.none};
    outline: none;
    padding-left: ${props => props.theme.sizes(1)};
    padding-right: ${props => props.theme.sizes(1)};

    &::placeholder {
        font: inherit;
        font-size: ${props => props.theme.fontSizes.s}px;
    }
`;

// for Movies part
export const MoviesList = styled.ol`
    margin: 0;
    padding: 0;
`;

export const MovieItem = styled.li`
    color: ${props => props.theme.colors.textColor};
`;

export const MovieLink = styled(Link)`
    text-decoration: none;
    margin-left: ${props => props.theme.sizes(1)};
    color: ${props => props.theme.colors.textColor};

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.inFocusMovieColor};
        text-decoration: underline ${props => props.theme.colors.inFocusMovieColor};
    }
`;
