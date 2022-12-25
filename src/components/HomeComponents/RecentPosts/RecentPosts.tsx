import { FC, useEffect, useState } from 'react';
import CardPost, { Iitem } from '../../CardPost/CardPost';
import Loader from '../../Loader/Loader';
import axios from 'axios';
import styles from './RecentPosts.module.css';

const RecentPosts:FC = () => {
  const [posts, setPosts] = useState([]);
  const [postLimit, setPostLimit] = useState(false);
  const [notData, setNotData] = useState(false);

  const showAllPosts = () => setPostLimit(prev => !prev); 

  useEffect(() => {
    setNotData(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit ? 10 : 2}`)
    .then(({data}) => {
      setNotData(false);
      setPosts(data)
    })
    .catch(err => console.log(err))
  }, [postLimit]);


  return (
    <div className={styles.container}>
     <div className={styles.content}>
      <div className={styles.title}>
        <h4>Recent posts</h4>
        <p onClick={showAllPosts}>
          {postLimit ? "Hide posts" : "View all" } 
        </p>
      </div>
      <div className={styles.posts}>
        {posts.map((post: Iitem) => {
          return <div key={post.id}><CardPost post={post}/></div>
        })}
      </div>
     </div>
    </div>
  )
};

export default RecentPosts;
