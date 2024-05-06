/**
 * @file index.js
 * @description Checkbox component.
 */

'use strict';
import * as styles from './Checkbox.module.css';

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
function Checkbox({
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
    let classes = `${styles['checkbox-wrapper']}
                   ${styles[color] || ''}
                   ${styles[size] || ''}
                   ${styles[altStyle] || ''}
                   ${whiteOnly ? styles['white-only'] : ''}`;
    return (
        <div className={classes} {...checkboxWrapperProps}>
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

export default Checkbox;
