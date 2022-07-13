import {getDatabase, ref, remove, set, onValue} from 'firebase/database';

class CardRepository{
    constructor(){
        this.db = getDatabase();
    }

    saveCard(userId, card) {
        set(ref(this.db, `users/${userId}/cards/${card.id}`), card);
    }

    deleteCard(userId, card){
        remove(ref(this.db, `users/${userId}/cards/${card.id}`));
    }

    syncCards(userId, onUpdate){
        const cardRef = ref(this.db, `users/${userId}/cards`);
        onValue(cardRef, (snapshot) => {
            // firebase database가 업데이트될 때마다 아래 코드가 동작
            const data = snapshot.val();
            data && onUpdate(data);
        });
        return () => cardRef.off();
    }
}

export default CardRepository;