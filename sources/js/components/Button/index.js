/**
 * @file index.js
 * @description Button components.
 */

'use strict';
import * as styles from './Button.module.css';

/**
 * Button component.
 * @param {Object} props Component properties.
 * @param {String} props.color Button color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Button size (optional: 'small' | 'large')
 * @param {Boolean} props.outline Use button outline style (optional: false)
 * @param {Boolean} props.white Use white button style (optional: false)
 * @param {Boolean} props.whiteOnly Use white only button style (optional: false)
 * @param {String} props.id The button id (optional)
 * @param {String} props.value The button value (optional)
 * @param {Boolean} props.disabled Disable the button (optional: true | false)
 * @param {*} props.children Button children.
 * @param {*} props.buttonProps Additional button element properties (optional)
 * @param {String} props.elementType Element type (optional: 'button' | 'a' | 'div')
 * @returns Returns the component.
 */
function Button({
    color = '',
    size = '',
    outline = false,
    white = false,
    whiteOnly = false,
    id,
    value,
    disabled = false,
    children,
    buttonProps,
    elementType = 'button',
}) {
    const classes = `${styles.button}
                     ${styles[color] || ''}
                     ${styles[size] || ''}
                     ${outline ? styles.outline : ''}
                     ${white ? styles.white : ''}
                     ${whiteOnly ? styles['white-only'] : ''}`;
    switch (elementType) {
        case 'a': {
            return (
                <a
                    id={id}
                    value={value}
                    className={classes}
                    disabled={disabled}
                    {...buttonProps}
                >
                    {children}
                </a>
            );
        }
        case 'div': {
            return (
                <div
                    id={id}
                    value={value}
                    className={classes}
                    disabled={disabled}
                    {...buttonProps}
                >
                    {children}
                </div>
            );
        }
        case 'button':
        default: {
            return (
                <button
                    id={id}
                    value={value}
                    className={classes}
                    disabled={disabled}
                    {...buttonProps}
                >
                    {children}
                </button>
            );
        }
    }
}

export default Button;
