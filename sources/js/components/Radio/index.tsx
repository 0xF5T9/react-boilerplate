/**
 * @file index.tsx
 * @description Radio component.
 */

'use strict';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Radio.module.css';

/**
 * Radio component.
 * @param props Component properties.
 * @param props.labelText Label text.
 * @param props.name Radio group name.
 * @param props.value Radio value.
 * @param props.color Color variant.
 * @param props.size Size variant.
 * @param props.id Element id.
 * @param props.className Element class names. (This applies to the wrapper element)
 * @param props.onClick Radio on-click callback.
 * @param props.required Specifies whether the radio is required.
 * @param props.disabled Disable the radio.
 * @param props.wrapperStyle Additional radio wrapper styles.
 * @param props.radioStyle Additional radio styles.
 * @returns Returns the component.
 */
function Radio({
    labelText,
    name,
    value,
    color,
    size,
    id,
    className,
    onClick,
    required = false,
    disabled = false,
    wrapperStyle,
    radioStyle,
}: {
    labelText?: string;
    name: string;
    value: string;
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    size?: 'small' | 'large';
    id: string;
    className?: string;
    onClick?: (...args: any[]) => any;
    required?: boolean;
    disabled?: boolean;
    wrapperStyle?: object;
    radioStyle?: object;
}) {
    const wrapper = useRef(),
        radio = useRef();

    const classes = `${styles['radio-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${className || ''}`;
    return (
        <div
            ref={wrapper}
            className={classes}
            style={wrapperStyle}
            onClick={(event: any) => {
                if (event.target === wrapper.current && radio.current) {
                    const radioElement = radio.current as any;
                    radioElement.focus();
                    radioElement.checked = true;
                }
            }}
        >
            <input
                className={styles['input']}
                ref={radio}
                id={id}
                type="radio"
                name={name}
                value={value}
                onClick={onClick}
                required={required}
                disabled={disabled}
                style={radioStyle}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}

Radio.propTypes = {
    labelText: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
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
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    radioStyle: PropTypes.object,
};

export default Radio;
