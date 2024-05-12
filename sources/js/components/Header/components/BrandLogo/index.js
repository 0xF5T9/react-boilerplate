/**
 * @file index.js
 * @description Header brand logo component.
 */

'use strict';
import { Link } from 'react-router-dom';
import * as styles from './BrandLogo.module.css';

/**
 * The header brand logo component.
 * @returns Returns the header brand logo component.
 */
function BrandLogo() {
    return (
        <Link className={styles['header-brand-logo']} to="/" tabIndex={-1}>
            <img src="/assets/static/img/brand-logo.png" alt="Brand Logo" />
        </Link>
    );
}

export default BrandLogo;
