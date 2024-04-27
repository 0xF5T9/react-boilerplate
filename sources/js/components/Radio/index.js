/**
 * @file index.js
 * @description Radio components.
 */

'use strict';
import * as styles from './Radio.module.css';

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
function Radio({
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
    let classes = `${styles['radio-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${styles[altStyle] || ''}
                   ${whiteOnly ? styles['white-only'] : ''}`;
    return (
        <div className={classes} {...radioWrapperProps}>
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

export default Radio;
