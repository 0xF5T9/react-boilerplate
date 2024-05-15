/**
 * @file index.js
 * @description Header mobile navigation menu icon button component. (with dropdown window)
 * @note This component use <IconButton /> and <DropdownWindow /> components.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';
import DropdownWindow from '../../../DropdownWindow';
import * as styles from './MobileNavMenu.module.css';

/**
 * Mobile navigation menu list item component.
 * @param {Object} props Component properties.
 * @param {String} props.id List item id.
 * @param {String} props.className List item additional class names.
 * @param {String} props.text List item text.
 * @param {String} props.icon List item icon classes.
 * @param {String} props.to React router dom 'to' attribute value of the 'Link' component.
 * @param {*} props.children List item children <ListItem />.
 * @returns Returns the component.
 */
function ListItem({ id, className, text, icon, to, children }) {
    // Check if the list item have an inner list. If so reveal it.
    function handleClick(event) {
        const inner_list = event.currentTarget.querySelector('&>ul');
        if (inner_list) {
            if (event.currentTarget.classList.contains(styles['is-open'])) {
                event.currentTarget.classList.remove(styles['is-open']);
                const icon = event.currentTarget.querySelector('a>i');
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-right');
            } else {
                event.currentTarget.classList.add(styles['is-open']);
                const icon = event.currentTarget.querySelector('a>i');
                icon.classList.remove('fa-caret-right');
                icon.classList.add('fa-caret-down');
            }
        }
    }

    return (
        <li id={id} className={className} onClick={handleClick}>
            <Link
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
            >
                {icon ? <i className={icon}></i> : null}
                {text}
            </Link>
            {children ? <List>{children}</List> : null}
        </li>
    );
}

/**
 * Mobile navigation menu item list component.
 * @param {Object} props Component properties.
 * @param {String} props.id Item list id.
 * @param {String} props.className Item list class names.
 * @param {*} props.children Item list children <ListItem />.
 * @returns Returns the component.
 */
function List({ id, className, children }) {
    return (
        <ul
            id={id}
            className={className}
            onClick={(event) => event.stopPropagation()}
        >
            {children}
        </ul>
    );
}

/**
 * Header mobile navigation menu icon button (with dropdown window).
 * @returns Returns the component.
 */
function MobileNavMenu() {
    return (
        <IconButton
            icon="fas fa-bars"
            iconDropdown="fas fa-bars-staggered"
            className={styles['mobile-nav-menu-icon']}
        >
            <DropdownWindow className={styles['mobile-nav-menu-dropdown']}>
                <ul>
                    <ListItem to="/" text="Home" />

                    <ListItem icon="fas fa-caret-right" text="Samples">
                        <ListItem to="/samples/button" text="Button" />
                        <ListItem to="/samples/input" text="Input" />
                        <ListItem to="/samples/checkbox" text="Checkbox" />
                        <ListItem to="/samples/radio" text="Radio" />
                    </ListItem>

                    <ListItem icon="fas fa-caret-right" text="Downloads">
                        <ListItem text="Shutdown Timer" />
                        <ListItem text="ASC File Cryptor" />
                    </ListItem>

                    <ListItem icon="fas fa-caret-right" text="Dependencies">
                        <ListItem text="React v18.2.0" />
                        <ListItem text="React Router v6.23.0" />
                    </ListItem>
                </ul>
            </DropdownWindow>
        </IconButton>
    );
}

export default MobileNavMenu;
