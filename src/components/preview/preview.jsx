import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({cards}) => {
	return(
		<section className={styles.preview}>
			<h2>Preview</h2>
			<ul className={styles.cards}>
				{
					cards.map(card => {
						return <Card card={card}/>
					})
				}
			</ul>
		</section>
	);
};

export default Preview;