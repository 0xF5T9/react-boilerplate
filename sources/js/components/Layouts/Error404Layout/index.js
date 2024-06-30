/**
 * @file index.js
 * @description Error 404 layout component.
 * @todo TODO: Update layout to handle more errors than just 404.
 */

'use strict';
import { Link, ScrollRestoration, useRouteError } from 'react-router-dom';

import { routes } from '../../../configs/react-router';

import Content from '../../Content';
import ContentSection from '../../Content/components/ContentSection';
import ModalOverlay from '../../ModalOverlay';
import ToastOverlay from '../../ToastOverlay';
// import DebugOverlay from '../../DebugOverlay';
import Button from '../../Button';

import * as layoutStyles from '../Layout.module.css';
import * as styles from './Error404Layout.module.css';

/**
 * Error 404 layout component.
 * @returns Returns the component.
 */
function Error404Layout() {
    const error = useRouteError();
    console.warn(error);

    return (
        <>
            <style>
                {`
                    :root {
                    --header-height: 0px !important;
                    --footer-height: 0px !important;
                    }
                `}
            </style>
            <div id="app">
                <Content>
                    <ContentSection
                        innerSectionStyle={{
                            '--value': '-12px',
                            padding: '20px 20px',
                            userSelect: 'none',
                        }}
                        flexCenter
                        textCenter
                    >
                        <h1 className={styles['title-404']}>404</h1>
                        <h1 className={styles['subtitle-404']}>
                            {`Page Not Found`}
                        </h1>
                        <div className={styles['homepage-link-404']}>
                            <Button>
                                <Link to={routes.home}>
                                    <i className="fa-solid fa-arrow-left"></i>{' '}
                                    Back To Homepage
                                </Link>{' '}
                            </Button>
                        </div>
                    </ContentSection>
                </Content>
                <ModalOverlay />
                <ToastOverlay />
                {/* <DebugOverlay /> */}
                <div className={layoutStyles['background']} />
            </div>
            <ScrollRestoration />
        </>
    );
}

export default Error404Layout;
