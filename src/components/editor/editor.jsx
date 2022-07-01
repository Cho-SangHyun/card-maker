import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardCreateForm from '../card_create_form/card_create_form';
import styles from './editor.module.css';

const Editor = ({cards, createCard}) => {
	return(
		<section className={styles.editor}>
			<h2>Editor</h2>
			{
				cards.map(card => {
					return <CardEditForm key={card.id} card={card} />;
				})
			}
			<CardCreateForm onCreate={createCard}/>
		</section>
	);
};

export default Editor;