import { FC, useEffect, useState } from 'react';
import CardWork, { Iitem } from '../../CardWork/CardWork';
import axios from 'axios';
import styles from './FeaturedWorks.module.css';

const FeaturedWorks:FC = () => {
  const [works, setWorks] = useState([]);
  const [countWork, setCountWork] = useState(3);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${countWork}`)
    .then(({data}) => setWorks(data))
    .catch(err => console.log(err))
  }, []);

  console.log(works, 'works')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured works</h2>
      <div className={styles.works}>
      {works.map((work:Iitem) => <div key={work.id}><CardWork work={work}/></div>)}
      </div>
    </div>
  )
};

export default FeaturedWorks;