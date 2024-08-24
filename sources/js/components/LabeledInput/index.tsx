/**
 * @file index.tsx
 * @description Labeled input component.
 */

'use strict';
import { FunctionComponent, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import * as styles from './LabeledInput.module.css';

/**
 * Labeled input component.
 * @param props Component properties.
 * @param type Input type.
 * @param props.color Color variant.
 * @param props.reverseBackground Use reverse background variant.
 * @param props.size Size variant.
 * @param props.width Input fixed weight.
 * @param props.labelWidth Input label fixed width.
 * @param props.label Input label.
 * @param props.id Element id.
 * @param props.value Element value.
 * @param props.defaultValue Element value.
 * @param props.placeholder Placeholder text.
 * @param props.readOnly Specifies whether the input is read-only.
 * @param props.onBlur Input on-blur callback.
 * @param props.onChange Input on-change callback.
 * @param props.disabled Disable the input.
 * @param props.disableAutoCapitalize Disable auto capitalize.
 * @param props.wrapperStyle Input wrapper style object.
 * @param props.inputStyle Input style object.
 * @returns Returns the component.
 */
const LabeledInput: FunctionComponent<{
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    reverseBackground?: boolean;
    size?: 'small' | 'large';
    width?: number;
    labelWidth?: number;
    label: string;
    id?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    readOnly?: boolean;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    autoCapitalize?:
        | 'none'
        | 'off'
        | 'sentences'
        | 'on'
        | 'words'
        | 'characters';
    wrapperStyle?: object;
    inputStyle?: object;
}> = function ({
    type = 'text',
    color,
    reverseBackground = false,
    size,
    width,
    labelWidth,
    label,
    id,
    value,
    defaultValue,
    placeholder,
    readOnly = false,
    onBlur,
    onChange,
    disabled = false,
    autoCapitalize = 'on',
    wrapperStyle,
    inputStyle,
}) {
    const input: any = useRef();

    const classes = `${styles['input-wrapper']}
                   ${color ? styles[color] : ''}
                   ${size ? styles[size] : ''}
                   ${reverseBackground ? styles['reverse-background'] : ''}
                   ${disabled ? styles['disabled'] : ''}`;

    const processedWrapperStyle = Object.assign(
            { width: width && `${width}px` },
            wrapperStyle || {}
        ),
        labelWrapperStyle = labelWidth
            ? { width: `${labelWidth}px`, flexShrink: '0' }
            : {};

    useEffect(() => {
        if (defaultValue && input.current) input.current.value = defaultValue;
    }, []);

    return (
        <div className={classes} style={processedWrapperStyle}>
            <div className={styles['input-label']} style={labelWrapperStyle}>
                <label htmlFor={id}>{label}</label>
            </div>
            <input
                ref={input}
                className={styles['input']}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                autoCapitalize={autoCapitalize}
                style={inputStyle}
            />
        </div>
    );
};

LabeledInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel']),
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
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    autoCapitalize: PropTypes.oneOf([
        'none',
        'off',
        'sentences',
        'on',
        'words',
        'characters',
    ]),
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
};

export default LabeledInput;
