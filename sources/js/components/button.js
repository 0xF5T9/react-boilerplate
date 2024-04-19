/**
 * @file button.js
 * @description Button components.
 */

'use strict';

/**
 * Button component.
 * @param {Object} props.color Button color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size Button size (optional: 'small' | 'large')
 * @param {Object} props.outline Use button outline style (optional: false)
 * @param {Object} props.white Use white button style (optional: false)
 * @param {Object} props.whiteOnly Use white only button style (optional: false)
 * @param {Object} props.id The button id (optional)
 * @param {Object} props.disabled Disable the button (optional: true | false)
 * @param {Object} props.buttonProps Additional button element properties (optional)
 * @returns Returns the component.
 */
export function Button({
    color = '',
    size = '',
    outline = false,
    white = false,
    whiteOnly = false,
    id = '',
    disabled = false,
    children,
    buttonProps,
}) {
    const button_classes = `button ${color} ${size} ${outline ? 'outline' : ''}
                            ${white ? 'white' : ''} ${whiteOnly ? 'white-only' : ''}`;
    return (
        <button
            id={id}
            className={button_classes}
            disabled={disabled ? true : false}
            {...buttonProps}
        >
            {children}
        </button>
    );
}
