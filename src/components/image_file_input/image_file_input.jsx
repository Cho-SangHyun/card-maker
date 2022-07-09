import React from 'react';
import { useRef, useState } from 'react';
import styles from "./image_file_input.module.css";

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const onButtonClick = (e) =>{
        e.preventDefault();
        inputRef.current.click();
    };

    const onChange = async (e) => {
        setLoading(true);
        console.log("loading..");
        try{
            const uploaded = await imageUploader.upload(e.target.files[0]);
            onFileChange({
                name: uploaded.original_filename,
                url: uploaded.url,
            });
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
            console.log("loading done");
        }
        
    };

    return(
        <div className={styles.container}>
            <input 
                ref={inputRef} 
                className={styles.input} 
                type="file" 
                accept='image/*' 
                name="file"
                onChange={onChange}
            />
            { !loading && (
                <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
                    {name || "No File"}
                </button>
            )}
            { loading && <div className={styles.loading}></div> }
        </div>
    )
};

export default ImageFileInput;