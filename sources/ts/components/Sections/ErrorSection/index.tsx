/**
 * @file index.tsx
 * @description Error section.
 */

'use strict';
import { FunctionComponent } from 'react';
import { Link, useRouteError } from 'react-router-dom';

import routes from '~/ts/global/react-router/routes';
import { FlexibleSection } from '~/ts/components/Content/components/GridSection';
import Button from '~/ts/components/Button';
import staticTexts from '~/ts/render/static-texts';
import * as styles from './ErrorSection.module.css';

/**
 * Error section.
 * @returns Returns the component.
 */
const ErrorSection: FunctionComponent = function () {
    const error: any = useRouteError();
    console.warn(error);

    return (
        <>
            <FlexibleSection
                contentProps={{
                    className: styles['error-section'],
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px 20px',
                        userSelect: 'none',
                    },
                }}
            >
                {error.status ? (
                    <>
                        <h1
                            className={styles['error-status-code']}
                        >{`${error.status}`}</h1>
                        <div className={styles['error-data']}>
                            <span>{`${error.statusText}`}</span>
                            <span>{`${error.data}`}</span>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className={styles['error-status-code']}>500</h1>
                        <div className={styles['error-data']}>
                            <span>{error.message}</span>
                        </div>
                    </>
                )}
                <div className={styles['homepage-link']}>
                    <Button>
                        <Link to={routes.home}>
                            <i className="fa-solid fa-arrow-left"></i>{' '}
                            {staticTexts.backToHomePage404}
                        </Link>{' '}
                    </Button>
                </div>
            </FlexibleSection>
        </>
    );
};

export default ErrorSection;
