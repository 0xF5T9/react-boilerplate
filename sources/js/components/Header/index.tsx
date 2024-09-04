/**
 * @file index.tsx
 * @description Header.
 */

'use strict';
import { FunctionComponent, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import { useGlobal } from '../../hooks/useGlobal';
import { useAuth } from '../../hooks/useAuth';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import routes from '../../global/react-router/routes';
import BrandLogo from './components/BrandLogo';
import BrandText from './components/BrandText';
import Navbar from './components/Navbar';
import MobileNavMenuIcon from './components/MobileNavMenuIcon';
import AlertIcon from './components/AlertIcon';
import UserIcon from './components/UserIcon';
import IconButton from './components/IconButton';
import Button from '../Button';
import { Sun } from '../Icons/Sun';
import { Moon } from '../Icons/Moon';
import staticTexts from '../../render/static-texts';
import * as styles from './Header.module.css';
const { headerLoginButtonText, headerRegisterButtonText } = staticTexts;

/**
 * Header.
 * @returns Returns the component.
 */
const Header: FunctionComponent = function () {
    const { theme, setTheme } = useGlobal(),
        navigate = useNavigate(),
        { sessionData } = useAuth(),
        [showAnnouncement, setShowAnnouncement] = useLocalStorage(
            'showAnnouncement',
            'true'
        );

    const [announcementText, setAnnouncementText] = useLocalStorage(
        'announcementText',
        staticTexts.announcementText
    );

    const header = useRef<HTMLElement>(),
        timeoutId = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        let previousAnnouncementText = localStorage.getItem('announcementText');
        if (previousAnnouncementText)
            previousAnnouncementText = previousAnnouncementText.slice(1, -1);

        if (previousAnnouncementText !== staticTexts.announcementText) {
            setShowAnnouncement('true');
            setAnnouncementText(staticTexts.announcementText);
        }
    }, []);

    useLayoutEffect(() => {
        function handleHeaderResize() {
            if (timeoutId?.current) clearTimeout(timeoutId.current);

            timeoutId.current = setTimeout(() => {
                const currentHeaderHeight = getComputedStyle(
                    document.documentElement
                ).getPropertyValue('--header-height');
                if (!currentHeaderHeight) {
                    console.warn(
                        'Expect header height variable in root, but none were found.',
                        `\nFound value: '${currentHeaderHeight}'`
                    );
                    return;
                }

                const headerHeight =
                        header?.current?.getBoundingClientRect()?.height,
                    parsedHeight = parseFloat(headerHeight.toFixed(2));

                document.documentElement.style.setProperty(
                    '--header-height',
                    `${parsedHeight}px`
                );
            }, 1);
        }

        // BUG: ResizeObserver loop completed with undelivered notifications.
        // Added 1ms debounce. To be observed.
        const observer = new ResizeObserver(handleHeaderResize);
        observer?.observe(header?.current);

        return () => {
            observer?.disconnect();

            const currentHeaderHeight = getComputedStyle(
                document.documentElement
            ).getPropertyValue('--header-height');
            if (!currentHeaderHeight)
                console.warn(
                    'Expect header height variable in root, but none were found.',
                    `\nFound value: '${currentHeaderHeight}'`
                );
            document.documentElement.style.setProperty(
                '--header-height',
                `0px`
            );
        };
    }, []);

    return (
        <header ref={header} className={styles['header']}>
            {showAnnouncement === 'true' && announcementText && (
                <Tippy
                    content={staticTexts.announcementCloseText}
                    theme="light"
                >
                    <div className={styles['header-content-announcement']}>
                        <div
                            className={
                                styles['header-content-announcement-wrapper']
                            }
                            onClick={() => setShowAnnouncement('false')}
                        >
                            <span className={styles['announcement-text']}>
                                <i className="fas fa-bullhorn"></i>
                                {announcementText}
                            </span>
                        </div>
                    </div>
                </Tippy>
            )}

            <div className={styles['header-content']}>
                <div className={styles['left-content']}>
                    <MobileNavMenuIcon />
                    <BrandLogo />
                    <BrandText />
                </div>

                <div className={styles['middle-content']}>
                    <Navbar />
                </div>

                <div className={styles['right-content']}>
                    <IconButton
                        icon={theme === 'dark' ? Sun : Moon}
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                        style={{
                            marginRight: sessionData ? undefined : '20px',
                        }}
                    />

                    {sessionData ? (
                        <>
                            <AlertIcon />

                            <UserIcon />
                        </>
                    ) : (
                        <>
                            <Link
                                className={styles['login-link']}
                                to={routes.login}
                            >
                                {headerLoginButtonText}
                            </Link>
                            <Button onClick={() => navigate(routes.register)}>
                                {headerRegisterButtonText}
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
