/**
 * @file index.tsx
 * @description Header component.
 */

'use strict';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import routes from '../../configs/routes';

import { GlobalContext } from '../Context/Global';
import BrandLogo from './components/BrandLogo';
import BrandText from './components/BrandText';
import Navbar from './components/Navbar';
import MobileNavMenuIcon from './components/MobileNavMenuIcon';
import AlertIcon from './components/AlertIcon';
import UserIcon from './components/UserIcon';
import IconButton from './components/IconButton';
import Button from '../Button';
import { LineMdSunnyOutlineTwotone } from '../Icons/MLSun';
import { LineMdMoonSimpleTwotone } from '../Icons/MLMoon';

import * as styles from './Header.module.css';
const $ = document.querySelector.bind(document);

/**
 * Header component.
 * @returns Returns the component.
 */
function Header() {
    const { theme, setTheme } = useContext(GlobalContext),
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
                            icon2={
                                theme === 'monokai-pro'
                                    ? LineMdMoonSimpleTwotone
                                    : LineMdSunnyOutlineTwotone
                            }
                            onClick={() =>
                                setTheme(
                                    theme === 'monokai-pro'
                                        ? 'light-blue'
                                        : 'monokai-pro'
                                )
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
                            icon2={
                                theme === 'monokai-pro'
                                    ? LineMdMoonSimpleTwotone
                                    : LineMdSunnyOutlineTwotone
                            }
                            onClick={() =>
                                setTheme(
                                    theme === 'monokai-pro'
                                        ? 'light-blue'
                                        : 'monokai-pro'
                                )
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
