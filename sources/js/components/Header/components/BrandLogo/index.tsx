/**
 * @file index.tsx
 * @description Header brand logo component.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
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
function BrandLogo({ id, className }: { id?: string; className?: string }) {
    return (
        <Link
            id={id}
            className={`${styles['header-brand-logo']} ${className || ''}`}
            to={routes.home}
            tabIndex={-1}
        >
            <img src="/assets/static/img/brand-logo.png" alt="Brand Logo" />
        </Link>
    );
}

BrandLogo.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
};

export default BrandLogo;
