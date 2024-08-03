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
 * @param type Input type.
 * @param props.color Color variant.
 * @param props.reverseBackground Use reverse background variant.
 * @param props.size Size variant.
 * @param props.width Input fixed weight.
 * @param props.labelWidth Input label fixed width.
 * @param props.label Input label.
 * @param props.id Element id.
 * @param props.value Element value.
 * @param props.placeholder Placeholder text.
 * @param props.readOnly Specifies whether the input is read-only.
 * @param props.onBlur Input on-blur callback.
 * @param props.onChange Input on-change callback.
 * @param props.disabled Disable the input.
 * @param props.wrapperStyle Input wrapper style object.
 * @param props.inputStyle Input style object.
 * @returns Returns the component.
 */
function LabeledInput({
    type = 'text',
    color,
    reverseBackground = false,
    size,
    width,
    labelWidth,
    label,
    id,
    value,
    placeholder,
    readOnly = false,
    onBlur,
    onChange,
    disabled = false,
    wrapperStyle,
    inputStyle,
}: {
    type?: 'text' | 'email' | 'password';
    color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'black';
    reverseBackground?: boolean;
    size?: 'small' | 'large';
    width?: number;
    labelWidth?: number;
    label: string;
    id?: string;
    value?: string;
    placeholder?: string;
    readOnly?: boolean;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    disabled?: boolean;
    wrapperStyle?: object;
    inputStyle?: object;
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
                style={inputStyle}
            />
        </div>
    );
}

LabeledInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']),
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
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    inputStyle: PropTypes.object,
};

export default LabeledInput;
