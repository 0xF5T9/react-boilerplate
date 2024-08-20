/**
 * @file index.tsx
 * @description Header brand logo component.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../../../configs/routes';

import * as styles from './BrandLogo.module.css';

/**
 * Header brand logo component.
 * @param props Component properties.
 * @param props.id Element id.
 * @param props.className Element addtional class names.
 * @returns Returns the component.
 */
const BrandLogo: FunctionComponent<{ id?: string; className?: string }> =
    function ({ id, className }) {
        return (
            <Link
                id={id}
                className={`${styles['link']} ${className || ''}`}
                to={routes.home}
                tabIndex={-1}
            >
                <img
                    className={styles['logo']}
                    src="/assets/static/img/brand-logo.png"
                    alt="Brand Logo"
                />
            </Link>
        );
    };

BrandLogo.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
};

export default BrandLogo;
