/**
 * @file index.tsx
 * @description Grid System components.
 */

'use strict';
import { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as styles from './GridSystem.module.css';

/**
 * Grid System row components.
 * @param props Component properties.
 * @param props.id Id.
 * @param props.className Class names.
 * @param props.style Style object.
 * @param props.noGutters Specifies whether to remove gutters.
 * @param props.children Component children.
 * @returns Returns the component.
 */
const Row: FunctionComponent<{
    id?: string;
    className?: string;
    style?: object;
    noGutters?: boolean;
    children?: ReactNode;
}> = function ({ id, className, style, noGutters, children }) {
    const classes = `row
                    ${className ? className : ''}
                    ${noGutters ? 'no-gutters' : ''}`;
    return (
        <div id={id} className={classes} style={style}>
            {children}
        </div>
    );
};

Row.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    noGutters: PropTypes.bool,
    children: PropTypes.node,
};

/**
 * Grid System column components.
 * @param props Component properties.
 * @param props.id Id.
 * @param props.className Class names.
 * @param props.style Style object.
 * @param props.children Component children.
 * @returns Returns the component.
 */
const Column: FunctionComponent<{
    id?: string;
    className?: string;
    style?: object;
    children?: ReactNode;
}> = function ({ id, className, style, children }) {
    const classes = `col ${className ? className : ''}`;
    return (
        <div id={id} className={classes} style={style}>
            {children}
        </div>
    );
};

Column.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export { Row, Column };
