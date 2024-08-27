/**
 * @file index.tsx
 * @description Header brand logo.
 */

'use strict';
import { FunctionComponent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

import routes from '../../../../global/react-router/routes';
import * as styles from './BrandLogo.module.css';

/**
 * Header brand logo.
 * @param props Component properties.
 * @returns Returns the component.
 */
const BrandLogo: FunctionComponent<
    React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
> = function ({ className, ...props }) {
    const classes = classNames(styles['link'], className);

    return (
        <Link {...props} className={classes} to={routes.home} tabIndex={-1}>
            <img
                className={styles['logo']}
                src="/assets/static/img/brand-logo.png"
                alt="Brand Logo"
            />
        </Link>
    );
};

export default BrandLogo;
