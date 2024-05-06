/**
 * @file index.js
 * @description The content component.
 */

'use strict';
import './Content.css';

/**
 * Content component.
 * @param {Object} props Component properties.
 * @param {*} props.children Component children.
 * @returns Returns the content component.
 */
function Content({ children }) {
    return <div id="content-wrapper">{children}</div>;
}

export default Content;
