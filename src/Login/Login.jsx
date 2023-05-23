import React from 'react';
import styles from './Login.module.css';

const LoginPage = () => {
    return <div className={styles.loginWrapper}>
        <div className={styles.login}>
            <h2>Login</h2>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor='username'>
                        Username
                        <input type='text' id='username' className={styles.inputField} name='username' placeholder='Введите имя пользователя' />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor='password'>
                        Password
                        <input type='password' className={styles.inputField} id='password' name='password' placeholder='Введите ваш пароль' />
                    </label>
                </div>
                <button className={styles.loginButton} type='submit'>Login</button>
            </form>
        </div>
    </div>
}

export default LoginPage;
