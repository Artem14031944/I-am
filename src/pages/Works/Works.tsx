import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import CardWork, { Iitem } from '../../components/CardWork/CardWork';
import styles from './Works.module.css';

const Works:FC = () => {

  const { recentWorks } = useSelector((state:any) => state.mainReducer);

  if(recentWorks.length) {
    
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Work</h2>
        <div className={styles.works}>
          {recentWorks.length ? 
          recentWorks?.map((work:Iitem) => <div key={work.id}><CardWork work={work}/></div>)
          : <div className={styles.loader}><Loader/></div>}
        </div>
      </div>
    </div>
  )
};

export default Works;