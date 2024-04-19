/**
 * @file input.js
 * @description Input components.
 */

'use strict';

/**
 * Input component. (Text | Email | Password)
 * @param {Object} props.type Input type (required: 'text' | 'email' | 'password')
 * @param {Object} props.color Input color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size Input size (optional: 'small' | 'large')
 * @param {Object} props.transparent Input background transparency (optional: true | false)
 * @param {Object} props.altStyle Input style (optional: 'alt')
 * @param {Object} props.icon Input icon (optional: {iconPosition: 'icon-left' | 'icon-right', iconClass: '<icon classses>'})
 * @param {Object} props.placeholder Input placeholder (optional)
 * @param {Object} props.id Input id (optional)
 * @param {Object} props.disabled Disable the input (optional: true | false)
 * @param {Object} props.inputWrapperProps Additional input wrapper element properties (optional)
 * @param {Object} props.iconProps Additional input icon element properties (optional)
 * @param {Object} props.inputProps Additional input element properties (optional)
 * @returns Returns the component.
 */
export function Input({
    type = 'text',
    color = '',
    size = '',
    transparent = false,
    altStyle = '',
    icon = { iconPosition: '', iconClass: '' },
    placeholder = '',
    id = '',
    disabled = false,
    inputWrapperProps,
    iconProps,
    inputProps,
}) {
    let wrapper_classes = `input-wrapper ${color} ${size} ${transparent && 'transparent'} ${altStyle} ${icon.iconPosition}`;
    return (
        <div className={wrapper_classes} {...inputWrapperProps}>
            {icon.iconClass || iconProps ? (
                <i className={icon.iconClass} {...iconProps}></i>
            ) : (
                ''
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled ? true : false}
                {...inputProps}
            />
        </div>
    );
}

/**
 * Checkbox component.
 * @param {Object} props.labelText Label text (optional)
 * @param {Object} props.color Checkbox color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size Checkbox size (optional: 'small' | 'large')
 * @param {Object} props.altStyle Checkbox alt style (optional: 'alt-1' | 'alt-2')
 * @param {Object} props.whiteOnly Use white only checkbox style (optional: true | false)
 * @param {Object} props.id Checkbox id (required)
 * @param {Object} props.disabled Disable the checkbox (optional: true | false)
 * @param {Object} props.checkboxWrapperProps Additional checkbox wrapper element properties (optional)
 * @param {Object} props.checkboxProps Additional checkbox element properties (optional)
 * @returns
 */
export function Checkbox({
    labelText = '',
    color = '',
    size = '',
    altStyle = '',
    whiteOnly = false,
    id = '',
    disabled = false,
    checkboxWrapperProps,
    checkboxProps,
}) {
    let wrapper_classes = `checkbox-wrapper ${color} ${size} ${altStyle} ${whiteOnly ? 'white-only' : ''}`;
    return (
        <div className={wrapper_classes} {...checkboxWrapperProps}>
            <input
                id={id}
                type="checkbox"
                disabled={disabled ? true : false}
                {...checkboxProps}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}

/**
 * Radio input component.
 * @param {Object} props.labelText Label text. (optional)
 * @param {Object} props.name Radio group name (required)
 * @param {Object} props.value Radio value (required)
 * @param {Object} props.color Radio color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size Radio size (optional: 'small' | 'large')
 * @param {Object} props.altStyle Radio alt style (optional: 'alt-1' | 'alt-2')
 * @param {Object} props.whiteOnly Use white only radio style (optional: true | false)
 * @param {Object} props.id Radio id (required)
 * @param {Object} props.disabled Disable the radio (optional: true | false)
 * @param {Object} props.radioWrapperProps Additional radio wrapper element properties (optional)
 * @param {Object} props.radioProps Additional radio element properties (optional)
 * @returns Returns the component.
 */
export function Radio({
    labelText = '',
    name = '',
    value = '',
    color = '',
    size = '',
    altStyle = '',
    whiteOnly = false,
    id = '',
    disabled = false,
    radioWrapperProps,
    radioProps,
}) {
    let wrapper_classes = `radio-wrapper ${color} ${size} ${altStyle} ${whiteOnly ? 'white-only' : ''}`;
    return (
        <div className={wrapper_classes} {...radioWrapperProps}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                disabled={disabled ? true : false}
                {...radioProps}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}
