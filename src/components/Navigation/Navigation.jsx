import { NavItem } from './Navigation.styled';

export const Navigation = () => {
    return (
        <nav>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/movies'>Movies</NavItem>
        </nav>
    )
}