import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recentPostsAC } from '../../redux/redusers';
import CardBlog, { IItems } from '../../components/CardBlog/CardBlog';
import axios from 'axios';
import styles from './Blog.module.css';

const Blog:FC = () => {
  const dispatch = useDispatch();
  const { recentPosts } = useSelector((state: any) => state.mainReducer);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=4')
    .then(({data}) => dispatch(recentPostsAC(data)))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Blog</h2>
        <div className={styles.blogs}>
          {recentPosts?.map((blog:IItems) => <div key={blog.id}><CardBlog blog={blog}/></div>)}
        </div>
      </div>
    </div>
  )
};

export default Blog;