/**
 * @file index.tsx
 * @description Header icon button with popup window (optional).
 * @note This is a sub-component of the <Header /> component.
 * @todo Convert to use icon component only.
 */
'use strict';
import { ForwardRefRenderFunction, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as styles from './IconButton.module.css';

/**
 * Header icon button with popup window (optional).
 * @param props Component properties.
 * @param props.id Button id.
 * @param props.className Additional button class names.
 * @param props.icon Icon classes.
 * @param props.icon2 Icon component.
 * @param props.to React router dom 'to' attribute value of the 'Link' component.
 * @param props.onClick Button on-click callback.
 * @param props.style Style object.
 * @returns Returns the component.
 */
const IconButtonRefRender: ForwardRefRenderFunction<
    HTMLDivElement,
    {
        id?: string;
        className?: string;
        icon?: string;
        icon2?: any;
        to?: string;
        onClick?: any;
        style?: object;
    }
> = function ({ id, className, icon, icon2, to, onClick, style }, ref) {
    const Icon = icon2;
    return (
        <div
            ref={ref}
            id={id}
            className={`${styles['header-icon-button']} ${className ? className : ''}`}
            onClick={onClick}
            style={style}
        >
            <Link
                className={styles['header-icon-button-icon']}
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
                tabIndex={-1}
            >
                {icon2 ? (
                    <Icon style={{ width: '70%' }} />
                ) : (
                    <i className={icon}></i>
                )}
            </Link>
        </div>
    );
};

const IconButton = forwardRef(IconButtonRefRender);

IconButton.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    icon2: PropTypes.any,
    to: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
};

export default IconButton;
export { styles as IconButtonStyles };
