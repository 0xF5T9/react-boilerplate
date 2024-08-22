/**
 * @file index.tsx
 * @description Button component.
 */

'use strict';
import {
    ForwardRefRenderFunction,
    ElementType,
    CSSProperties,
    ReactNode,
    forwardRef,
} from 'react';
import PropTypes from 'prop-types';
import { CircleLoading } from '../Icons/CircleLoading';

import * as styles from './Button.module.css';

/**
 * Button component.
 * @param props Component properties.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.value Element value.
 * @param props.onClick Button on-click callback.
 * @param props.disabled Disable the button.
 * @param props.loading Use loading appearance for the button.
 * @param props.style Additional button styles.
 * @param props.children Button content.
 * @param props.elementType Element type.
 * @returns Returns the component.
 */
const ButtonRefRender: ForwardRefRenderFunction<
    HTMLButtonElement,
    {
        color?: 'success' | 'danger' | 'warn' | 'info' | 'gray' | 'white';
        size?: 'small' | 'large';
        id?: string;
        className?: string;
        value?: string;
        onClick?: (...args: any[]) => any;
        disabled?: boolean;
        loading?: boolean;
        style?: CSSProperties;
        children?: ReactNode;
        elementType?: ElementType;
    }
> = function (
    {
        color,
        size,
        id,
        className,
        value,
        onClick,
        disabled = false,
        loading = false,
        style,
        children,
        elementType = 'button',
    },
    ref
) {
    const classes = `${styles.button}
                     ${styles[color] || ''}
                     ${styles[size] || ''}
                     ${loading ? styles['loading'] : ''}
                     ${className || ''}`,
        Component: ElementType = elementType;

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
            {loading && <CircleLoading className={styles['loading-icon']} />}
            {children}
        </Component>
    );
};

const Button = forwardRef(ButtonRefRender);

Button.propTypes = {
    color: PropTypes.oneOf([
        'success',
        'danger',
        'warn',
        'info',
        'gray',
        'white',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
    elementType: PropTypes.oneOf(['button', 'a', 'div']),
};

export default Button;
