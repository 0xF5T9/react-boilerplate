/**
 * @file index.js
 * @description Common components.
 */

'use strict';

/**
 * Anchor component.
 * @param {Object} props Component properties.
 * @param {*} props.children Anchor children (optional)
 * @param {String} props.id Anchor id (optional)
 * @param {String} props.className Anchor class (optional)
 * @param {String} props.href Anchor href (optional)
 * @param {Boolean} props.noDefault Disable anchor default behavior (optional: true | false)
 * @param {Function} props.onClick Anchor on-click callback function. noDefault must be set to true. (optional)
 * @param {*} props.anchorProps Additional anchor element properties (optional)
 * @returns Returns the component.
 */
export function Anchor({
    children,
    id,
    className = '',
    href = '',
    noDefault = false,
    onClick = null,
    anchorProps,
}) {
    if (noDefault && !onClick)
        onClick = (event) => {
            event.preventDefault();
        };
    else if (!noDefault && onClick) noDefault = true;
    return (
        <a
            id={id}
            href={href}
            className={className}
            onClick={!noDefault ? () => {} : onClick}
            tabIndex={-1}
            {...anchorProps}
        >
            {children}
        </a>
    );
}
