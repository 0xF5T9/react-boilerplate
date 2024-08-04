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
 * @param props.color Color variant.
 * @param props.reverseBackground Specifies whether to use input reverse variant.
 * @param props.size Size variant.
 * @param props.width Input fixed width.
 * @param props.labelWidth Input label fixed width.
 * @param props.label Input label.
 * @param props.id Element id.
 * @param props.value Element value.
 * @param props.onBlur Input on-blur callback.
 * @param props.onChange Input on-change callback.
 * @param props.disabled Disable the input.
 * @param props.wrapperStyle Input wrapper style object.
 * @param props.inputStyle Input style object.
 * @param props.children <select> elements.
 * @returns Returns the component.
 */
function LabeledSelect({
    color,
    reverseBackground = false,
    size,
    width,
    labelWidth,
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
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    reverseBackground?: boolean;
    size?: 'small' | 'large';
    width?: number;
    labelWidth?: number;
    label?: string;
    id?: string;
    value?: string;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    wrapperStyle?: object;
    inputStyle?: object;
    children?: ReactNode;
}) {
    let classes = `${styles['input-wrapper']}
                   ${color ? styles[color] : ''}
                   ${size ? styles[size] : ''}
                   ${reverseBackground ? styles['reverse-background'] : ''}`;

    let wrapper_style = Object.assign(
            { width: width && `${width}px` },
            wrapperStyle || {}
        ),
        label_wrapper_style = labelWidth
            ? { width: `${labelWidth}px`, flexShrink: '0' }
            : {};

    return (
        <div className={classes} style={wrapper_style}>
            <div className={styles['input-label']} style={label_wrapper_style}>
                <label htmlFor={id}>{label}</label>
            </div>
            <select
                className={styles['input']}
                id={id}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={inputStyle}
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
        'black',
    ]),
    reverseBackground: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    width: PropTypes.number,
    labelWidth: PropTypes.number,
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
