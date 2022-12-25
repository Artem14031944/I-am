import { FC, useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Menu from './Menu/Menu';
import styles from './BurgerMenu.module.css';

const BurgerMenu:FC = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={styles.burgerMenu}>
            <div className={styles.burger}>
                <Hamburger 
                    toggled={isOpen} 
                    toggle={setOpen} 
                    color="var(--color-blue-dark)"
                />
            </div>
            <Menu active={isOpen} setActive={setOpen}/>
        </div>
    )
};

export default BurgerMenu;