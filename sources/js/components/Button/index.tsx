/**
 * @file index.tsx
 * @description Button component.
 */

'use strict';
import { ForwardRefRenderFunction, forwardRef, DetailedHTMLProps } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CircleLoading } from '../Icons/CircleLoading';
import * as styles from './Button.module.css';

const ButtonRefRender: ForwardRefRenderFunction<
    HTMLButtonElement,
    DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > & {
        color?: 'success' | 'danger' | 'warn' | 'info' | 'gray' | 'white';
        size?: 'small' | 'large';
        loading?: boolean;
    }
> = function (
    { color, size, loading = false, className, children, ...buttonProps },
    ref
) {
    const classes = classNames(
        styles.button,
        styles[color],
        styles[size],
        { [styles['loading']]: loading },
        className
    );

    return (
        <button ref={ref} className={classes} {...buttonProps}>
            {loading && <CircleLoading className={styles['loading-icon']} />}
            {children}
        </button>
    );
};

/**
 * Standard button.
 * @param props Component properties.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.loading Use loading appearance for the button.
 * @note Properties that are not explicitly stated here are passed to button element.
 * @returns Returns the component.
 */
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
    loading: PropTypes.bool,
};

export default Button;
