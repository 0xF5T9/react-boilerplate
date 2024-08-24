/**
 * @file index.tsx
 * @description Header brand text component.
 * @note This is a sub-component of the <Header /> component.
 */
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../../global/react-router/routes';

import * as styles from './BrandText.module.css';

/**
 * Header brand text component.
 * @returns Returns the component.
 */
const BrandText: FunctionComponent = function () {
    return (
        <Link className={styles['link']} to={routes.home} tabIndex={-1}>
            <div className={styles['text-wrapper']}>
                <h1 className={styles['text']}>React Project</h1>
            </div>
        </Link>
    );
};

export default BrandText;
