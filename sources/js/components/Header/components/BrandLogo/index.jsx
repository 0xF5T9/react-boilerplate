/**
 * @file index.jsx
 * @description Header brand logo component.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { Link } from 'react-router-dom';

import { routes } from '../../../../configs/react-router';

import * as styles from './BrandLogo.module.css';

/**
 * Header brand logo component.
 * @returns Returns the component.
 */
function BrandLogo() {
    return (
        <Link
            className={styles['header-brand-logo']}
            to={routes.home}
            tabIndex={-1}
        >
            <img src="/assets/static/img/brand-logo.png" alt="Brand Logo" />
        </Link>
    );
}

export default BrandLogo;
