import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header:FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.links}>
            <NavLink 
                to="/"
                style={({isActive}) => ({color : isActive ? 
                    "var(--background-button)"
                    : ""})}
            >
                Home
            </NavLink>
            <NavLink 
                to="/works"
                style={({isActive}) => ({color : isActive ? 
                    "var(--background-button)"
                    : ""})}
            >
                Works
            </NavLink>
            <NavLink 
                to="/blog"
                style={({isActive}) => ({color : isActive ? 
                    "var(--background-button)"
                    : ""})}
            >
                Blog
            </NavLink>
            <NavLink 
                to="/contact"
                style={({isActive}) => ({color : isActive ? 
                    "var(--background-button)"
                    : ""})}
            >
                Contact
            </NavLink>
        </div>
    </header>
  )
};

export default Header;
