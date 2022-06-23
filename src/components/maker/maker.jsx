import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Maker = ({authService}) => {
    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                navigate('/');
            }
        })
    })

    return(
        <section>
            <Header />
            <button onClick={onLogout}>Logout</button>
            <h1>Maker</h1>
            <Footer />
        </section>
    )
};

export default Maker;