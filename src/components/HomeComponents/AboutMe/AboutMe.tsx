import { FC } from 'react';
import img_avatar from '../../../assets/img/img_avatar.png';
import styles from './AboutMe.module.css';

const AboutMe:FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2 className={styles.title}>
                Hi, I am John,<br/> Creative Technologist
            </h2>
            <p className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className={styles.btn}>
                Download Resume
            </button>
        </div>
        <img 
            src={img_avatar} 
            alt={"avatar"}
            className={styles.avatar}
        />
    </div>
  )
};

export default AboutMe;
