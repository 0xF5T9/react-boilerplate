/**
 * @file index.tsx
 * @description Select.
 */

'use strict';
import { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './Select.module.css';

/**
 * Select input.
 * @param props Component properties.
 * @param props.color Color variant.
 * @param props.inputSize Size variant.
 * @param props.children Option elements.
 * @note Properties that are not explicitly stated here are passed to select element.
 * @returns Returns the component.
 */
const Select: FunctionComponent<
    React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > & {
        color?:
            | 'red'
            | 'orange'
            | 'yellow'
            | 'green'
            | 'blue'
            | 'purple'
            | 'black';
        inputSize?: 'small' | 'large';
        children?: ReactNode;
    }
> = function ({ color, inputSize, className, children, ...props }) {
    const classes = classNames(
        styles.select,
        styles[color],
        styles[inputSize],
        className
    );
    return (
        <select {...props} className={classes}>
            {children}
        </select>
    );
};

Select.propTypes = {
    color: PropTypes.oneOf([
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'black',
    ]),
    inputSize: PropTypes.oneOf(['small', 'large']),
};

export default Select;
