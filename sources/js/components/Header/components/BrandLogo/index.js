/**
 * @file index.js
 * @description Header brand logo component.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { Link } from 'react-router-dom';

import configs from '../../../../../configs';

import * as styles from './BrandLogo.module.css';

/**
 * Header brand logo component.
 * @returns Returns the component.
 */
function BrandLogo() {
    return (
        <Link
            className={styles['header-brand-logo']}
            to={configs.routes.home}
            tabIndex={-1}
        >
            <img src="/assets/static/img/brand-logo.png" alt="Brand Logo" />
        </Link>
    );
}

export default BrandLogo;
