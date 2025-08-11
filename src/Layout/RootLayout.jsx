import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router';
import { ThemeProvider } from '../context/ThemeContext';

const RootLayout = () => {
    return (
        <div>
            <ThemeProvider>
                <Navbar />
            </ThemeProvider>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;