import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: "winterID",
            name: "Winter",
            company: "SM",
            theme: "light",
            title: "singer",
            email: "winter@naver.com",
            message: "I love U",
            fileName: "winter",
            fileURL: ""
        },
        {
            id: "karinaID",
            name: "Karina",
            company: "SM",
            theme: "dark",
            title: "dancer",
            email: "Karina@naver.com",
            message: "I love Me",
            fileName: "karina",
            fileURL: null
        },
        {
            id: "dahyunID",
            name: "Dahyun",
            company: "JYP",
            theme: "colorful",
            title: "singer",
            email: "dahyun@naver.com",
            message: "I love U",
            fileName: "dahyun",
            fileURL: null
        }
    ]);

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

    const createCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    };

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.makerSection}>
                <Editor cards={cards} createCard={createCard} />
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;