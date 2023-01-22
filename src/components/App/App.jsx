import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppHeader, NavItem } from './App.styled';
import { Home } from '../Home/Home';
import { Movies } from '../../pages/Movies/Movies';
// import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <AppHeader>
        <nav>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='movies'>Movies</NavItem>
        </nav>
      </AppHeader>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        {/* <Route path='/movies/:movieId' element={<MovieDetails />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
};
