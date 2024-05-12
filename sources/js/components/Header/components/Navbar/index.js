/**
 * @file index.js
 * @description Header navigation bar component.
 */

'use strict';
import { Link } from 'react-router-dom';
import * as styles from './Navbar.module.css';

/**
 * Navbar list component.
 * @param {Object} props Component properties.
 * @param {*} props.children <NavbarItem /> component(s).
 * @returns Returns the navbar list component.
 */
function NavbarList({ children }) {
    return <ul>{children}</ul>;
}

/**
 * Navbar item component.
 * @param {Object} props Component properties.
 * @param {*} props.id Navbar item id.
 * @param {string} props.text Navbar item text.
 * @param {string} props.icon  Navbar item icon classes.
 * @param {string} props.to React router dom 'to' attribute value of the 'Link' component. (optional)
 * @param {*} props.children <NavbarItem /> component(s).
 * @returns Returns the navbar item component.
 */
function NavbarItem({ id, text = '', icon = '', to = '#', children }) {
    return (
        <li id={id}>
            <Link to={to}>
                {icon ? <i className={icon}></i> : null}
                {text}
            </Link>
            {children ? <NavbarList>{children}</NavbarList> : null}
        </li>
    );
}

/**
 * Header navigation bar component.
 * @returns Returns the header navigation bar component.
 */
function Navbar() {
    return (
        <nav id="header-navbar" className={styles['navbar']}>
            <NavbarList>
                <NavbarItem text="Home" to="/" />

                <NavbarItem text="Samples" icon="fas fa-caret-down">
                    <NavbarItem text="Buttons" to="/samples/button" />
                    <NavbarItem text="Inputs" to="/samples/input" />
                    <NavbarItem text="Checkboxes" to="/samples/checkbox" />
                    <NavbarItem text="Radios" to="/samples/radio" />
                </NavbarItem>

                <NavbarItem text="Downloads" icon="fas fa-caret-down">
                    <NavbarItem text="Shutdown Timer" />
                    <NavbarItem text="ASC File Cryptor" />
                </NavbarItem>

                <NavbarItem text="Dependencies" icon="fas fa-caret-down">
                    <NavbarItem text="React v18.2.0" />
                    <NavbarItem text="React Router v6.23.0" />
                </NavbarItem>
            </NavbarList>
        </nav>
    );
}

export default Navbar;
