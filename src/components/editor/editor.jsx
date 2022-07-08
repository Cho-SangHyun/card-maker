import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardCreateForm from '../card_create_form/card_create_form';
import styles from './editor.module.css';

const Editor = ({FileInput, cards, createCard, deleteCard, updateCard}) => {
	return(
		<section className={styles.editor}>
			<h2>Editor</h2>
			{
				Object.keys(cards).map(key => {
					return <CardEditForm 
								key={key} 
								card={cards[key]} 
								deleteCard={deleteCard}
								updateCard={updateCard}
								FileInput={FileInput}
							/>;
				})
			}
			<CardCreateForm FileInput={FileInput} onCreate={createCard}/>
		</section>
	);
};

export default Editor;