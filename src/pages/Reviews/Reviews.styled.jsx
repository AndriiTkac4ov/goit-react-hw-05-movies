import styled from 'styled-components';

export const ReviewsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: ${props => props.theme.sizes(0)};
`;

export const ReviewItem = styled.li`
    &:not(:last-child) {
        padding-bottom: ${props => props.theme.sizes(1)};
        margin-bottom: ${props => props.theme.sizes(2)};
        border-bottom: ${props => props.theme.borders.normal};
        border-color: ${props => props.theme.colors.textColor};
    }
`;

export const ReviewAuthor = styled.h4`
    margin-left: ${props => props.theme.sizes(3)};
    margin-bottom: ${props => props.theme.sizes(1)};
`;

export const ReviewData = styled.time`
    display: inline-block;
    margin-left: ${props => props.theme.sizes(3)};
    margin-bottom: ${props => props.theme.sizes(2)};
    font-weight: ${props => props.theme.fontWeights.bold};
`;

export const ReviewText = styled.p`
    text-indent: ${props => props.theme.sizes(6)};
    margin-bottom: ${props => props.theme.sizes(1)};
`;