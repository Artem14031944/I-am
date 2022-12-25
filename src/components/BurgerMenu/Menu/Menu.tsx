import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';


interface IMenu {
    active: boolean;
    setActive: any;
};


const Menu = ({active, setActive}:IMenu) => {
  return (
    <div className={active ? `${styles.menu}${styles.active}` : styles.menu}>
        <div className={styles.menuContent}>
            <div className={styles.links}>
                <NavLink 
                    onClick={() => setActive(false)}
                    to="/"
                    style={({isActive}) => ({color : isActive ? 
                        "var(--background-button)"
                        : ""})}
                >
                    Home
                </NavLink>
                <NavLink 
                    onClick={() => setActive(false)}
                    to="/works"
                    style={({isActive}) => ({color : isActive ? 
                        "var(--background-button)"
                        : ""})}
                >
                    Works
                </NavLink>
                <NavLink 
                    onClick={() => setActive(false)}
                    to="/blog"
                    style={({isActive}) => ({color : isActive ? 
                        "var(--background-button)"
                        : ""})}
                >
                    Blog
                </NavLink>
                <NavLink 
                    onClick={() => setActive(false)}
                    to="/contact"
                    style={({isActive}) => ({color : isActive ? 
                        "var(--background-button)"
                        : ""})}
                >
                    Contact
                </NavLink>
            </div>
        </div>
    </div>
  )
};

export default Menu;