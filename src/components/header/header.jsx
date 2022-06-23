import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
  return(
  	<header className={styles.header}>
			<h1 className={styles.headerTitle}>Business Card Maker</h1>
			{onLogout && <button onClick={onLogout} className={styles.logoutBtn}>Logout</button>}
		</header>
  );
}
            

export default Header;