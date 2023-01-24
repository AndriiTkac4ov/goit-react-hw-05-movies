import { AppHeader } from './Layout.styled';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
    return (
        <>
            <AppHeader>
                <Navigation />
            </AppHeader>
            <main>
                <Outlet />
            </main>
            <ToastContainer />
        </>
    )
}