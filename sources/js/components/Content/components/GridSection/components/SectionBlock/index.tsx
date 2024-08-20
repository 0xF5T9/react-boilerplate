/**
 * @file index.tsx
 * @description Section block component.
 */

'use strict';
import { FunctionComponent, CSSProperties, ReactNode } from 'react';
import PropTypes from 'prop-types';

import * as styles from './SectionBlock.module.css';

/**
 * Section block component.
 * @param props Component properties.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.style  Element styles.
 * @param props.children Component children.
 * @returns Returns the component.
 */
const SectionBlock: FunctionComponent<{
    id?: string;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}> = function ({ id, className, style, children }) {
    const classes = `${styles['section-block']} ${className || ''}`;
    return (
        <div id={id} className={classes} style={style}>
            {children}
        </div>
    );
};

SectionBlock.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default SectionBlock;
