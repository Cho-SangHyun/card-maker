import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

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
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.makerSection}>
                <h1>Maker</h1>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;