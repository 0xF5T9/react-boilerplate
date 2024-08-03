/**
 * @file index.tsx
 * @description Select component.
 */

'use strict';
import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Select.module.css';

/**
 * Select input component.
 * @param props Component properties.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.name Select group name.
 * @param props.value Element value.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.onBlur Select on-blur callback.
 * @param props.onChange Select on-change callback.
 * @param props.disabled Disable the select.
 * @param props.children Select options.
 * @returns Returns the component.
 */
function Select({
    id,
    className,
    name,
    value,
    color,
    size,
    onBlur,
    onChange,
    disabled = false,
    children,
}: {
    id?: string;
    className?: string;
    name?: string;
    value?: string;
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    size?: 'small' | 'large';
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    children?: ReactNode;
}) {
    const classes = `${styles.select}
                     ${color ? styles[color] : ''}
                     ${size ? styles[size] : ''}
                     ${className || ''}`;
    return (
        <select
            className={classes}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            value={value}
        >
            {children}
        </select>
    );
}

Select.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
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
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export default Select;
