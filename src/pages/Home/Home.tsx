import { FC } from 'react';
import AboutMe from '../../components/HomeComponents/AboutMe/AboutMe';
import RecentPosts from '../../components/HomeComponents/RecentPosts/RecentPosts';
import FeaturedWorks from '../../components/HomeComponents/FeaturedWorks/FeaturedWorks';
import styles from './Home.module.css';

const Home:FC = () => {
  return (
    <div className={styles.home}>
      <AboutMe/>
      <RecentPosts/>
      <FeaturedWorks/>
    </div>
  )
};

export default Home;
