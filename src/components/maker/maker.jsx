import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        winterID: {
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
        karinaID: {
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
        dahyunID: {
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
    });
    
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

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.makerSection}>
                <Editor 
                    cards={cards} 
                    createCard={createOrUpdateCard} 
                    deleteCard={deleteCard} 
                    updateCard={createOrUpdateCard}
                />
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;