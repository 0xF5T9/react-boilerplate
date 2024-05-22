/**
 * @file index.js
 * @description Dropdown window component.
 *              Hidden by default, revealed with 'is-open' class.
 */

'use strict';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import * as styles from './DropdownWindow.module.css';

/**
 * Dropdown window component.
 * @param {Object} props Component properties.
 * @param {String} props.id Dropdown window element id.
 * @param {String} props.className Additional dropdown window element classes.
 * @param {Function} props.onClose Function that will be invoked after the dropdown window is closed.
 * @param {*} props.children Dropdown window children. (Content)
 * @note Hidden by default, revealed with 'is-open' class.
 * @returns Returns the component.
 */
function DropdownWindow({ id, className, onClose, children }) {
    // Close all drop-down window on background-click.
    useEffect(() => {
        function handleBackgroundClick(event) {
            for (const dropdown of document.querySelectorAll(
                `.${styles['dropdown-window']}.is-open`
            )) {
                if (
                    !dropdown.contains(event.target) &&
                    !dropdown.parentNode.contains(event.target)
                ) {
                    dropdown.classList.remove('is-open');
                    dropdown.classList.add('is-close');
                }
            }
        }
        window.addEventListener('click', handleBackgroundClick);
        return () => window.removeEventListener('click', handleBackgroundClick);
    }, []);

    return (
        <div
            id={id}
            className={`${styles['dropdown-window']} 
                        ${className ? className : ''}`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={(event) => {
                if (
                    onClose &&
                    event.currentTarget.classList.contains('is-close')
                ) {
                    onClose();
                }
            }}
        >
            {children}
        </div>
    );
}

DropdownWindow.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onClose: PropTypes.func,
    children: PropTypes.node,
};

export default DropdownWindow;
