/**
 * @file index.tsx
 * @description Header mobile navigation menu icon button, with popup window.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import {
    ReactNode,
    useState,
    useEffect,
    useContext,
    useRef,
    createContext,
} from 'react';
import { NavLink, useNavigation } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import PropTypes from 'prop-types';

import { globalContext } from '../../../Context/Global';
import IconButton, { IconButtonStyles } from '../IconButton';
import PopupWindow, { PopupStyles } from '../../../PopupWindow';
import { Fa6SolidSquareXmark } from '../../../Icons/FASquareXMark';
import mobileNavbarItems from '../../../../configs/render/mobile-navbar-items';
import * as styles from './MobileNavMenuIcon.module.css';

const MobileNavMenuContext = createContext(null);

/**
 * Mobile navigation menu context.
 * @note The context is singular, and its purpose is to share the close button element's reference to the <NavItem /> component.
 *       The <NavItem /> component uses the reference ('ref.current.click()') to close the menu if needed ('hideOnClick').
 * @param props Component properties.
 * @param props.children <NavCloseButton /> && <NavbarItem />.
 * @returns Returns the component.
 */
function MobileNavMenuContextProvider({ children }: { children?: ReactNode }) {
    const [closeButtonRef, setCloseButtonRef] = useState();

    const value = {
        closeButtonRef,
        setCloseButtonRef,
    };

    return (
        <MobileNavMenuContext.Provider value={value}>
            {children}
        </MobileNavMenuContext.Provider>
    );
}

MobileNavMenuContextProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Navbar section.
 * @param props Component properties.
 * @param props.title Section title.
 * @param props.children <NavItem />
 * @returns Returns the component.
 */
function NavSection({
    title,
    children,
}: {
    title?: string;
    children?: ReactNode;
}) {
    return (
        <div className={styles['nav-section']}>
            <span className={styles['nav-section-title']}>{title}</span>
            <ul className={styles['nav-list']}>{children}</ul>
        </div>
    );
}

NavSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

/**
 * Navbar item.
 * @param props Component properties.
 * @param props.text Item text.
 * @param props.desc Item description.
 * @param props.icon Item icon.
 * @param props.image Item image.
 * @param props.to React router route.
 * @param props.href href value.
 * @param props.target target value.
 * @param props.hideOnClick Specifies whether to hide the mobile navbar menu on-click.
 * @param props.onClick Item on-click callback.
 * @returns Returns the component.
 */
function NavItem({
    text,
    desc,
    icon,
    image,
    to,
    href,
    target,
    hideOnClick = true,
    onClick,
}: {
    text?: string;
    desc?: string;
    icon?: any;
    image?: string;
    to?: string;
    href?: string;
    target?: string;
    hideOnClick?: boolean;
    onClick?: any;
}) {
    const { closeButtonRef } = useContext(MobileNavMenuContext),
        navigation = useNavigation();

    const LinkComponent: any = to ? NavLink : 'a',
        Icon = icon;

    return (
        <li className={styles['nav-item']}>
            <LinkComponent
                className={
                    to
                        ? ({ isActive, isPending }: any) => {
                              return isPending
                                  ? `${styles['nav-item-link']} ${styles['is-pending']}`
                                  : isActive
                                    ? `${styles['nav-item-link']} ${styles['is-active']}`
                                    : `${styles['nav-item-link']}`;
                          }
                        : `${styles['nav-item-link']}`
                }
                to={to}
                href={href}
                target={target}
                tabIndex={-1}
                onClick={
                    navigation.state === 'loading'
                        ? (event: any) => {
                              event.preventDefault();
                          }
                        : (event: any) => {
                              if (onClick) onClick(event);
                              if (hideOnClick && closeButtonRef.current)
                                  closeButtonRef.current.click();
                          }
                }
            >
                <div className={styles['nav-item-icon']}>
                    {icon ? <Icon /> : image ? <img src={image} /> : null}
                </div>
                <div className={styles['nav-item-info']}>
                    <span className={styles['nav-item-text']}>{text}</span>
                    {desc && (
                        <span className={styles['nav-item-desc']}>{desc}</span>
                    )}
                </div>
            </LinkComponent>
        </li>
    );
}

NavItem.propTypes = {
    text: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.func,
    image: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    hideOnClick: PropTypes.bool,
    onClick: PropTypes.func,
};

/**
 * Navbar close button.
 * @param props Component properties.
 * @param props.onClick On-click callback that close the mobile navbar.
 * @returns Returns the component.
 */
function NavCloseButton({ onClick }: { onClick?: any }) {
    const { setCloseButtonRef } = useContext(MobileNavMenuContext),
        closeButton = useRef();

    useEffect(() => {
        setCloseButtonRef(closeButton);
    }, []);

    return (
        <div
            ref={closeButton}
            className={styles['nav-close-button']}
            onClick={onClick}
        >
            <Fa6SolidSquareXmark className={styles['nav-close-button-icon']} />
        </div>
    );
}

NavCloseButton.propTypes = {
    onClick: PropTypes.func,
};

/**
 * Mobile navigation menu icon with popup menu.
 * @returns Returns the component.
 */
function MobileNavMenuIcon() {
    const { authSession } = useAuth();

    const { deviceType } = useContext(globalContext),
        [showPopup, setShowPopup] = useState(false);

    // Close the menu when the screen width changes.
    useEffect(() => {
        setShowPopup(false);
    }, [deviceType.deviceWidth]);

    function handleClick() {
        setShowPopup(!showPopup);
    }

    function handleBackgroundClick() {
        setShowPopup(false);
    }

    return (
        <div>
            <PopupWindow
                interactive
                visible={showPopup}
                popperOptions={{
                    strategy: 'fixed',
                    modifiers: [
                        {
                            name: 'popperOffsets',
                            enabled: false,
                        },
                    ],
                }}
                onClickOutside={handleBackgroundClick}
                customAnimation={{
                    classIn: styles['animation-in'],
                    classOut: styles['animation-out'],
                    outAnimationName: styles['popup-out'],
                }}
                render={(attrs) => (
                    <div
                        className={`${styles['blur-layer']} ${PopupStyles['popup-window']}`}
                        onClick={handleBackgroundClick}
                    >
                        {/* TODO: Figure out a better way to disable html scrolling */}
                        <style>
                            {`
                                :root {
                                    --general-html-overflow: ${showPopup ? 'clip' : 'var(--general-html-overflow)'};
                                }
                            `}
                        </style>

                        <MobileNavMenuContextProvider>
                            <div
                                className={`${styles['mobile-nav-menu-popup']}`}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <NavCloseButton
                                    onClick={handleBackgroundClick}
                                />

                                <div className={styles['nav-sections']}>
                                    {mobileNavbarItems &&
                                        mobileNavbarItems.map(
                                            (section, index) => {
                                                // Check if the section is require the user to be authenticated.
                                                if (
                                                    section.authOnly &&
                                                    !authSession
                                                )
                                                    return null;

                                                return (
                                                    <NavSection
                                                        key={index}
                                                        title={section.title}
                                                    >
                                                        {section.items &&
                                                            section.items.map(
                                                                (
                                                                    item: any,
                                                                    index: any
                                                                ) => {
                                                                    // Check if the item is require the user to be authenticated.
                                                                    if (
                                                                        item.authOnly &&
                                                                        !authSession
                                                                    )
                                                                        return null;

                                                                    return (
                                                                        <NavItem
                                                                            key={
                                                                                index
                                                                            }
                                                                            text={
                                                                                item.text
                                                                            }
                                                                            desc={
                                                                                item.desc
                                                                            }
                                                                            icon={
                                                                                item.icon
                                                                            }
                                                                            image={
                                                                                item.image
                                                                            }
                                                                            to={
                                                                                item.to
                                                                            }
                                                                            href={
                                                                                item.href
                                                                            }
                                                                            target={
                                                                                item.target
                                                                            }
                                                                            hideOnClick={
                                                                                item.hideOnClick
                                                                            }
                                                                            onClick={
                                                                                item.onClick
                                                                            }
                                                                        />
                                                                    );
                                                                }
                                                            )}
                                                    </NavSection>
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                        </MobileNavMenuContextProvider>
                    </div>
                )}
            >
                <IconButton
                    icon={`${showPopup ? 'fas fa-bars-staggered' : 'fas fa-bars'}`}
                    className={`${styles['mobile-nav-menu-icon']} ${showPopup ? IconButtonStyles['is-popup-open'] : ''}`}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
}

export default MobileNavMenuIcon;
