/**
 * @file common.js
 * @description Common components.
 */

'use strict';

/**
 * Anchor component.
 * @param {Object} props.children Anchor children (optional)
 * @param {Object} props.id Anchor id (optional)
 * @param {Object} props.className Anchor class (optional)
 * @param {Object} props.href Anchor href (optional)
 * @param {Object} props.noDefault Disable anchor default behavior (optional: true | false)
 * @param {Object} props.onClick Anchor on-click callback function. noDefault must be set to true. (optional)
 * @param {Object} props.anchorProps Additional anchor element properties (optional)
 * @returns Returns the component.
 */
export function Anchor({
    children,
    id = '',
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
            {...anchorProps}
        >
            {children}
        </a>
    );
}
