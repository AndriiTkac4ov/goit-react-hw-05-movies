import { Route, Routes } from 'react-router-dom';
import { AppHeader, StyledNavLink } from './App.styled';
import { Home } from '../Home/Home';
import { Movies } from '../Movies/Movies';

export const App = () => {
  return (
    <>
      <AppHeader>
        <nav>
          <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledNavLink to='movies'>Movies</StyledNavLink>
        </nav>
      </AppHeader>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
      </Routes>
    </>
  );
};
