import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({FileInput, authService, cardRepository}) => {
    const location = useLocation();
    const [userId, setUserId] = useState(location.state && location.state.userId);
    const [cards, setCards] = useState({});

    const navigate = useNavigate();

    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        if(!userId)
            return;
        const stopSync = cardRepository.syncCards(userId, (data) => {
            setCards(data);
        });

        // useEffect에서 함수 리턴하면 리액트가 알아서 컴포넌트가 언마운트될때 리턴되는 함수를 호출.
        // 리소스 정리, 메모리 정리 등이 가능하다!
        return () => {stopSync();};
    }, [userId]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            }
            else{
                navigate('/');
            }
        });
    });

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.deleteCard(userId, card);
    };

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
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
                    FileInput={FileInput}
                />
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;