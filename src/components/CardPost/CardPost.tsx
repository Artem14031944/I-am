import { FC } from 'react';
import styles from './CardPost.module.css';


export interface Iitem {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface Ipost {
    post: Iitem,
};

const CardPost : FC<Ipost> = ({post}) => {

    const {title, body} = post;
    
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.info}>
                12 Feb 2020 
                <span className={styles.center}>|</span> 
                Design, Pattern
            </p>
            <p className={styles.text}>{body}</p>
        </div>
    )
}

export default CardPost;