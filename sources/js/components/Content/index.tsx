/**
 * @file index.tsx
 * @description Content component.
 */

'use strict';
import { ReactNode } from 'react';
import PropTypes from 'prop-types';

import './Content.css';

/**
 * Content component.
 * @param props Component properties.
 * @param props.children Content children.
 * @returns Returns the component.
 */
function Content({ children }: { children?: ReactNode }) {
    return <div id="content-wrapper">{children}</div>;
}

Content.propTypes = {
    children: PropTypes.node,
};

export default Content;
