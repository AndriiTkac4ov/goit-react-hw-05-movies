import styled from 'styled-components';

export const MoviesTrendSection = styled.section`
    padding-top: ${props => props.theme.sizes(2)};
    padding-right: ${props => props.theme.sizes(3)};
    padding-left: ${props => props.theme.sizes(3)};
    padding-bottom: ${props => props.theme.sizes(2)};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.homeBackground};
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: ${props => props.theme.fontSizes.m}px;
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.inFocusColor};
`;