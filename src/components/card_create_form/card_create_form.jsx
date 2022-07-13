import React, { useRef } from 'react';
import styles from "./card_create_form.module.css";
import Button from '../button/button';
import { useState } from 'react';

const CardCreateForm = ({FileInput, onCreate}) => {
    const formRef = useRef();
	const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const themeRef = useRef();

    const [file, setFile] = useState({fileName: null, fileURL: null});
    const onFileChange = (file) => {
        setFile({
            fileName: file.name,
            fileURL: file.url,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newCard = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            theme: themeRef.current.value,
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };

        formRef.current.reset();
        setFile({
            fileName: null,
            fileURL: null
        });
        onCreate(newCard);
    };
	return(
		<form ref={formRef} className={styles.form}>
			<input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name"/>
			<input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company" />
			<select ref={themeRef} className={styles.select} name="theme">
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="colorful">Colorful</option>
			</select>
			<input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
			<input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
			<textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message"></textarea>
			<div className={styles.fileInput}>
				<FileInput name={file.fileName} onFileChange={onFileChange}/>
			</div>
			<Button name="Create" onClick={onSubmit} />
		</form>
	)
};

export default CardCreateForm;