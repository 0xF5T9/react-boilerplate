/**
 * @file index.js
 * @description Header mobile navigation menu icon button, with popup window.
 */

'use strict';
import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import configs from '../../../../../configs';

import { GlobalContext } from '../../../Context/Global';
import IconButton, { IconButtonStyles } from '../IconButton';
import PopupWindow, { PopupStyles } from '../../../PopupWindow';
import * as styles from './MobileNavMenuIcon.module.css';

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
    const Component = to ? NavLink : 'a';

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
            <Component
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
                className={
                    to
                        ? ({ isActive, isPending }) =>
                              isPending
                                  ? styles['is-pending']
                                  : isActive
                                    ? styles['is-active']
                                    : ''
                        : ''
                }
            >
                {icon ? <i className={icon}></i> : null}
                {text}
            </Component>
            {children ? <List>{children}</List> : null}
        </li>
    );
}

ListItem.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
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
                        if (element.type.name !== ListItem.name) return false;
                    })
                ) {
                    child_component_name = ListItem.name;
                }
            } else {
                child_component_name =
                    children_value.type && children_value.type.name
                        ? children_value.type.name
                        : children_value.type;
            }
        }

        if (
            (child_component_name && child_component_name !== ListItem.name) ||
            typeof children_value === 'string'
        ) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    '` supplied to' +
                    ' `' +
                    componentName +
                    `\`. This component only accept ${ListItem.name} component nas children.`
            );
        }
    },
};

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

List.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
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
                        if (element.type.name !== ListItem.name) return false;
                    })
                ) {
                    child_component_name = ListItem.name;
                }
            } else {
                child_component_name =
                    children_value.type && children_value.type.name
                        ? children_value.type.name
                        : children_value.type;
            }
        }

        if (
            (child_component_name && child_component_name !== ListItem.name) ||
            typeof children_value === 'string'
        ) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    '` supplied to' +
                    ' `' +
                    componentName +
                    `\`. This component only accept ${ListItem.name} component nas children.`
            );
        }
    },
};

/**
 * Mobile navigation menu icon button, with popup window.
 * @returns Returns the component.
 */
function MobileNavMenuIcon() {
    const { deviceType } = useContext(GlobalContext);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setShowPopup(false);
    }, [deviceType.deviceWidth]);

    function handleClick() {
        setShowPopup(!showPopup);
    }

    function handleBackgroundClick() {
        setShowPopup(false);
    }

    return (
        <div>
            <PopupWindow
                interactive
                visible={showPopup}
                popperOptions={{
                    strategy: 'fixed',
                    modifiers: [
                        {
                            name: 'popperOffsets',
                            enabled: false,
                        },
                    ],
                }}
                onClickOutside={handleBackgroundClick}
                customAnimation={{
                    classIn: styles['animation-in'],
                    classOut: styles['animation-out'],
                    outAnimationName: styles['popup-out'],
                }}
                render={(attrs) => (
                    <div
                        className={`${styles['mobile-nav-menu-popup']} ${PopupStyles['popup-window']}`}
                    >
                        <ul>
                            <ListItem to={configs.routes.home} text="Home" />

                            <ListItem icon="fas fa-caret-right" text="Samples">
                                <ListItem
                                    to={configs.routes.samples.button}
                                    text="Button"
                                />
                                <ListItem
                                    to={configs.routes.samples.input}
                                    text="Input"
                                />
                                <ListItem
                                    to={configs.routes.samples.checkbox}
                                    text="Checkbox"
                                />
                                <ListItem
                                    to={configs.routes.samples.radio}
                                    text="Radio"
                                />
                            </ListItem>

                            <ListItem
                                icon="fas fa-caret-right"
                                text="Downloads"
                            >
                                <ListItem text="Shutdown Timer" />
                                <ListItem text="ASC File Cryptor" />
                            </ListItem>

                            <ListItem
                                icon="fas fa-caret-right"
                                text="Dependencies"
                            >
                                <ListItem text="React v18.2.0" />
                                <ListItem text="React Router v6.23.0" />
                                <ListItem text="TippyJS v4.2.6" />
                                <ListItem text="PropTypes v15.8.1" />
                            </ListItem>
                        </ul>
                    </div>
                )}
            >
                <IconButton
                    icon={`${showPopup ? 'fas fa-bars-staggered' : 'fas fa-bars'}`}
                    className={`${styles['mobile-nav-menu-icon']} ${showPopup ? IconButtonStyles['is-popup-open'] : ''}`}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
}

export default MobileNavMenuIcon;
