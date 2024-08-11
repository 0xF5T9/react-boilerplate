/**
 * @file index.tsx
 * @description Section title component.
 */

'use strict';
import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import * as styles from './SectionTitle.module.css';

/**
 * Section title component.
 * @param props.element Element type.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.style Element styles.
 * @param props.children Element children.
 * @returns Returns the component.
 */
function SectionTitle({
    element = 'h2',
    id,
    className,
    style,
    children,
}: {
    element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    id?: string;
    className?: string;
    style?: object;
    children: ReactNode;
}) {
    const Element = element,
        classes = `${styles['section-title']} ${className || ''}`;
    return (
        <Element id={id} className={classes} style={style}>
            {children}
        </Element>
    );
}

SectionTitle.propTypes = {
    element: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default SectionTitle;
