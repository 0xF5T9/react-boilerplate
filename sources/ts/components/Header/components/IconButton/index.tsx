/**
 * @file index.tsx
 * @description Header icon button.
 */

'use strict';
import { ForwardRefRenderFunction, forwardRef, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './IconButton.module.css';

const IconButtonRefRender: ForwardRefRenderFunction<
    HTMLDivElement,
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > & {
        to?: string;
        icon?: FunctionComponent<any>;
        isOpen?: boolean;
    }
> = function ({ to, icon, isOpen = false, className, ...props }, ref) {
    const classes = classNames(styles['button'], className, {
        [styles['is-popup-open']]: isOpen,
    });

    const Icon: FunctionComponent<any> = icon;

    return (
        <div {...props} ref={ref} className={classes}>
            <Link
                className={styles['link']}
                to={to}
                onClick={!to ? (event) => event.preventDefault() : undefined}
                tabIndex={-1}
            >
                {icon && <Icon className={styles['icon']} />}
            </Link>
        </div>
    );
};

/**
 * Header icon button.
 * @param props Component properties.
 * @param props.to React router dom 'to' attribute value of the 'Link' component.
 * @param props.icon Icon component.
 * @param props.isOpen Use this prop to inform the component if a popup is open, ensuring correct rendering of styles.
 * @returns Returns the component.
 */
const IconButton = forwardRef(IconButtonRefRender);

IconButton.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.any,
    isOpen: PropTypes.bool,
};

export default IconButton;
