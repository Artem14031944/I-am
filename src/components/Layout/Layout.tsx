import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout:FC = () => {
  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.content}>
            <Outlet/>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
    </div>
  )
};

export default Layout;