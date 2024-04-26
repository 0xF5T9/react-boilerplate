/**
 * @file header.js
 * @description The header component.
 */

'use strict';
import * as commonComponents from './common';
import * as buttonComponents from './button';
import * as inputComponents from './input';
const $ = document.querySelector.bind(document);

/************************
 * CUSTOM EVENT HANDLES *
 ************************/

function scrollToButtonSection(event) {
    const button_section = $('#button-sample-section');
    if (button_section) {
        button_section.scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    }
}

function scrollToInputSection(event) {
    event.preventDefault();
    const input_section = $('#input-sample-section');
    if (input_section) {
        $('#input-sample-section').scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    }
}

function scrollToCheckboxSection(event) {
    event.preventDefault();
    const checkbox_section = $('#checkbox-sample-section');
    if (checkbox_section) {
        checkbox_section.scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    }
}

function scrollToRadioSection(event) {
    event.preventDefault();
    const radio_section = $('#radio-sample-section');
    if (radio_section) {
        radio_section.scrollIntoView();
        global.lastHeaderHeightValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue('--header-height');
        let lastHeaderHeightValue = parseInt(global.lastHeaderHeightValue, 10);
        lastHeaderHeightValue = -lastHeaderHeightValue;
        window.scrollBy({
            top: lastHeaderHeightValue,
            behavior: 'instant',
        });
    }
}

/***************************
 * COMPONENT EVENT HANDLES *
 ***************************/

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

/***************************
 * HEADER CHILD COMPONENTS *
 ***************************/

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
    return (
        <nav id="navbar">
            <ul>
                <li id="navbar-item-1">
                    <commonComponents.Anchor href="/">
                        Home
                    </commonComponents.Anchor>
                </li>

                <li id="navbar-item-2">
                    <commonComponents.Anchor href="#" noDefault>
                        <i className="fas fa-caret-down"></i>
                        Samples
                    </commonComponents.Anchor>
                    <ul>
                        <li>
                            <a
                                href="#"
                                id="navbar-item-2-buttons"
                                onClick={scrollToButtonSection}
                            >
                                Buttons
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                id="navbar-item-2-inputs"
                                onClick={scrollToInputSection}
                            >
                                Inputs
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                id="navbar-item-2-checkboxes"
                                onClick={scrollToCheckboxSection}
                            >
                                Checkboxes
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                id="navbar-item-2-radios"
                                onClick={scrollToRadioSection}
                            >
                                Radios
                            </a>
                        </li>
                    </ul>
                </li>

                <li id="navbar-item-3">
                    <commonComponents.Anchor href="#" noDefault>
                        <i className="fas fa-caret-down"></i>
                        Downloads
                    </commonComponents.Anchor>
                    <ul>
                        <li>
                            <commonComponents.Anchor href="#" noDefault>
                                Shutdown Timer
                            </commonComponents.Anchor>
                        </li>
                        <li>
                            <commonComponents.Anchor href="#" noDefault>
                                ASC File Cryptor
                            </commonComponents.Anchor>
                        </li>
                    </ul>
                </li>

                <li id="navbar-item-4">
                    <commonComponents.Anchor href="#" noDefault>
                        <i className="fas fa-caret-down"></i>
                        Profiles
                    </commonComponents.Anchor>
                    <ul>
                        <li>
                            <commonComponents.Anchor href="#" noDefault>
                                Subitem 1
                            </commonComponents.Anchor>
                        </li>
                        <li>
                            <commonComponents.Anchor href="#" noDefault>
                                Subitem 2
                            </commonComponents.Anchor>
                            <ul>
                                <li>
                                    <commonComponents.Anchor href="#" noDefault>
                                        Subitem 1
                                    </commonComponents.Anchor>
                                </li>
                                <li>
                                    <commonComponents.Anchor href="#" noDefault>
                                        Subitem 2
                                    </commonComponents.Anchor>
                                    <ul>
                                        <li>
                                            <commonComponents.Anchor
                                                href="#"
                                                noDefault
                                            >
                                                Subitem 1
                                            </commonComponents.Anchor>
                                        </li>
                                        <li>
                                            <commonComponents.Anchor
                                                href="#"
                                                noDefault
                                            >
                                                Subitem 2
                                            </commonComponents.Anchor>
                                            <ul>
                                                <li>
                                                    <commonComponents.Anchor
                                                        href="#"
                                                        noDefault
                                                    >
                                                        Subitem 1
                                                    </commonComponents.Anchor>
                                                </li>
                                                <li>
                                                    <commonComponents.Anchor
                                                        href="#"
                                                        noDefault
                                                    >
                                                        Subitem 2
                                                    </commonComponents.Anchor>
                                                </li>
                                                <li>
                                                    <commonComponents.Anchor
                                                        href="#"
                                                        noDefault
                                                    >
                                                        Subitem 3
                                                    </commonComponents.Anchor>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <commonComponents.Anchor href="#" noDefault>
                                Subitem 3
                            </commonComponents.Anchor>
                        </li>
                        <li>
                            <commonComponents.Anchor href="#" noDefault>
                                Subitem 4
                            </commonComponents.Anchor>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

/********************
 * HEADER COMPONENT *
 *********************/

/**
 * Header component.
 * @returns Returns the header component.
 */
export function Header() {
    return (
        <header id="header">
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
                <inputComponents.Input
                    type="text"
                    placeholder="Search"
                    transparent
                    icon={{
                        iconPosition: 'icon-right',
                        iconClass: 'fa-solid fa-search',
                    }}
                    inputProps={{ style: { width: '200px' } }}
                />

                {/* Buttons */}
                <div className="header-button">
                    <buttonComponents.Button outline whiteOnly>
                        Button 1
                    </buttonComponents.Button>
                </div>
                <div className="header-button">
                    <buttonComponents.Button outline whiteOnly>
                        Button 2
                    </buttonComponents.Button>
                </div>
                <div className="header-button">
                    <buttonComponents.Button outline whiteOnly>
                        Button 3
                    </buttonComponents.Button>
                </div>

                {/* Mobile menu button */}
                <div id="mobile-menu-icon" className="header-icon-button">
                    <commonComponents.Anchor
                        className="header-icon-button-icon"
                        href="#"
                        noDefault
                        onClick={handleMobileMenuIconClick}
                    >
                        <i className="fas fa-bars"></i>
                    </commonComponents.Anchor>

                    <div id="mobile-menu-dropdown" className="dropdown-window">
                        <ul id="mobile-menu-dropdown-list">
                            <MobileMenuListItem
                                listItemProps={{ style: { display: 'none' } }}
                            >
                                <commonComponents.Anchor href="#" noDefault>
                                    <i className="fas fa-user-circle"></i> User
                                    Center
                                </commonComponents.Anchor>
                            </MobileMenuListItem>

                            <MobileMenuListItem
                                listItemProps={{ style: { display: 'none' } }}
                            >
                                <commonComponents.Anchor href="#" noDefault>
                                    <i className="fas fa-bell"></i> Alerts
                                </commonComponents.Anchor>
                            </MobileMenuListItem>

                            <hr style={{ display: 'none' }} />

                            <MobileMenuListItem>
                                <commonComponents.Anchor href="/">
                                    Home
                                </commonComponents.Anchor>
                            </MobileMenuListItem>

                            <MobileMenuListItem>
                                <commonComponents.Anchor href="#" noDefault>
                                    <i className="fas fa-caret-right"></i>
                                    Samples
                                </commonComponents.Anchor>
                                <MobileMenuList>
                                    <MobileMenuListItem>
                                        <a
                                            href="#"
                                            id="mobile-menu-buttons"
                                            onClick={scrollToButtonSection}
                                        >
                                            Buttons
                                        </a>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <a
                                            href="#"
                                            id="mobile-menu-inputs"
                                            onClick={scrollToInputSection}
                                        >
                                            Inputs
                                        </a>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <a
                                            href="#"
                                            id="mobile-menu-checkboxes"
                                            onClick={scrollToCheckboxSection}
                                        >
                                            Checkboxes
                                        </a>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <a
                                            href="#"
                                            id="mobile-menu-radios"
                                            onClick={scrollToRadioSection}
                                        >
                                            Radios
                                        </a>
                                    </MobileMenuListItem>
                                </MobileMenuList>
                            </MobileMenuListItem>

                            <MobileMenuListItem>
                                <commonComponents.Anchor href="#" noDefault>
                                    <i className="fas fa-caret-right"></i>
                                    Downloads
                                </commonComponents.Anchor>
                                <MobileMenuList>
                                    <MobileMenuListItem>
                                        <commonComponents.Anchor
                                            href="#"
                                            noDefault
                                        >
                                            Shutdown Timer
                                        </commonComponents.Anchor>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <commonComponents.Anchor
                                            href="#"
                                            noDefault
                                        >
                                            ASC File Cryptor
                                        </commonComponents.Anchor>
                                    </MobileMenuListItem>
                                </MobileMenuList>
                            </MobileMenuListItem>

                            <MobileMenuListItem>
                                <commonComponents.Anchor href="#" noDefault>
                                    <i className="fas fa-caret-right"></i>
                                    Profiles
                                </commonComponents.Anchor>
                                <MobileMenuList>
                                    <MobileMenuListItem>
                                        <commonComponents.Anchor
                                            href="#"
                                            noDefault
                                        >
                                            Subitem 1
                                        </commonComponents.Anchor>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <commonComponents.Anchor
                                            href="#"
                                            noDefault
                                        >
                                            <i className="fas fa-caret-right"></i>
                                            Subitem 2
                                        </commonComponents.Anchor>
                                        <MobileMenuList>
                                            <MobileMenuListItem>
                                                <commonComponents.Anchor
                                                    href="#"
                                                    noDefault
                                                >
                                                    Subitem 1
                                                </commonComponents.Anchor>
                                            </MobileMenuListItem>
                                            <MobileMenuListItem>
                                                <commonComponents.Anchor
                                                    href="#"
                                                    noDefault
                                                >
                                                    <i className="fas fa-caret-right"></i>
                                                    Subitem 2
                                                </commonComponents.Anchor>
                                                <MobileMenuList>
                                                    <MobileMenuListItem>
                                                        <commonComponents.Anchor
                                                            href="#"
                                                            noDefault
                                                        >
                                                            Subitem 1
                                                        </commonComponents.Anchor>
                                                    </MobileMenuListItem>
                                                    <MobileMenuListItem>
                                                        <commonComponents.Anchor
                                                            href="#"
                                                            noDefault
                                                        >
                                                            <i className="fas fa-caret-right"></i>
                                                            Subitem 2
                                                        </commonComponents.Anchor>
                                                        <MobileMenuList>
                                                            <MobileMenuListItem>
                                                                <commonComponents.Anchor
                                                                    href="#"
                                                                    noDefault
                                                                >
                                                                    Subitem 1
                                                                </commonComponents.Anchor>
                                                            </MobileMenuListItem>
                                                            <MobileMenuListItem>
                                                                <commonComponents.Anchor
                                                                    href="#"
                                                                    noDefault
                                                                >
                                                                    Subitem 2
                                                                </commonComponents.Anchor>
                                                            </MobileMenuListItem>
                                                            <MobileMenuListItem>
                                                                <commonComponents.Anchor
                                                                    href="#"
                                                                    noDefault
                                                                >
                                                                    Subitem 3
                                                                </commonComponents.Anchor>
                                                            </MobileMenuListItem>
                                                        </MobileMenuList>
                                                    </MobileMenuListItem>
                                                </MobileMenuList>
                                            </MobileMenuListItem>
                                        </MobileMenuList>
                                    </MobileMenuListItem>

                                    <MobileMenuListItem>
                                        <commonComponents.Anchor
                                            href="#"
                                            noDefault
                                        >
                                            Subitem 3
                                        </commonComponents.Anchor>
                                    </MobileMenuListItem>
                                    <MobileMenuListItem>
                                        <commonComponents.Anchor
                                            href="#"
                                            noDefault
                                        >
                                            Subitem 4
                                        </commonComponents.Anchor>
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
                            <commonComponents.Anchor href="#" noDefault>
                                View all alerts
                            </commonComponents.Anchor>
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
