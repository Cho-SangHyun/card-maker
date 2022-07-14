import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => {
    return(
        <div className={styles.footer}>
            <h1 className={styles.footerTitle}>Footer</h1>
        </div>
    );
});
            

export default Footer;