import React, { useRef } from 'react';
import styles from "./card_edit_form.module.css";
import Button from '../button/button';

const CardEditForm = ({FileInput, card, deleteCard, updateCard}) => {
	const {name, company, title, email, theme, message, fileName } = card;

	const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();

	const onDeleteCard = () => {
		deleteCard(card);
	};
	
	const onFileChange = ({name, url}) => {
		updateCard({
			...card,
			fileName: name,
			fileURL : url,
		});
	}

	const onChange = (event) => {
		if(event.currentTarget == null)
			return;
		event.preventDefault();
		updateCard({
			...card,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	return(
		<form className={styles.form}>
			<input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
			<input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange} />
			<select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="colorful">Colorful</option>
			</select>
			<input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
			<input ref={emailRef} className={styles.input} type="text" name="email" value={email} onChange={onChange} />
			<textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
			<div className={styles.fileInput}>
				<FileInput name={fileName} onFileChange={onFileChange}/>
			</div>
			<Button name="Delete" onClick={onDeleteCard} />
		</form>
	)
};

export default CardEditForm;