import { FC }  from 'react';
import styles from './CardBlog.module.css';


export interface IItems {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};

export interface IBlog {
    blog: IItems
};

const CardBlog: FC<IBlog> = ({blog}) => {
    
    const {name, body} = blog;

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{name.toLocaleUpperCase()}</h2>
            <p className={styles.info}>
                12 Feb 2020 
                <span className={styles.center}>|</span> 
                <span className={styles.nameJob}>Design, Pattern</span>
            </p>
            <p className={styles.text}>{body}</p>
        </div>
    )
};

export default CardBlog;