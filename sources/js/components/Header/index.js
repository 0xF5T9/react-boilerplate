/**
 * @file index.js
 * @description The header component.
 */

'use strict';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/Global';
import * as Common from '../Common';
import Button from '../Button';
import Input from '../Input';
import './Header.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the header is visible.
 * @returns {boolean} Returns true if the header is visible, otherwise returns false.
 */
export function isHeaderComponentVisible() {
    const header = $('#header');
    if (!header) throw `'#header' element not found.`;

    return getComputedStyle(header).getPropertyValue('display') != 'none'
        ? true
        : false;
}

/**
 * Mobile menu icon on click handler.
 * @param {Object} event Event object.
 */
function handleMobileMenuIconClick(event) {
    event.preventDefault();
    const icon_button = $('#mobile-menu-icon');
    if (icon_button) {
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        const icon = icon_button.querySelector('i');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
        } else {
            dropdown_window.classList.remove('is-open');
        }
    } else console.warn('Mobile menu icon button not found.');
}

/**
 * Mobile menu list item on click handler.
 * @param {Object} event Event object.
 */
function handleMobileMenuListItemOnClick(event) {
    const inner_list = event.currentTarget.querySelector('&>ul');
    if (inner_list) {
        if (event.currentTarget.classList.contains('is-open')) {
            event.currentTarget.classList.remove('is-open');
            const icon = event.currentTarget.querySelector('a>i');
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-right');
        } else {
            event.currentTarget.classList.add('is-open');
            const icon = event.currentTarget.querySelector('a>i');
            icon.classList.remove('fa-caret-right');
            icon.classList.add('fa-caret-down');
        }
    }
}

/**
 * Alert icon on click handler.
 * @param {Object} event Event object.
 */
function handleAlertIconClick(event) {
    event.preventDefault();
    const icon_button = $('#alert-icon');
    if (icon_button) {
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        const icon = icon_button.querySelector('i');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
            icon.classList.remove('far');
            icon.classList.add('fas');
        } else {
            dropdown_window.classList.remove('is-open');
            icon.classList.remove('fas');
            icon.classList.add('far');
        }
    } else console.warn('Alert icon button not found.');
}

/**
 * User icon on click handler.
 * @param {Object} event Event object.
 */
function handleUserIconClick(event) {
    event.preventDefault();
    const icon_button = $('#user-icon');
    if (icon_button) {
        const dropdown_window = icon_button.querySelector('.dropdown-window');
        if (!dropdown_window.classList.contains('is-open')) {
            dropdown_window.classList.add('is-open');
        } else {
            dropdown_window.classList.remove('is-open');
        }
    } else console.warn('User icon button not found.');
}

/**
 * Mobile menu item list component.
 * @param {Object} props Component properties.
 * @param {*} props.children Item list children (required)
 * @param {String} props.id Item list id (optional)
 * @param {String} props.className Item list class names (optional)
 * @param {*} props.listProps Additional item list element properties (optional)
 * @returns Returns the component.
 */
function MobileMenuList({ children, id, className = '', listProps }) {
    return (
        <ul
            id={id}
            className={className}
            onClick={(event) => event.stopPropagation()}
            {...listProps}
        >
            {children}
        </ul>
    );
}

/**
 * Mobile menu list item component.
 * @param {Object} props Component properties.
 * @param {*} props.children List item children (required)
 * @param {String} props.id List item id (optional)
 * @param {String} props.className List item class names (optional)
 * @param {*} props.listItemProps Additional list item element properties (optional)
 * @returns Returns the component.
 */
function MobileMenuListItem({ children, id, className = '', listItemProps }) {
    return (
        <li
            id={id}
            className={className}
            onClick={handleMobileMenuListItemOnClick}
            {...listItemProps}
        >
            {children}
        </li>
    );
}

/**
 * Header navigation bar component.
 * @returns Returns the header navigation bar component.
 */
function HeaderNavbar() {
    const navigate = useNavigate();
    return (
        <nav id="navbar">
            <ul>
                <li id="navbar-item-1">
                    <Link to="/">Home</Link>
                </li>

                <li id="navbar-item-2">
                    <Common.Anchor href="#" noDefault>
                        <i className="fas fa-caret-down"></i>
                        Samples
                    </Common.Anchor>
                    <ul>
                        <li>
                            <div
                                id="navbar-item-2-buttons"
                                onClick={() => navigate('/samples/button')}
                            >
                                Buttons
                            </div>
                        </li>
                        <li>
                            <div
                                id="navbar-item-2-inputs"
                                onClick={() => navigate('/samples/input')}
                            >
                                Inputs
                            </div>
                        </li>
                        <li>
                            <div
                                id="navbar-item-2-checkboxes"
                                onClick={() => navigate('samples/checkbox')}
                            >
                                Checkboxes
                            </div>
                        </li>
                        <li>
                            <div
                                id="navbar-item-2-radios"
                                onClick={() => navigate('samples/radio')}
                            >
                                Radios
                            </div>
                        </li>
                    </ul>
                </li>

                <li id="navbar-item-3">
                    <Common.Anchor href="#" noDefault>
                        <i className="fas fa-caret-down"></i>
                        Downloads
                    </Common.Anchor>
                    <ul>
                        <li>
                            <Common.Anchor href="#" noDefault>
                                Shutdown Timer
                            </Common.Anchor>
                        </li>
                        <li>
                            <Common.Anchor href="#" noDefault>
                                ASC File Cryptor
                            </Common.Anchor>
                        </li>
                    </ul>
                </li>

                <li id="navbar-item-4">
                    <Common.Anchor href="#" noDefault>
                        <i className="fas fa-caret-down"></i>
                        Profiles
                    </Common.Anchor>
                    <ul>
                        <li>
                            <Common.Anchor href="#" noDefault>
                                Subitem 1
                            </Common.Anchor>
                        </li>
                        <li>
                            <Common.Anchor href="#" noDefault>
                                Subitem 2
                            </Common.Anchor>
                            <ul>
                                <li>
                                    <Common.Anchor href="#" noDefault>
                                        Subitem 1
                                    </Common.Anchor>
                                </li>
                                <li>
                                    <Common.Anchor href="#" noDefault>
                                        Subitem 2
                                    </Common.Anchor>
                                    <ul>
                                        <li>
                                            <Common.Anchor href="#" noDefault>
                                                Subitem 1
                                            </Common.Anchor>
                                        </li>
                                        <li>
                                            <Common.Anchor href="#" noDefault>
                                                Subitem 2
                                            </Common.Anchor>
                                            <ul>
                                                <li>
                                                    <Common.Anchor
                                                        href="#"
                                                        noDefault
                                                    >
                                                        Subitem 1
                                                    </Common.Anchor>
                                                </li>
                                                <li>
                                                    <Common.Anchor
                                                        href="#"
                                                        noDefault
                                                    >
                                                        Subitem 2
                                                    </Common.Anchor>
                                                </li>
                                                <li>
                                                    <Common.Anchor
                                                        href="#"
                                                        noDefault
                                                    >
                                                        Subitem 3
                                                    </Common.Anchor>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Common.Anchor href="#" noDefault>
                                Subitem 3
                            </Common.Anchor>
                        </li>
                        <li>
                            <Common.Anchor href="#" noDefault>
                                Subitem 4
                            </Common.Anchor>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

/**
 * Header component.
 * @returns Returns the header component.
 */
function Header() {
    const { isHeaderVisible, headerHeight } = useContext(GlobalContext);

    useEffect(() => {
        if (!isHeaderVisible) {
            // let scroll_value = parseFloat(headerHeight, 1);
            // scroll_value = -scroll_value;
            // window.scrollBy({
            //     top: scroll_value,
            //     behavior: 'instant',
            // });
            document.documentElement.style.setProperty(
                '--header-height',
                '0px'
            );
        } else {
            document.documentElement.style.setProperty(
                '--header-height',
                headerHeight
            );
            // let scroll_value = parseFloat(headerHeight, 1);
            // window.scrollBy({
            //     top: scroll_value,
            //     behavior: 'instant',
            // });
        }
    }, [isHeaderVisible]);

    return (
        <header
            id="header"
            style={{ display: isHeaderVisible ? 'flex' : 'none' }}
        >
            {/* Left content box */}
            <div id="header-left-content-box">
                {/* Brand logo */}
                <a id="header-brand-logo" href="/">
                    <img
                        src="/assets/static/img/brand-logo.png"
                        alt="Brand Logo"
                    />
                </a>

                {/* Brand logo text */}
                <a id="header-brand-text" href="/">
                    <div>
                        <h1>Boilerplate Project</h1>
                    </div>
                </a>

                {/* Navbar */}
                <HeaderNavbar />
            </div>

            {/* Middle content box */}
            <div id="header-middle-content-box"></div>

            {/* Right content box */}
            <div id="header-right-content-box">
                {/* Search input */}
                <div className="header-input" style={{ marginRight: '10px' }}>
                    <Input
                        type="text"
                        placeholder="Search"
                        transparent
                        icon={{
                            iconPosition: 'right',
                            iconClass: 'fa-solid fa-search',
                        }}
                        inputProps={{ style: { width: '200px' } }}
                    />
                </div>
                {/* Buttons */}
                <div className="header-button" style={{ marginRight: '10px' }}>
                    <Button outline whiteOnly>
                        Button 1
                    </Button>
                </div>
                <div className="header-button" style={{ marginRight: '10px' }}>
                    <Button outline whiteOnly>
                        Button 2
                    </Button>
                </div>
                <div className="header-button" style={{ marginRight: '10px' }}>
                    <Button outline whiteOnly>
                        Button 3
                    </Button>
                </div>
                {/* Mobile menu button */}
                <div id="mobile-menu-icon" className="header-icon-button">
                    <Common.Anchor
                        className="header-icon-button-icon"
                        href="#"
                        noDefault
                        onClick={handleMobileMenuIconClick}
                    >
                        <i className="fas fa-bars"></i>
                    </Common.Anchor>

                    <div id="mobile-menu-dropdown" className="dropdown-window">
                        <ul id="mobile-menu-dropdown-list">
                            <MobileMenuListItem
                                listItemProps={{ style: { display: 'none' } }}
                            >
                                <Common.Anchor href="#" noDefault>
                                    <i className="fas fa-user-circle"></i> User
                                    Center
                                </Common.Anchor>
                            </MobileMenuListItem>

                            <MobileMenuListItem
                                listItemProps={{ style: { display: 'none' } }}
                            >
                                <Common.Anchor href="#" noDefault>
                                    <i className="fas fa-bell"></i> Alerts
                                </Common.Anchor>
                            </MobileMenuListItem>

                            <hr style={{ display: 'none' }} />

                            <MobileMenuListItem>
                                <Link to="/">Home</Link>
                            </MobileMenuListItem>

                            <MobileMenuListItem>
                                <Common.Anchor href="#" noDefault>
                                    <i className="fas fa-caret-right"></i>
                                    Samples
                                </Common.Anchor>
                                <MobileMenuList>
                                    <MobileMenuListItem>
                                        <Link to="/samples/button">Button</Link>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <Link to="/samples/input">Input</Link>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <Link to="/samples/checkbox">
                                            Checkbox
                                        </Link>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <Link to="/samples/radio">Radio</Link>
                                    </MobileMenuListItem>
                                </MobileMenuList>
                            </MobileMenuListItem>

                            <MobileMenuListItem>
                                <Common.Anchor href="#" noDefault>
                                    <i className="fas fa-caret-right"></i>
                                    Downloads
                                </Common.Anchor>
                                <MobileMenuList>
                                    <MobileMenuListItem>
                                        <Common.Anchor href="#" noDefault>
                                            Shutdown Timer
                                        </Common.Anchor>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <Common.Anchor href="#" noDefault>
                                            ASC File Cryptor
                                        </Common.Anchor>
                                    </MobileMenuListItem>
                                </MobileMenuList>
                            </MobileMenuListItem>

                            <MobileMenuListItem>
                                <Common.Anchor href="#" noDefault>
                                    <i className="fas fa-caret-right"></i>
                                    Profiles
                                </Common.Anchor>
                                <MobileMenuList>
                                    <MobileMenuListItem>
                                        <Common.Anchor href="#" noDefault>
                                            Subitem 1
                                        </Common.Anchor>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <Common.Anchor href="#" noDefault>
                                            <i className="fas fa-caret-right"></i>
                                            Subitem 2
                                        </Common.Anchor>
                                        <MobileMenuList>
                                            <MobileMenuListItem>
                                                <Common.Anchor
                                                    href="#"
                                                    noDefault
                                                >
                                                    Subitem 1
                                                </Common.Anchor>
                                            </MobileMenuListItem>
                                            <MobileMenuListItem>
                                                <Common.Anchor
                                                    href="#"
                                                    noDefault
                                                >
                                                    <i className="fas fa-caret-right"></i>
                                                    Subitem 2
                                                </Common.Anchor>
                                                <MobileMenuList>
                                                    <MobileMenuListItem>
                                                        <Common.Anchor
                                                            href="#"
                                                            noDefault
                                                        >
                                                            Subitem 1
                                                        </Common.Anchor>
                                                    </MobileMenuListItem>
                                                    <MobileMenuListItem>
                                                        <Common.Anchor
                                                            href="#"
                                                            noDefault
                                                        >
                                                            <i className="fas fa-caret-right"></i>
                                                            Subitem 2
                                                        </Common.Anchor>
                                                        <MobileMenuList>
                                                            <MobileMenuListItem>
                                                                <Common.Anchor
                                                                    href="#"
                                                                    noDefault
                                                                >
                                                                    Subitem 1
                                                                </Common.Anchor>
                                                            </MobileMenuListItem>
                                                            <MobileMenuListItem>
                                                                <Common.Anchor
                                                                    href="#"
                                                                    noDefault
                                                                >
                                                                    Subitem 2
                                                                </Common.Anchor>
                                                            </MobileMenuListItem>
                                                            <MobileMenuListItem>
                                                                <Common.Anchor
                                                                    href="#"
                                                                    noDefault
                                                                >
                                                                    Subitem 3
                                                                </Common.Anchor>
                                                            </MobileMenuListItem>
                                                        </MobileMenuList>
                                                    </MobileMenuListItem>
                                                </MobileMenuList>
                                            </MobileMenuListItem>
                                        </MobileMenuList>
                                    </MobileMenuListItem>

                                    <MobileMenuListItem>
                                        <Common.Anchor href="#" noDefault>
                                            Subitem 3
                                        </Common.Anchor>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <Common.Anchor href="#" noDefault>
                                            Subitem 4
                                        </Common.Anchor>
                                    </MobileMenuListItem>
                                </MobileMenuList>
                            </MobileMenuListItem>
                        </ul>
                    </div>
                </div>
                {/* Alert button */}
                <div id="alert-icon" className="header-icon-button">
                    <a
                        href="#"
                        onClick={handleAlertIconClick}
                        className="header-icon-button-icon"
                    >
                        <i className="far fa-bell"></i>
                    </a>

                    <div id="alert-dropdown" className="dropdown-window">
                        <div className="alert-header">
                            <p className="alert-title">Alert Messages</p>
                        </div>
                        <div className="alert-body">
                            <section className="alert-message">
                                <i className="alert-message-icon fa-solid fa-circle-info"></i>
                                <div className="alert-message-content">
                                    <p className="alert-message-title">
                                        Welcome
                                    </p>
                                    <p className="alert-message-desc">
                                        Welcome to the boilerplate project.
                                    </p>
                                </div>
                            </section>
                            <section className="alert-message">
                                <i className="alert-message-icon fa-solid fa-circle-exclamation"></i>
                                <div className="alert-message-content">
                                    <p className="alert-message-title">Error</p>
                                    <p className="alert-message-desc">
                                        Unable to connect to the remote server.
                                    </p>
                                </div>
                            </section>
                            <section className="alert-message">
                                <i className="alert-message-icon fas fa-message"></i>
                                <div className="alert-message-content">
                                    <p className="alert-message-title">
                                        Message
                                    </p>
                                    <p className="alert-message-desc">
                                        This is a test message.
                                    </p>
                                </div>
                            </section>
                            <section className="alert-message">
                                <i className="alert-message-icon fas fa-message"></i>
                                <div className="alert-message-content">
                                    <p className="alert-message-title">
                                        Message
                                    </p>
                                    <p className="alert-message-desc">
                                        This is a longer test message:
                                        <br />
                                        <br />
                                        "5249871785 7619941762 0389708299
                                        9968426015 4557008913 1602392973
                                        3123316770 4820916127 8262857752
                                        2974726339"
                                    </p>
                                </div>
                            </section>
                        </div>
                        <div className="alert-footer">
                            <Common.Anchor href="#" noDefault>
                                View all alerts
                            </Common.Anchor>
                        </div>
                    </div>
                </div>
                {/* User button */}
                <div id="user-icon" className="header-icon-button">
                    <a
                        href="#"
                        className="header-icon-button-icon"
                        onClick={handleUserIconClick}
                    >
                        <i className="fas fa-user-circle"></i>
                    </a>

                    <div id="user-dropdown" className="dropdown-window">
                        <i className="fas fa-gears"></i>
                        <span>Working on progress ...</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Exports:
export default Header;
