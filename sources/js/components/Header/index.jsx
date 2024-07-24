/**
 * @file index.jsx
 * @description Header component.
 */

'use strict';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import { routes } from '../../configs/react-router';

import { GlobalContext } from '../Context/Global';
import BrandLogo from './components/BrandLogo';
import BrandText from './components/BrandText';
import Navbar from './components/Navbar';
import MobileNavMenuIcon from './components/MobileNavMenuIcon';
import AlertIcon from './components/AlertIcon';
import UserIcon from './components/UserIcon';
import IconButton from './components/IconButton';
import Button from '../Button';
import { showToast } from '../ToastOverlay';
import { LineMdSunnyOutlineTwotone } from '../Icons/MLSun';
import { LineMdMoonSimpleTwotone } from '../Icons/MLMoon';
import './Header.css';
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
        <header id="header">
            {/* Left content box */}
            <div id="header-left-content-box">
                {/* Mobile navigation menu */}
                <MobileNavMenuIcon />

                {/* Brand logo and brand text */}
                <BrandLogo />
                <BrandText />
            </div>

            {/* Middle content box */}
            <div id="header-middle-content-box">
                <Navbar />
            </div>

            {/* Right content box */}
            <div id="header-right-content-box">
                {authSession ? (
                    <>
                        {/* Connect button */}
                        <Button
                            outline
                            style={{ marginRight: '5px' }}
                            onClick={() => {
                                const audio = new Audio(
                                    '/assets/static/sound/ClickSoundEffect.wav'
                                );
                                audio.play();
                                showToast(
                                    'Error',
                                    'Unable to connect to the remote server.',
                                    'error'
                                );
                            }}
                        >
                            <i
                                className="fa-solid fa-ethernet"
                                style={{ marginRight: '8px' }}
                            ></i>
                            Connect
                        </Button>

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
                        <Link className="login-link" to={routes.login}>
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
