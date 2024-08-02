/**
 * @file index.tsx
 * @description Button component.
 */

'use strict';
import { ReactNode, forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Button.module.css';

/**
 * Button component.
 * @param props Component properties.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.outline Use outline variant.
 * @param props.white Use white variant.
 * @param props.whiteOnly Use white-only variant.
 * @param props.useDarkText Force dark text color.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.value Element value.
 * @param props.onClick Button on-click callback.
 * @param props.disabled Disable the button.
 * @param props.style Additional button styles.
 * @param props.children Button content.
 * @param props.elementType Element type.
 * @returns Returns the component.
 */
const Button = forwardRef(function Button(
    {
        color,
        size,
        outline = false,
        white = false,
        whiteOnly = false,
        useDarkText = false,
        id,
        className,
        value,
        onClick,
        disabled = false,
        style,
        children,
        elementType = 'button',
    }: {
        color?:
            | 'red'
            | 'orange'
            | 'yellow'
            | 'green'
            | 'blue'
            | 'purple'
            | 'black';
        size?: 'small' | 'large';
        outline?: boolean;
        white?: boolean;
        whiteOnly?: boolean;
        useDarkText?: boolean;
        id?: string;
        className?: string;
        value?: string;
        onClick?: (...args: any[]) => any;
        disabled?: boolean;
        style?: object;
        children?: ReactNode;
        elementType?: 'button' | 'a' | 'div';
    },
    ref?: any
) {
    const classes = `${styles.button}
                     ${styles[color] || ''}
                     ${styles[size] || ''}
                     ${outline ? styles.outline : ''}
                     ${white ? styles.white : ''}
                     ${whiteOnly ? styles['white-only'] : ''}
                     ${useDarkText ? styles['dark-text'] : ''}
                     ${className || ''}`,
        Component: any = elementType;

    return (
        <Component
            ref={ref}
            id={id}
            className={classes}
            style={style}
            value={value}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Component>
    );
});

Button.propTypes = {
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
    outline: PropTypes.bool,
    white: PropTypes.bool,
    whiteOnly: PropTypes.bool,
    useDarkText: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
    elementType: PropTypes.oneOf(['button', 'a', 'div']),
};

export default Button;
