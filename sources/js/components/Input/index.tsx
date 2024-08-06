/**
 * @file index.tsx
 * @description Input component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './Input.module.css';

/**
 * Input component.
 * @param props Component properties.
 * @param props.type Input type.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.transparent Make the input background transparent.
 * @param props.icon Input icon.
 * @param props.placeholder Placeholder text.
 * @param props.id Element id.
 * @param props.value Element value.
 * @param props.className Element class names. (This applies to the wrapper element)
 * @param props.onBlur Input on-blur callback.
 * @param props.onChange Input on-change callback.
 * @param props.disabled Disable the input.
 * @param props.wrapperStyle Additional input wrapper styles.
 * @param props.inputStyle Additional input styles.
 * @returns Returns the component.
 */
function Input({
    type = 'text',
    color,
    size,
    transparent = false,
    icon,
    placeholder,
    id,
    value,
    className,
    onBlur,
    onChange,
    disabled = false,
    wrapperStyle,
    inputStyle,
}: {
    type?: 'text' | 'email' | 'password';
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    size?: 'small' | 'large';
    transparent?: boolean;
    icon?: { iconPosition: 'left' | 'right'; iconClass: string };
    placeholder?: string;
    id?: string;
    value?: string;
    className?: string;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    wrapperStyle?: object;
    inputStyle?: object;
}) {
    const icon_position_style = icon
        ? icon.iconPosition === 'right'
            ? styles['icon-right']
            : styles['icon-left']
        : undefined;

    const classes = `${styles['input-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${transparent ? styles['transparent'] : ''}
                   ${icon_position_style ? icon_position_style : ''}
                   ${className || ''}`;
    return (
        <div className={classes} style={wrapperStyle}>
            {icon ? <i className={icon.iconClass}></i> : null}
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={inputStyle}
            />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']),
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'black',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    transparent: PropTypes.bool,
    icon: PropTypes.shape({
        iconPosition: PropTypes.oneOf(['left', 'right']).isRequired,
        iconClass: PropTypes.string.isRequired,
    }),
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
};

export default Input;
