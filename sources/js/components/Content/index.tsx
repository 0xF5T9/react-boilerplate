/**
 * @file index.tsx
 * @description Content wrapper component.
 */

'use strict';
import { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Content.module.css';

/**
 * Content wrapper component.
 * @param props Component properties.
 * @param props.children Content children.
 * @returns Returns the component.
 */
const Content: FunctionComponent<{ children?: ReactNode }> = function ({
    children,
}) {
    return <div className={styles['content-wrapper']}>{children}</div>;
};

Content.propTypes = {
    children: PropTypes.node,
};

export default Content;
