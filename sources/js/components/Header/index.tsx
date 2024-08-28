/**
 * @file index.tsx
 * @description Header.
 */

'use strict';
import { FunctionComponent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useGlobal } from '../../hooks/useGlobal';
import { useAuth } from '../../hooks/useAuth';
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
import staticRender from '../../render/static-render';
import * as styles from './Header.module.css';
const { headerLoginButtonText, headerRegisterButtonText } = staticRender;

/**
 * Header.
 * @returns Returns the component.
 */
const Header: FunctionComponent = function () {
    const { theme, setTheme } = useGlobal(),
        navigate = useNavigate(),
        { sessionData } = useAuth();

    return (
        <header className={styles['header']}>
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
