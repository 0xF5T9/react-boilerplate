/**
 * @file index.tsx
 * @description Header component.
 */

'use strict';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import routes from '../../configs/routes';

import { globalContext } from '../Context/Global';
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

import * as styles from './Header.module.css';
const $ = document.querySelector.bind(document);

/**
 * Header component.
 * @returns Returns the component.
 */
function Header() {
    const { theme, setTheme } = useContext(globalContext),
        { authSession, logout } = useAuth(),
        navigate = useNavigate();

    return (
        <header className={styles['header']}>
            {/* Left content box */}
            <div className={styles['left-content']}>
                {/* Mobile navigation menu */}
                <MobileNavMenuIcon />

                {/* Brand logo and brand text */}
                <BrandLogo />
                <BrandText />
            </div>

            {/* Middle content box */}
            <div className={styles['middle-content']}>
                <Navbar />
            </div>

            {/* Right content box */}
            <div className={styles['right-content']}>
                {authSession ? (
                    <>
                        <IconButton
                            icon2={theme === 'dark' ? Sun : Moon}
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                        />

                        {/* Alert icon */}
                        <AlertIcon />

                        {/* User icon */}
                        <UserIcon
                            menus={[
                                {
                                    id: 'default',
                                    menu: [
                                        {
                                            text: 'Profile',
                                            icon: 'fas fa-user',
                                            to: 'profile',
                                        },
                                        {
                                            text: 'Settings',
                                            icon: 'fas fa-gear',
                                            gotoMenu: 'settings',
                                        },
                                        {
                                            text: 'Logout',
                                            icon: 'fas fa-right-from-bracket',
                                            onClick: () => logout(),
                                        },
                                    ],
                                },
                                {
                                    id: 'settings',
                                    menu: [
                                        {
                                            text: 'No option availables.',
                                        },
                                        {
                                            text: 'Back',
                                            icon: 'fas fa-arrow-left',
                                            gotoMenu: 'default',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </>
                ) : (
                    <>
                        <IconButton
                            style={{ marginRight: '10px' }}
                            icon2={theme === 'dark' ? Sun : Moon}
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                        />
                        <Link
                            className={styles['login-link']}
                            to={routes.login}
                        >
                            Login
                        </Link>{' '}
                        <Button
                            style={{ marginRight: '10px' }}
                            onClick={() => navigate(routes.register)}
                            elementType="div"
                        >
                            Register
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
