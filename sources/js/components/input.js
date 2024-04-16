/**
 * @file input.js
 * @description Input components.
 */

'use strict';

/**
 * The input component.
 * @param {Object} props.type Input type (required: 'text' | 'email' | 'password')
 * @param {Object} props.color Input color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size Input size (optional: 'small' | 'large')
 * @param {Object} props.transparent Input background transparency (optional: true | false)
 * @param {Object} props.altStyle Input style (optional: 'alt')
 * @param {Object} props.icon Input icon (optional: {iconPosition: 'icon-left' | 'icon-right', iconClass: '<icon classses>'})
 * @param {Object} props.inputWrapperProps Additional input wrapper element properties (optional)
 * @param {Object} props.iconProps Additional input icon element properties (optional)
 * @param {Object} props.inputProps Additional input element properties (optional)
 * @returns Returns the component.
 */
export function MyInput({
    type = 'text',
    color = '',
    size = '',
    transparent = false,
    altStyle = '',
    icon = { iconPosition: '', iconClass: '' },
    inputWrapperProps,
    iconProps,
    inputProps,
}) {
    let wrapper_classes = `input-wrapper ${color} ${size} ${transparent ? 'transparent' : ''} ${altStyle} ${icon.iconPosition}`;
    return (
        <div className={wrapper_classes} {...inputWrapperProps}>
            {icon.iconClass || iconProps ? (
                <i className={icon.iconClass} {...iconProps}></i>
            ) : (
                ''
            )}
            <input type={type} {...inputProps} />
        </div>
    );
}

/**
 * The radio component.
 * @param {Object} props.labelText The label text. (optional)
 * @param {Object} props.id The radio id (required)
 * @param {Object} props.name The radio group name (required)
 * @param {Object} props.value The radio value (required)
 * @param {Object} props.color The radio color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size The radio size (optional: 'small' | 'large')
 * @param {Object} props.altStyle The radio alt style (optional: 'alt-1' | 'alt-2' | 'white-only')
 * @param {Object} props.radioWrapperProps Additional radio wrapper element properties (optional)
 * @param {Object} props.radioProps Additional radio element properties (optional)
 * @returns Returns the component.
 */
export function MyRadio({
    labelText = '',
    id = '',
    name = '',
    value = '',
    color = '',
    size = '',
    altStyle = '',
    radioWrapperProps,
    radioProps,
}) {
    let wrapper_classes = `radio-wrapper ${color} ${size} ${altStyle}`;
    return (
        <div className={wrapper_classes} {...radioWrapperProps}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                {...radioProps}
            />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}

/**
 * The checkbox component.
 * @param {Object} props.labelText The label text (optional)
 * @param {Object} props.id The checkbox id (required)
 * @param {Object} props.color The checkbox color (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {Object} props.size The checkbox size (optional: 'small' | 'large')
 * @param {Object} props.altStyle The checkbox alt style (optional: 'alt-1' | 'alt-2' | 'white-only')
 * @param {Object} props.checkboxWrapperProps Additional checkbox wrapper element properties (optional)
 * @param {Object} props.checkboxProps Additional checkbox element properties (optional)
 * @returns
 */
export function MyCheckbox({
    labelText = '',
    id = '',
    color = '',
    size = '',
    altStyle = '',
    checkboxWrapperProps,
    checkboxProps,
}) {
    let wrapper_classes = `checkbox-wrapper ${color} ${size} ${altStyle}`;
    return (
        <div className={wrapper_classes} {...checkboxWrapperProps}>
            <input id={id} type="checkbox" {...checkboxProps} />
            <label htmlFor={id}>
                <span>{labelText}</span>
            </label>
        </div>
    );
}
