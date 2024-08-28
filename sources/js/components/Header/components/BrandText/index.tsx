/**
 * @file index.tsx
 * @description Header brand text.
 */

'use strict';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import routes from '../../../../global/react-router/routes';
import staticTexts from '../../../../render/static-texts';
import * as styles from './BrandText.module.css';
const { brandText } = staticTexts;

/**
 * Header brand text.
 * @param props Component properties.
 * @returns Returns the component.
 */
const BrandText: FunctionComponent<
    React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
> = function ({ className, ...props }) {
    const classes = classNames(styles['link'], className);

    return (
        <Link {...props} className={classes} to={routes.home} tabIndex={-1}>
            <div className={styles['text-wrapper']}>
                <span className={styles['text']}>{brandText}</span>
            </div>
        </Link>
    );
};

export default BrandText;
