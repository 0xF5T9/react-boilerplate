/**
 * @file index.js
 * @description Anchor component.
 */

'use strict';

/**
 * Anchor component.
 * @param {Object} props Component properties.
 * @param {String} props.id Anchor id.
 * @param {String} props.className Anchor class names.
 * @param {String} props.href href value.
 * @param {Boolean} props.newTab Open the document in a new window or tab.
 * @param {Function} props.onClick Anchor on-click callback.
 * @param {Object} props.style Additional anchor element styles.
 * @param {*} props.children Anchor children.
 * @note If 'props.href' is passed, 'props.onClick' won't be assigned.
 * @returns Returns the component.
 */
function Anchor({ id, className, href, newTab, onClick, style, children }) {
    return (
        <a
            id={id}
            className={className}
            href={href}
            target={newTab ? '_blank' : '_self'}
            onClick={
                href
                    ? null
                    : onClick
                      ? onClick
                      : (event) => event.preventDefault()
            }
            style={style}
            tabIndex={-1}
        >
            {children}
        </a>
    );
}

export default Anchor;
