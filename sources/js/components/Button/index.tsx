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
 * @param props.color Button color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param props.size Button size. ('small' | 'large')
 * @param props.outline Use button outline style.
 * @param props.white Use white button style.
 * @param props.whiteOnly Use white only button style.
 * @param props.id Button id.
 * @param props.className Additional button class names.
 * @param props.value Button value.
 * @param props.onClick Button on-click callback.
 * @param props.disabled Disable the button.
 * @param props.style Additional button styles.
 * @param props.children Button children.
 * @param props.elementType Element type. ('button' | 'a' | 'div')
 * @returns Returns the component.
 */
const Button = forwardRef(function Button(
    {
        color,
        size,
        outline,
        white,
        whiteOnly,
        id,
        className,
        value,
        onClick,
        disabled,
        style,
        children,
        elementType = 'button',
    }: {
        color?: string;
        size?: string;
        outline?: boolean;
        white?: boolean;
        whiteOnly?: boolean;
        id?: string;
        className?: string;
        value?: string;
        onClick?: any;
        disabled?: boolean;
        style?: object;
        children?: ReactNode;
        elementType?: string;
    },
    ref?: any
) {
    const classes = `${styles.button}

                     ${styles[color] || ''}
                     ${styles[size] || ''}
                     ${outline ? styles.outline : ''}
                     ${white ? styles.white : ''}
                     ${whiteOnly ? styles['white-only'] : ''}
                     ${className || ''}`,
        Component: any = elementType;

    return (
        <Component
            ref={ref}
            id={id}
            value={value}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            style={style}
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
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    outline: PropTypes.bool,
    white: PropTypes.bool,
    whiteOnly: PropTypes.bool,
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
