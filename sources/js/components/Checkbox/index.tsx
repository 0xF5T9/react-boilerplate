/**
 * @file index.tsx
 * @description Checkbox component.
 */

'use strict';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Checkbox.module.css';

/**
 * Checkbox component.
 * @param props Component properties.
 * @param props.labelText Label text.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.id Element id.
 * @param props.className Element class names. (This applies to the wrapper element)
 * @param props.value Element value.
 * @param props.onClick Checkbox on-click callback.
 * @param props.required Specifies whether the checkbox is required.
 * @param props.disabled Disable the checkbox.
 * @param props.wrapperStyle Additional checkbox wrapper styles.
 * @param props.checkboxStyle Additional checkbox styles.
 * @returns Returns the component.
 */
function Checkbox({
    labelText,
    color,
    size,
    id,
    className,
    value,
    onClick,
    required = false,
    disabled = false,
    wrapperStyle,
    checkboxStyle,
}: {
    labelText?: string;
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    size?: 'small' | 'large';
    id: string;
    className?: string;
    value?: string;
    onClick?: (...args: any[]) => any;
    required?: boolean;
    disabled?: boolean;
    wrapperStyle?: object;
    checkboxStyle?: object;
}) {
    const wrapper = useRef(),
        checkbox = useRef();

    const classes = `${styles['checkbox-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${className || ''}`;
    return (
        <div
            ref={wrapper}
            className={classes}
            style={wrapperStyle}
            onClick={(event: any) => {
                if (event.target === wrapper.current && checkbox.current) {
                    const checked_state: boolean = (checkbox.current as any)
                            .checked,
                        checkbox_element = checkbox.current as any;
                    checkbox_element.focus();
                    checkbox_element.checked = !checked_state;
                }
            }}
        >
            <input
                className={styles['input']}
                ref={checkbox}
                id={id}
                type="checkbox"
                value={value}
                onClick={onClick}
                required={required}
                disabled={disabled}
                style={checkboxStyle}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    labelText: PropTypes.string,
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
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    checkboxStyle: PropTypes.object,
};

export default Checkbox;
