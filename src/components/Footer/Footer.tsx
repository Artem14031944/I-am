import { FC } from 'react';
import icon_faceBook from '../../assets/icon/icon_fb.svg';
import icon_twitter from '../../assets/icon/icon_Group.svg';
import icon_instagram from '../../assets/icon/icon_insta.svg';
import icon_linkedin from '../../assets/icon/icon_Linkedin.svg';
import styles from './Footer.module.css';

const Footer:FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.icons}>
            <img src={icon_faceBook} alt={"faceBook"}/>
            <img src={icon_twitter} alt={"twitter"}/>
            <img src={icon_instagram} alt={"instagram"}/>
            <img src={icon_linkedin} alt={"linkedin"}/>
        </div>
        <p className={styles.text}>Copyright ©2020 All rights reserved </p>
    </footer>
  )
}

export default Footer;