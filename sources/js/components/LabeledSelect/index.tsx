/**
 * @file index.tsx
 * @description Labeled select component.
 */

'use strict';
import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import * as styles from './LabeledSelect.module.css';

/**
 * Labeled select component.
 * @param props Component properties.
 * @param props.color Input color variant. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param props.reverse Specifies whether to use input reverse variant.
 * @param props.size Input size. ('small' | 'large')
 * @param props.width Input width.
 * @param props.label Input label.
 * @param props.id Input id.
 * @param props.value Input value.
 * @param props.onBlur Input on-blur callback.
 * @param props.onChange Input on-change callback.
 * @param props.disabled Specifies whether to disable the input.
 * @param props.wrapperStyle Input wrapper style object.
 * @param props.inputStyle Input style object.
 * @param props.children <select> elements.
 * @returns Returns the component.
 */
function LabeledSelect({
    color,
    reverse = false,
    size,
    width,
    label,
    id,
    value,
    onBlur,
    onChange,
    disabled = false,
    wrapperStyle,
    inputStyle,
    children,
}: {
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
    reverse?: boolean;
    size?: 'small' | 'large';
    width?: number;
    label?: string;
    id?: string;
    value?: string;
    onBlur?: any;
    onChange?: any;
    disabled?: boolean;
    wrapperStyle?: object;
    inputStyle?: object;
    children?: ReactNode;
}) {
    let classes = `${styles['input-wrapper']}
                   ${color ? styles[color] : ''}
                   ${size ? styles[size] : ''}
                   ${reverse ? styles['reverse'] : ''}`;

    let input_style = Object.assign(
        { width: width && `${width}px` },
        inputStyle || {}
    );

    return (
        <div className={classes} style={wrapperStyle}>
            <div className={styles['input-label']}>
                <label htmlFor={id}>{label}</label>
            </div>
            <select
                className={styles['input']}
                id={id}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={input_style}
            >
                {children}
            </select>
        </div>
    );
}

LabeledSelect.propTypes = {
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ]),
    reverse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    width: PropTypes.number,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    children: PropTypes.node,
};

export default LabeledSelect;
