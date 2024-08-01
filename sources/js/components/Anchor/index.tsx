/**
 * @file index.tsx
 * @description Anchor component.
 */

'use strict';
import { ReactNode } from 'react';
import PropTypes from 'prop-types';

/**
 * Anchor component.
 * @param props Component properties.
 * @param props.id Element id.
 * @param props.className Element class names.
 * @param props.href href value.
 * @param props.newTab Open the document in a new window or tab.
 * @param props.onClick Anchor on-click callback.
 * @param props.style Additional anchor element styles.
 * @param props.children Anchor children.
 * @note If 'props.href' is passed, 'props.onClick' won't be assigned.
 * @returns Returns the component.
 */
function Anchor({
    id,
    className,
    href,
    newTab,
    onClick,
    style,
    children,
}: {
    id?: string;
    className?: string;
    href?: string;
    newTab?: boolean;
    onClick?: any;
    style?: object;
    children?: ReactNode;
}) {
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

Anchor.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    newTab: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default Anchor;
