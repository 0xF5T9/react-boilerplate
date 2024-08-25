/**
 * @file index.tsx
 * @description Header icon button with optional popup window.
 */
'use strict';
import {
    ForwardRefRenderFunction,
    CSSProperties,
    forwardRef,
    FunctionComponent,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as styles from './IconButton.module.css';

/**
 * Header icon button with optional popup window.
 * @param props Component properties.
 * @param props.id Button id.
 * @param props.className Additional button class names.
 * @param props.icon Icon component.
 * @param props.to React router dom 'to' attribute value of the 'Link' component.
 * @param props.onClick Button on-click callback.
 * @param props.isOpen Use this prop to inform the component if a popup is open, ensuring correct rendering of styles.
 * @param props.style Style object.
 * @returns Returns the component.
 */
const IconButtonRefRender: ForwardRefRenderFunction<
    HTMLDivElement,
    {
        id?: string;
        className?: string;
        icon?: FunctionComponent<any>;
        to?: string;
        onClick?: (...args: any[]) => any;
        isOpen?: boolean;
        style?: CSSProperties;
    }
> = function (
    { id, className, icon, to, onClick, isOpen = false, style },
    ref
) {
    const Icon: FunctionComponent<any> = icon;
    return (
        <div
            ref={ref}
            id={id}
            className={`${styles['header-icon-button']} ${className ? className : ''} ${isOpen ? styles['is-popup-open'] : ''}`}
            onClick={onClick}
            style={style}
        >
            <Link
                className={styles['header-icon-button-icon']}
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
                tabIndex={-1}
            >
                {icon && <Icon style={{ width: '70%' }} />}
            </Link>
        </div>
    );
};

const IconButton = forwardRef(IconButtonRefRender);

IconButton.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.any,
    to: PropTypes.string,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    style: PropTypes.object,
};

export default IconButton;
