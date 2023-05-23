import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isHamburgerActive, setHamburgerActivity] = useState(false);

    return <nav className={styles.navbar}>
        <div className={`${styles.navbarItems} ${isHamburgerActive && styles.activeNavbarItems}`}>
            <Link className={styles.logo} to='/'>Logo</Link>
            <Link className={styles.navLink} to='/products'>Products</Link>
            <Link className={styles.navLink} to='/login'>Login</Link>
        </div>
        <div className={styles.hamburgerNavbar}>
            <img onClick={() => setHamburgerActivity(!isHamburgerActive)} className={styles.hamburger} src='https://openclipart.org/image/2000px/221605' alt='hamburger' width='35' />
        </div>
    </nav >
};

export default Navbar;