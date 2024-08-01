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
 * @param props.id Select id.
 * @param props.className Select additional class names.
 * @param props.name Select group name.
 * @param props.value Select value.
 * @param props.color Select color. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param props.size Select size. ('small' | 'large')
 * @param props.altStyle Specifies whether to use alternative style.
 * @param props.onBlur Select on-blur callback.
 * @param props.onChange Select on-change callback.
 * @param props.disabled Disable the select.
 * @param props.children Select children.
 * @returns Returns the component.
 */
function Select({
    id,
    className,
    name,
    value,
    color,
    size,
    altStyle,
    onBlur,
    onChange,
    disabled = false,
    children,
}: {
    id?: string;
    className?: string;
    name?: string;
    value?: string;
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
    size?: 'small' | 'large';
    altStyle?: boolean;
    onBlur?: any;
    onChange?: any;
    disabled?: boolean;
    children?: ReactNode;
}) {
    const classes = `${styles.select}
                     ${color ? styles[color] : ''}
                     ${size ? styles[size] : ''}
                     ${altStyle ? styles.alt : ''}
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
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    altStyle: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};

export default Select;
