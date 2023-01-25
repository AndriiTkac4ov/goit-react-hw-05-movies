import image from './not-found.gif';
import { NotFoundSection, NotFoundImg, NotFoundLink } from './NotFound.styled';

export function NotFound() {
    return (
        <NotFoundSection>
            <NotFoundImg src={image} alt="Wrong page in URL adress" />
            <p>Opsss! This page doesn't exist.</p>
            <NotFoundLink to="/">Open home page</NotFoundLink>
        </NotFoundSection>
    )
}