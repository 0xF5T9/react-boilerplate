/**
 * @file input.js
 * @description Input components.
 */

'use strict';

/**
 * Input component. (Text | Email | Password)
 * @param {Object} props Component properties.
 * @param {String} props.type Input type (required: 'text' | 'email' | 'password')
 * @param {String} props.color Input color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Input size (optional: 'small' | 'large')
 * @param {Boolean} props.transparent Input background transparency (optional: true | false)
 * @param {String} props.altStyle Input style (optional: 'alt')
 * @param {Object} props.icon Input icon (optional: {iconPosition: 'icon-left' | 'icon-right', iconClass: '<icon classses>'})
 * @param {String} props.placeholder Input placeholder (optional)
 * @param {String} props.id Input id (optional)
 * @param {Boolean} props.disabled Disable the input (optional: true | false)
 * @param {*} props.inputWrapperProps Additional input wrapper element properties (optional)
 * @param {*} props.iconProps Additional input icon element properties (optional)
 * @param {*} props.inputProps Additional input element properties (optional)
 * @returns Returns the component.
 */
export function Input({
    type = 'text',
    color = '',
    size = '',
    transparent = false,
    altStyle = '',
    icon = { iconPosition: '', iconClass: '' },
    placeholder,
    id,
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
 * @param {Object} props Component properties.
 * @param {String} props.labelText Label text (optional)
 * @param {String} props.color Checkbox color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Checkbox size (optional: 'small' | 'large')
 * @param {String} props.altStyle Checkbox alt style (optional: 'alt-1' | 'alt-2')
 * @param {Boolean} props.whiteOnly Use white only checkbox style (optional: true | false)
 * @param {String} props.id Checkbox id (required)
 * @param {Boolean} props.disabled Disable the checkbox (optional: true | false)
 * @param {*} props.checkboxWrapperProps Additional checkbox wrapper element properties (optional)
 * @param {*} props.checkboxProps Additional checkbox element properties (optional)
 * @returns
 */
export function Checkbox({
    labelText = '',
    color = '',
    size = '',
    altStyle = '',
    whiteOnly = false,
    id,
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
 * @param {Object} props Component properties.
 * @param {String} props.labelText Label text. (optional)
 * @param {String} props.name Radio group name (required)
 * @param {String} props.value Radio value (required)
 * @param {String} props.color Radio color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Radio size (optional: 'small' | 'large')
 * @param {String} props.altStyle Radio alt style (optional: 'alt-1' | 'alt-2')
 * @param {Boolean} props.whiteOnly Use white only radio style (optional: true | false)
 * @param {String} props.id Radio id (required)
 * @param {Boolean} props.disabled Disable the radio (optional: true | false)
 * @param {*} props.radioWrapperProps Additional radio wrapper element properties (optional)
 * @param {*} props.radioProps Additional radio element properties (optional)
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
    id,
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
