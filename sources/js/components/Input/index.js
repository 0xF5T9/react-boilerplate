/**
 * @file index.js
 * @description Input component.
 */

'use strict';
import * as styles from './Input.module.css';

/**
 * Input component. (Text | Email | Password)
 * @param {Object} props Component properties.
 * @param {String} props.type Input type (required: 'text' | 'email' | 'password')
 * @param {String} props.color Input color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Input size (optional: 'small' | 'large')
 * @param {Boolean} props.transparent Input background transparency (optional: true | false)
 * @param {String} props.altStyle Input style (optional: 'alt')
 * @param {Object} props.icon Input icon (optional: {iconPosition: 'icon-left' | 'icon-right', iconClass: '<icon classses>'})
 * @param {String} props.placeholder Input placeholder (optional)
 * @param {String} props.id Input id (optional)
 * @param {Boolean} props.disabled Disable the input (optional: true | false)
 * @param {*} props.inputWrapperProps Additional input wrapper element properties (optional)
 * @param {*} props.iconProps Additional input icon element properties (optional)
 * @param {*} props.inputProps Additional input element properties (optional)
 * @returns Returns the component.
 */
function Input({
    type = 'text',
    color = '',
    size = '',
    transparent = false,
    altStyle = '',
    icon = { iconPosition: '', iconClass: '' },
    placeholder,
    id,
    disabled = false,
    inputWrapperProps,
    iconProps,
    inputProps,
}) {
    let icon_position_style;
    switch (icon.iconPosition) {
        case 'right':
            icon_position_style = styles['icon-right'];
            break;
        case 'left':
        default:
            icon_position_style = styles['icon-left'];
    }

    let classes = `${styles['input-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${styles[transparent] || ''}
                   ${styles[altStyle] || ''}
                   ${icon.iconPosition ? icon_position_style : ''}`;
    return (
        <div className={classes} {...inputWrapperProps}>
            {icon.iconClass || iconProps ? (
                <i className={icon.iconClass} {...iconProps}></i>
            ) : (
                ''
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled ? true : false}
                {...inputProps}
            />
        </div>
    );
}

export default Input;
