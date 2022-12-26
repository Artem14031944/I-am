import { FC } from 'react';
import styles from './Contact.module.css';

const Contact:FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
      </div>
    </div>
  )
};

export default Contact;