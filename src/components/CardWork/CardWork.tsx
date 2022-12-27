import { FC } from 'react';
import styles from './CardWork.module.css';


export interface Iitem {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export interface Iwork {
    work: Iitem,
};

const CardWork: FC<Iwork> = ({work}) => {

    const { title, url } = work;
    
    return (
        <div className={styles.workCard}>
            <div className={styles.imgBlock}>
                <img 
                    src={url} 
                    alt={""}
                    className={styles.img}
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title.toLocaleUpperCase()}</h2>
                <div className={styles.info}>
                    <div className={styles.date}><p>2020</p></div>
                    <span className={styles.infoPlus}>Dashboard</span>
                </div>
                <p className={styles.text}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </div>
    )
};

export default CardWork;