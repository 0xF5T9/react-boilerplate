/**
 * @file index.js
 * @description Header icon button with dropdown window (optional).
 * @note This is a sub-component of the <Header /> component.
 */
'use strict';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropdownWindow from '../../../DropdownWindow';
import * as styles from './IconButton.module.css';
import * as dropdownWindowStyles from '../../../DropdownWindow/DropdownWindow.module.css';

/**
 * Header icon button with dropdown window (optional).
 * @param {Object} props Component properties.
 * @param {String} props.id Button id.
 * @param {String} props.className Additional button class names.
 * @param {String} props.icon Icon classes.
 * @param {String} props.iconDropdown Icon classes to be used when the dropdown window is revealed (if exist).
 * @param {String} props.to React router dom 'to' attribute value of the 'Link' component.
 * @param {Function} props.onClick Button on-click callback.
 * @param {*} props.children <DropdownWindow> component.
 * @returns Returns the component.
 */
function IconButton({
    id,
    className,
    icon,
    iconDropdown,
    to,
    onClick,
    children,
}) {
    // Track the dropdown state to render the correct icon.
    const [dropdownVisibility, setDropdownVisibility] = useState(false),
        buttonRef = useRef();

    // Check if the dropdown window is closed by a background click.
    useEffect(() => {
        function handleBackgroundClick(event) {
            if (!buttonRef.current.contains(event.target))
                setDropdownVisibility(false);
        }

        if (iconDropdown) {
            window.addEventListener('click', handleBackgroundClick);
        }

        return () => {
            if (iconDropdown)
                window.removeEventListener('click', handleBackgroundClick);
        };
    }, []);

    function handleClick() {
        // Icon property must be specified.
        if (!icon) console.error("'icon' property is an empty string.");

        // Open the drop-down window if exists.
        if (children) {
            const dropdown_window = buttonRef.current.querySelector(
                `.${dropdownWindowStyles['dropdown-window']}`
            );
            if (dropdown_window) {
                if (!dropdown_window.classList.contains('is-open')) {
                    dropdown_window.classList.remove('is-close');
                    dropdown_window.classList.add('is-open');
                    setDropdownVisibility(true);
                } else {
                    dropdown_window.classList.remove('is-open');
                    dropdown_window.classList.add('is-close');
                    setDropdownVisibility(false);
                }
            }
        }

        // Run the callback function if provided.
        if (onClick) {
            if (typeof onClick != 'function')
                console.error("'onClick' property is not a function.");
            else onClick();
        }
    }

    return (
        <div
            ref={buttonRef}
            id={id}
            className={`${styles['header-icon-button']} ${className ? className : ''}`}
            onClick={handleClick}
        >
            <Link
                className={styles['header-icon-button-icon']}
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
                tabIndex={-1}
            >
                {icon ? (
                    <i
                        className={
                            iconDropdown && dropdownVisibility
                                ? iconDropdown
                                : icon
                        }
                    ></i>
                ) : null}
            </Link>
            {children}
        </div>
    );
}

IconButton.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconDropdown: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
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
                        if (element.type.name !== DropdownWindow.name)
                            return false;
                    })
                ) {
                    child_component_name = DropdownWindow.name;
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
                child_component_name !== DropdownWindow.name) ||
            typeof children_value === 'string'
        ) {
            return new Error(
                'Invalid prop `' +
                    propName +
                    '` supplied to' +
                    ' `' +
                    componentName +
                    `\`. This component only accept ${DropdownWindow.name} component nas children.`
            );
        }
    },
};

export default IconButton;
