/**
 * @file index.js
 * @description App404 component.
 */

import { useRouteError, Link, ScrollRestoration } from 'react-router-dom';
import Content from '../Content';
import ContentSection from '../Content/components/ContentSection';
import Button from '../Button';
import * as styles from './App404.module.css';

/**
 * App404 component.
 * @returns Returns the component.
 */
function App404() {
    const error = useRouteError();
    console.warn(error);

    return (
        <>
            <style>
                {`
                    :root {
                    --header-height: 0px;
                    --footer-height: 0px;
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
                                <Link to="/">
                                    <i className="fa-solid fa-arrow-left"></i>{' '}
                                    Back To Homepage
                                </Link>{' '}
                            </Button>
                        </div>
                    </ContentSection>
                </Content>
            </div>
            <ScrollRestoration />
        </>
    );
}

export default App404;
