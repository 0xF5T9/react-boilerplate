/**
 * @file index.js
 * @description Select component.
 */

'use strict';
import * as styles from './Select.module.css';

/**
 * Select input component.
 * @param {Object} props Component properties.
 * @param {String} props.id Select id. (optional)
 * @param {String} props.name Select name (optional)
 * @param {String} props.color Select color. (optional: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple')
 * @param {String} props.size Select size. (optional: 'small' | 'large')
 * @param {altStyle} props.altStyle Specifies whether to use alternative style. (optional)
 * @param {*} props.children Select children.
 * @param {*} props.selectProps Additional select element properties (optional)
 */
function Select({
    id,
    name,
    color = '',
    size = '',
    altStyle = false,
    children,
    selectProps,
}) {
    const classes = `${styles.select}
                     ${color ? styles[color] : ''}
                     ${size ? styles[size] : ''}
                     ${altStyle ? styles.alt : ''}`;
    return (
        <select className={classes} id={id} name={name} {...selectProps}>
            {children}
        </select>
    );
}

export default Select;
