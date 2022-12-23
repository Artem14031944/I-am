import { FC } from 'react';
import styles from './RecentPosts.module.css';

const RecentPosts:FC = () => {
  return (
    <div className={styles.container}>
     <div className={styles.content}>
      <div className={styles.title}>
        <h4>Recent posts</h4>
        <p>View all</p>
      </div>
      <div className={styles.posts}>

      </div>
     </div>
    </div>
  )
}

export default RecentPosts;
