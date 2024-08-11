/**
 * @file index.tsx
 * @description Section subtitle component.
 */

'use strict';
import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import * as styles from './SectionSubtitle.module.css';

/**
 * Section subtitle component.
 * @param props Component properties.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.style  Element styles.
 * @param props.children Component children.
 * @returns Returns the component.
 */
function SectionSubtitle({
    id,
    className,
    style,
    children,
}: {
    id?: string;
    className?: string;
    style?: object;
    children: ReactNode;
}) {
    const classes = `${styles['section-subtitle']} ${className || ''}`;
    return (
        <span id={id} className={classes} style={style}>
            {children}
        </span>
    );
}

SectionSubtitle.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default SectionSubtitle;
