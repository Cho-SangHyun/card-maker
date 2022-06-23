import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './login.module.css';

const Login = ({authService}) => {
  // react-router v6부터는 useNavigate사용
  const navigate = useNavigate();
  const gotoMaker = (userId) => {
    // 첫 인자 : 경로, 두 번째 인자 : 객체형태로 안에 state를 써서 원하는 데이터를 함께 넘길 수 있음, 이를 받는 컴포넌트에서 useLocation으로 활용해 받음
    navigate('/maker', {
      state: {
        id: userId,
      },
    });
  };

  const onLogin = (event) => {
    console.log("login try");
    authService
      .login(event.currentTarget.textContent)
      .then(data => {gotoMaker(data.user.uid)});
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(user){
        gotoMaker(user.uid);
      }
    });
  });

  return (
    <div className={styles.login}>
      <section className={styles.loginSection}>
        <Header />
          <section className={styles.loginMenu}>
            <h1>Login</h1>
            <ul>
              <li><button onClick={onLogin}>Google</button></li>
              <li><button onClick={onLogin}>Github</button></li>
            </ul>
          </section>
        <Footer />
      </section>
    </div>
  )
};

export default Login;