/**
 * @file index.js
 * @description Header navigation bar component.
 * @note This is a sub-component of the <Header /> component>
 */

'use strict';
import { Link } from 'react-router-dom';
import configs from '../../../../../configs';
import * as styles from './Navbar.module.css';

/**
 * Navbar list component.
 * @param {Object} props Component properties.
 * @param {*} props.children <NavbarItem /> component(s).
 * @returns Returns the component.
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
 * @returns Returns the component.
 */
function NavbarItem({ id, text, icon, to, children }) {
    return (
        <li id={id}>
            <Link
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
                tabIndex={-1}
            >
                {icon ? <i className={icon}></i> : null}
                {text}
            </Link>
            {children ? <NavbarList>{children}</NavbarList> : null}
        </li>
    );
}

/**
 * Header navigation bar component.
 * @returns Returns the component.
 */
function Navbar() {
    return (
        <nav id="header-navbar" className={styles['navbar']}>
            <NavbarList>
                <NavbarItem text="Home" to={configs.routes.home} />

                <NavbarItem text="Samples" icon="fas fa-caret-down">
                    <NavbarItem
                        text="Buttons"
                        to={configs.routes.samples.button}
                    />
                    <NavbarItem
                        text="Inputs"
                        to={configs.routes.samples.input}
                    />
                    <NavbarItem
                        text="Checkboxes"
                        to={configs.routes.samples.checkbox}
                    />
                    <NavbarItem
                        text="Radios"
                        to={configs.routes.samples.radio}
                    />
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
