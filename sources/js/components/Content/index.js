/**
 * @file index.js
 * @description Content component.
 */

'use strict';
import './Content.css';

/**
 * Content component.
 * @param {Object} props Component properties.
 * @param {*} props.children Content children.
 * @returns Returns the component.
 */
function Content({ children }) {
    return <div id="content-wrapper">{children}</div>;
}

export default Content;
