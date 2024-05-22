/**
 * @file index.js
 * @description Header navigation bar component.
 * @note This is a sub-component of the <Header /> component>
 */

'use strict';
import PropTypes from 'prop-types';
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

NavbarList.propTypes = {
    children: function (props, propName, componentName) {
        let children_value = props[propName],
            child_component_name;
        if (children_value) {
            if (
                children_value.length > 1 &&
                typeof children_value.every === 'function'
            ) {
                if (
                    children_value.every((element) => {
                        if (element.type.name !== NavbarItem.name) return false;
                    })
                ) {
                    child_component_name = NavbarItem.name;
                }
            } else {
                child_component_name =
                    children_value.type && children_value.type.name
                        ? children_value.type.name
                        : children_value.type;
            }
        }

        if (
            (child_component_name &&
                child_component_name !== NavbarItem.name) ||
            typeof children_value === 'string'
        ) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    '` supplied to' +
                    ' `' +
                    componentName +
                    `\`. This component only accept ${NavbarItem.name} component nas children.`
            );
        }
    },
};

/**
 * Navbar item component.
 * @param {Object} props Component properties.
 * @param {String} props.id Navbar item id.
 * @param {String} props.text Navbar item text.
 * @param {String} props.icon  Navbar item icon classes.
 * @param {String} props.to React router dom 'to' attribute value of the 'Link' component. (optional)
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

NavbarItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
    children: function (props, propName, componentName) {
        let children_value = props[propName],
            child_component_name;
        if (children_value) {
            if (
                children_value.length > 1 &&
                typeof children_value.every === 'function'
            ) {
                if (
                    children_value.every((element) => {
                        if (element.type.name !== NavbarItem.name) return false;
                    })
                ) {
                    child_component_name = NavbarItem.name;
                }
            } else {
                child_component_name =
                    children_value.type && children_value.type.name
                        ? children_value.type.name
                        : children_value.type;
            }
        }

        if (
            (child_component_name &&
                child_component_name !== NavbarItem.name) ||
            typeof children_value === 'string'
        ) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    '` supplied to' +
                    ' `' +
                    componentName +
                    `\`. This component only accept ${NavbarItem.name} component nas children.`
            );
        }
    },
};

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
