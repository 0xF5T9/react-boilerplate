/**
 * @file index.js
 * @description Header mobile menu icon button component. (with dropdown window)
 * @note This component use <IconButton /> and <DropdownWindow /> components.
 */

'use strict';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton';
import DropdownWindow from '../../../DropdownWindow';
import * as styles from './MobileMenu.module.css';

/**
 * Mobile menu list item component.
 * @param {Object} props Component properties.
 * @param {String} props.id List item id. (optional)
 * @param {String} props.className List item additional class names. (optional)
 * @param {String} props.text List item text.
 * @param {String} props.icon List item icon classes.
 * @param {String} props.to React router dom 'to' attribute value of the 'Link' component. (optional)
 * @param {*} props.children List item children <ListItem />. (optional)
 * @param {*} props.listItemProps Additional list item element properties (optional)
 * @returns Returns the list item component.
 */
function ListItem({
    id,
    className = '',
    text = '',
    icon = '',
    to = '#',
    children,
    listItemProps,
}) {
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
        <li
            id={id}
            className={className}
            onClick={handleClick}
            {...listItemProps}
        >
            <Link to={to}>
                {icon ? <i className={icon}></i> : null}
                {text}
            </Link>
            {children ? <List>{children}</List> : null}
        </li>
    );
}

/**
 * Mobile menu item list component.
 * @param {Object} props Component properties.
 * @param {String} props.id Item list id (optional)
 * @param {String} props.className Item list class names (optional)
 * @param {*} props.children Item list children <ListItem /> (required)
 * @param {*} props.listProps Additional item list element properties (optional)
 * @returns Returns the list component.
 */
function List({ id, className = '', children, listProps }) {
    return (
        <ul
            id={id}
            className={className}
            onClick={(event) => event.stopPropagation()}
            {...listProps}
        >
            {children}
        </ul>
    );
}

/**
 * Header mobile menu icon button (with dropdown window).
 * @returns Returns the header mobile menu icon button component.
 */
function MobileMenu() {
    return (
        <IconButton
            icon="fas fa-bars"
            iconDropdown="fas fa-bars-staggered"
            className={styles['mobile-menu-icon']}
        >
            <DropdownWindow className={styles['mobile-menu-dropdown']}>
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

export default MobileMenu;
