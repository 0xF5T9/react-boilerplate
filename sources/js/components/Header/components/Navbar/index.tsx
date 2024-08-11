/**
 * @file index.tsx
 * @description Header navigation bar component. (Desktop | 1024px+)
 * @note This is a sub-component of the <Header /> component>
 */

'use strict';
import PropTypes from 'prop-types';
import { ReactNode, useState, useContext, createContext } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

import { MLLoading } from '../../../Icons/MLLoading';
import navbarItems from '../../../../configs/render/navbar-items';

import * as styles from './Navbar.module.css';

/**
 * Navbar item list.
 * @param props Component properties.
 * @param props.children <NavbarItem />.
 * @returns Returns the component.
 */
function NavbarList({ children }: { children?: ReactNode }) {
    return <ul className={styles['navbar-list']}>{children}</ul>;
}

NavbarList.propTypes = {
    children: PropTypes.node,
};

const NavbarItemContext = createContext(null);

/**
 * Navbar item context.
 * @note Each <NavbarItem /> component has its own context.
 * @param props Component properties.
 * @param props.children <NavbarItem />.
 * @returns Returns the component.
 */
function NavbarItemProvider({ children }: { children?: ReactNode }) {
    const [navbarSublistVisibility, setNavbarSublistVisibility] =
        useState(false);

    const value = {
        navbarSublistVisibility,
        setNavbarSublistVisibility,
    };

    return (
        <NavbarItemContext.Provider value={value}>
            {children}
        </NavbarItemContext.Provider>
    );
}

NavbarItemProvider.propTypes = {
    children: PropTypes.node,
};

/**
 * Navbar item.
 * @param props Component properties.
 * @param props.text Item text.
 * @param props.to React router route.
 * @param props.href href value.
 * @param props.target target value.
 * @param props.icon Item icon.
 * @param props.onClick Item on-click callback.
 * @param props.children <NavbarSublist />.
 * @returns Returns the component.
 */
function NavbarItem({
    text,
    to,
    href,
    target,
    icon,
    onClick,
    children,
}: {
    text?: string;
    to?: string;
    href?: string;
    target?: string;
    icon?: (...args: any[]) => any;
    onClick?: any;
    children?: ReactNode;
}) {
    const { navbarSublistVisibility, setNavbarSublistVisibility } =
            useContext(NavbarItemContext),
        navigation = useNavigation();

    const LinkComponent: any = to ? NavLink : 'a',
        Icon = icon;

    return (
        <li
            className={`${styles['navbar-item']}
                        ${navbarSublistVisibility ? styles['is-open'] : ''}`}
            onMouseEnter={() => setNavbarSublistVisibility(true)}
            onMouseOver={() => {
                if (navbarSublistVisibility) setNavbarSublistVisibility(true);
            }}
            onMouseLeave={() => setNavbarSublistVisibility(false)}
        >
            <LinkComponent
                className={
                    to
                        ? ({ isActive, isPending }: any) => {
                              return isPending
                                  ? `${styles['navbar-item-link']} ${styles['is-pending']}`
                                  : isActive
                                    ? `${styles['navbar-item-link']} ${styles['is-active']}`
                                    : `${styles['navbar-item-link']}`;
                          }
                        : `${styles['navbar-item-link']}`
                }
                to={to}
                href={href}
                target={target}
                tabIndex={-1}
                onClick={
                    navigation.state === 'loading'
                        ? (event: any) => event.preventDefault()
                        : onClick
                }
            >
                <MLLoading className={styles['navbar-item-loading-icon']} />
                {icon && <Icon className={styles['navbar-item-icon']} />}
                {text}
            </LinkComponent>
            {children}
        </li>
    );
}

NavbarItem.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.func,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

/**
 * Navbar sublist.
 * @param Component properties.
 * @param props.layout Sublist layout.
 * @param props.children <NavbarSubitem />
 * @returns Returns the component.
 */
function NavbarSublist({
    layout,
    children,
}: {
    layout?: 'full' | 'full-2' | 'full-3' | 'full-4';
    children?: ReactNode;
}) {
    const { setNavbarSublistVisibility } = useContext(NavbarItemContext);

    let listLayout = '';
    switch (layout) {
        case 'full':
            listLayout = styles['full'];
            break;
        case 'full-2':
            listLayout = styles['full-2'];
            break;
        case 'full-3':
            listLayout = styles['full-3'];
            break;
        case 'full-4':
            listLayout = styles['full-4'];
            break;
    }

    return (
        <ul
            className={`${styles['navbar-sublist']} ${listLayout}`}
            onMouseEnter={() => setNavbarSublistVisibility(true)}
            onMouseLeave={() => setNavbarSublistVisibility(false)}
        >
            {children}
        </ul>
    );
}

NavbarSublist.propTypes = {
    layout: PropTypes.oneOf(['full', 'full-2', 'full-3', 'full-4']),
    children: PropTypes.node,
};

/**
 * Navbar subitem.
 * @param props Component properties.
 * @param props.title Item title.
 * @param props.desc Item description.
 * @param props.icon Item icon.
 * @param props.image Item image.
 * @param props.to React router route.
 * @param props.href href value.
 * @param props.target target value.
 * @param props.hideOnClick Specifies whether to hide the item's sublist on-click.
 * @param props.onClick Item on-click callback.
 * @returns Returns the component.
 */
function NavbarSubitem({
    title,
    desc,
    icon,
    image,
    to,
    href,
    target,
    hideOnClick = false,
    onClick,
}: {
    title?: string;
    desc?: string;
    icon?: any;
    image?: string;
    to?: string;
    href?: string;
    target?: string;
    hideOnClick?: boolean;
    onClick?: any;
}) {
    const { setNavbarSublistVisibility } = useContext(NavbarItemContext),
        navigation = useNavigation();

    const LinkComponent: any = to ? NavLink : 'a',
        Icon = icon;

    return (
        <li className={styles['navbar-subitem']}>
            <LinkComponent
                className={
                    to
                        ? ({ isActive, isPending }: any) => {
                              return isPending
                                  ? `${styles['navbar-subitem-link']} ${styles['is-pending']}`
                                  : isActive
                                    ? `${styles['navbar-subitem-link']} ${styles['is-active']}`
                                    : `${styles['navbar-subitem-link']}`;
                          }
                        : `${styles['navbar-subitem-link']}`
                }
                to={to}
                href={href}
                target={target}
                tabIndex={-1}
                onClick={
                    navigation.state === 'loading'
                        ? (event: any) => {
                              event.preventDefault();
                              if (hideOnClick)
                                  setNavbarSublistVisibility(false);
                          }
                        : (event: any) => {
                              if (onClick) onClick(event);
                              if (hideOnClick)
                                  setNavbarSublistVisibility(false);
                          }
                }
            >
                <div className={styles['navbar-subitem-icon']}>
                    {icon ? <Icon /> : image ? <img src={image} /> : null}
                </div>
                <div className={styles['navbar-subitem-info']}>
                    <span className={styles['navbar-subitem-title']}>
                        {title}
                    </span>
                    {desc && (
                        <span className={styles['navbar-subitem-desc']}>
                            {desc}
                        </span>
                    )}
                </div>
            </LinkComponent>
        </li>
    );
}

NavbarSubitem.propTypes = {
    title: PropTypes.string,
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
 * Navbar.
 * @returns Returns the component.
 */
function Navbar() {
    const { authSession } = useAuth();

    return (
        <nav className={styles['navbar']}>
            <NavbarList>
                {navbarItems &&
                    navbarItems.map((topItem, index) => {
                        // Check if the item is require the user to be authenticated.
                        if (topItem.authOnly && !authSession) return null;

                        return (
                            <NavbarItemProvider key={index}>
                                <NavbarItem
                                    text={topItem.text}
                                    to={topItem.to}
                                    href={topItem.href}
                                    target={topItem.target}
                                    icon={topItem.icon}
                                    onClick={topItem.onClick}
                                >
                                    {topItem.items && (
                                        <NavbarSublist layout={topItem.layout}>
                                            {topItem.items.map(
                                                (subItem: any, index: any) => {
                                                    // Check if the item is require the user to be authenticated.
                                                    if (
                                                        subItem.authOnly &&
                                                        !authSession
                                                    )
                                                        return null;

                                                    return (
                                                        <NavbarSubitem
                                                            key={index}
                                                            title={
                                                                subItem.title
                                                            }
                                                            desc={subItem.desc}
                                                            icon={subItem.icon}
                                                            image={
                                                                subItem.image
                                                            }
                                                            to={subItem.to}
                                                            href={subItem.href}
                                                            target={
                                                                subItem.target
                                                            }
                                                            hideOnClick={
                                                                subItem.hideOnClick
                                                            }
                                                            onClick={
                                                                subItem.onClick
                                                            }
                                                        />
                                                    );
                                                }
                                            )}
                                        </NavbarSublist>
                                    )}
                                </NavbarItem>
                            </NavbarItemProvider>
                        );
                    })}
            </NavbarList>
        </nav>
    );
}

export default Navbar;
