import { FC } from 'react';
import styles from './Blog.module.css';

const Blog:FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Blog</h2>
      </div>
    </div>
  )
};

export default Blog;