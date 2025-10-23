import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Home;