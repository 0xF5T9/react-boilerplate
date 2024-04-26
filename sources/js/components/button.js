/**
 * @file button.js
 * @description Button components.
 */

'use strict';

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
 * @returns Returns the component.
 */
export function Button({
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
}) {
    const button_classes = `button ${color} ${size} ${outline ? 'outline' : ''}
                            ${white ? 'white' : ''} ${whiteOnly ? 'white-only' : ''}`;
    return (
        <button
            id={id}
            value={value}
            className={button_classes}
            disabled={disabled ? true : false}
            {...buttonProps}
        >
            {children}
        </button>
    );
}
