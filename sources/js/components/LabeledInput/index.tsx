/**
 * @file index.tsx
 * @description Labeled input component.
 */

'use strict';
import PropTypes from 'prop-types';

import * as styles from './LabeledInput.module.css';

/**
 * Labeled input component.
 * @param props Component properties.
 * @param Input type. (default: 'text')
 * @param props.color Input color variant. ('red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param props.reverse Specifies whether to use reverse variant.
 * @param props.size Input size. ('small' | 'large')
 * @param props.width Input width.
 * @param props.label Input label.
 * @param props.id Input id.
 * @param props.value Input value.
 * @param props.placeholder Input placeholder.
 * @param props.readOnly Specifies whether the input is read-only.
 * @param props.onBlur Input on-blur callback.
 * @param props.onChange Input on-change callback.
 * @param props.disabled Specifies whether to disable the input.
 * @param props.wrapperStyle Input wrapper style object.
 * @param props.inputStyle Input style object.
 * @returns Returns the component.
 */
function LabeledInput({
    type = 'text',
    color,
    reverse = false,
    size,
    width,
    label,
    id,
    value,
    placeholder,
    readOnly,
    onBlur,
    onChange,
    disabled = false,
    wrapperStyle,
    inputStyle,
}: {
    type?: string;
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
    reverse?: boolean;
    size?: 'small' | 'large';
    width?: number;
    label?: string;
    id?: string;
    value?: string;
    placeholder?: string;
    readOnly?: boolean;
    onBlur?: any;
    onChange?: any;
    disabled?: boolean;
    wrapperStyle?: object;
    inputStyle?: object;
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
            <input
                className={styles['input']}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                onBlur={onBlur}
                onChange={onChange}
                disabled={disabled}
                style={input_style}
            />
        </div>
    );
}

LabeledInput.propTypes = {
    type: PropTypes.string,
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
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
};

export default LabeledInput;
