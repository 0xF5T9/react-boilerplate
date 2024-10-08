/**
 * @file index.tsx
 * @description Header mobile navigation menu icon button, with popup window.
 */

'use strict';
import {
    FunctionComponent,
    ElementType,
    ReactNode,
    useState,
    useEffect,
    useContext,
    useRef,
    createContext,
} from 'react';
import { NavLink, useNavigation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useGlobal } from '~/ts/hooks/useGlobal';
import { useAuth } from '~/ts/hooks/useAuth';
import IconButton from '~/ts/components/Header/components/IconButton';
import PopupWindow, { PopupRender } from '~/ts/components/PopupWindow';
import { ThreeBars } from '~/ts/components/Icons/ThreeBars';
import { ThreeBarsStaggered } from '~/ts/components/Icons/ThreeBarsStaggered';
import { SquareX } from '~/ts/components/Icons/SquareX';
import mobileNavbarItems from '~/ts/render/mobile-navbar-items';
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
const MobileNavMenuContextProvider: FunctionComponent<{
    children?: ReactNode;
}> = function ({ children }) {
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
};

MobileNavMenuContextProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Navbar section.
 * @param props Component properties.
 * @param props.title Section title.
 * @param props.to Section title link.
 * @param props.children <NavItem />
 * @returns Returns the component.
 */
const NavSection: FunctionComponent<{
    title?: string;
    to?: string;
    children?: ReactNode;
}> = function ({ title, to, children }) {
    const navigate = useNavigate(),
        { closeButtonRef } = useContext(MobileNavMenuContext);

    return (
        <div className={styles['nav-section']}>
            <span
                className={classNames(styles['nav-section-title'], {
                    [styles['link']]: to,
                })}
                onClick={
                    to &&
                    (() => {
                        if (to[0] === '/') navigate(to);
                        else window?.open(to, '_blank').focus();
                        closeButtonRef?.current?.click();
                    })
                }
            >
                {title}
            </span>
            <ul className={styles['nav-list']}>{children}</ul>
        </div>
    );
};

NavSection.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
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
const NavItem: FunctionComponent<{
    text?: string;
    desc?: string;
    icon?: FunctionComponent;
    image?: string;
    to?: string;
    href?: string;
    target?: string;
    hideOnClick?: boolean;
    onClick?: React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >['onClick'];
}> = function ({
    text,
    desc,
    icon,
    image,
    to,
    href,
    target,
    hideOnClick = true,
    onClick,
}) {
    const navigation = useNavigation(),
        { closeButtonRef } = useContext(MobileNavMenuContext);

    const LinkComponent: ElementType = to ? NavLink : ('a' as ElementType),
        Icon: FunctionComponent = icon;

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
};

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
const NavCloseButton: FunctionComponent<{
    onClick?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >['onClick'];
}> = function ({ onClick }) {
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
            <SquareX className={styles['nav-close-button-icon']} />
        </div>
    );
};

NavCloseButton.propTypes = {
    onClick: PropTypes.func,
};

/**
 * Mobile navigation menu icon with popup menu.
 * @returns Returns the component.
 */
const MobileNavMenuIcon: FunctionComponent = function () {
    const { sessionData } = useAuth();

    const { deviceInfo, setAllowScrolling } = useGlobal(),
        [showPopup, setShowPopup] = useState(false);

    // Close the menu when the screen width changes.
    useEffect(() => {
        setShowPopup(false);
    }, [deviceInfo.screenWidth]);

    useEffect(() => {
        setAllowScrolling(!showPopup);
    }, [showPopup]);

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
                appendTo={document.getElementById('app')}
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
                customAnimation={{
                    classIn: styles['animation-in'],
                    classOut: styles['animation-out'],
                    outAnimationName: styles['popup-out'],
                }}
                render={() => (
                    <PopupRender
                        className={styles['blur-layer']}
                        onClick={handleBackgroundClick}
                    >
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
                                                    !sessionData
                                                )
                                                    return null;

                                                return (
                                                    <NavSection
                                                        key={index}
                                                        title={section.title}
                                                        to={section.to}
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
                                                                        !sessionData
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
                    </PopupRender>
                )}
            >
                <IconButton
                    icon={showPopup ? ThreeBarsStaggered : ThreeBars}
                    className={`${styles['mobile-nav-menu-icon']}`}
                    isOpen={showPopup}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
};

export default MobileNavMenuIcon;
