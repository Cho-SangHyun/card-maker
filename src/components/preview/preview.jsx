import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({cards}) => {
	return(
		<section className={styles.preview}>
			<h2>Preview</h2>
			<ul className={styles.cards}>
				{
					Object.keys(cards).map(key => {
						return <Card key={key} card={cards[key]}/>
					})
				}
			</ul>
		</section>
	);
};

export default Preview;