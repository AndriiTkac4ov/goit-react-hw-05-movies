import { AppHeader } from './Layout.styled';
import { Navigation } from '../Navigation/Navigation';
import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Loader } from "../Loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
    return (
        <>
            <AppHeader>
                <Navigation />
            </AppHeader>
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
            <ToastContainer />
        </>
    )
}