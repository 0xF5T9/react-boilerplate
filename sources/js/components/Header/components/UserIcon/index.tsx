/**
 * @file index.tsx
 * @description Header user icon button, with popup window.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { FunctionComponent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import IconButton, { IconButtonStyles } from '../IconButton';
import PopupWindow, { PopupStyles } from '../../../PopupWindow';
import * as styles from './UserIcon.module.css';

/**
 * Menu list item.
 * @param props Component properties.
 * @param props.text Item text.
 * @param props.icon Item icon classes.
 * @param props.to React router route.
 * @param props.onClick Item on-click callback.
 * @note 'props.onClick' is ignored if 'props.to' is passed.
 * @returns Returns the component.
 */
const ListItem: FunctionComponent<{
    text?: string;
    icon?: string;
    to?: string;
    onClick?: any;
}> = function ({ text, icon, to, onClick }) {
    const navigate = useNavigate();

    return (
        <li
            className={styles['list-item']}
            onClick={!to ? onClick : () => navigate(to)}
        >
            <Link
                className={styles['list-item-link']}
                to={to}
                onClick={!to ? (event) => event.preventDefault() : null}
                tabIndex={-1}
            >
                {icon ? (
                    <i
                        className={`${styles['list-item-icon'] || ''} ${icon}`}
                    ></i>
                ) : null}
                <span className={styles['list-item-text']}>{text}</span>
            </Link>
        </li>
    );
};

ListItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
};

/**
 * Header user icon button component.
 * @param props Component properties.
 * @param props.menus The array that contains menu object(s).
 * @returns Returns the component.
 */
const UserIcon: FunctionComponent<{ menus: Array<any> }> = function ({
    menus,
}) {
    const [showPopup, setShowPopup] = useState(false),
        [render, setRender] = useState(() => {
            return menus.find((element) => element.id === 'default');
        });

    function handleClick() {
        setShowPopup(!showPopup);
    }

    function handleBackgroundClick() {
        setShowPopup(false);
    }

    function handlePopupClose() {
        setRender(menus.find((element) => element.id === 'default'));
    }

    return (
        <div>
            <PopupWindow
                interactive
                visible={showPopup}
                offset={[0, 0]}
                placement="bottom-end"
                onClickOutside={handleBackgroundClick}
                onHidden={handlePopupClose}
                customAnimation={{
                    classIn: styles['animation-in'],
                    classOut: styles['animation-out'],
                    outAnimationName: styles['popup-out'],
                }}
                render={() => (
                    <div
                        className={`${styles['user-popup']} ${PopupStyles['popup-window']}`}
                    >
                        <ul className={styles['list']}>
                            {render.menu.map((item: any, index: any) => {
                                return (
                                    <ListItem
                                        key={index}
                                        text={item.text}
                                        icon={item.icon}
                                        to={item.to}
                                        onClick={
                                            item.gotoMenu
                                                ? (event: any) => {
                                                      event.preventDefault();
                                                      setRender(
                                                          menus.find(
                                                              (element) =>
                                                                  element.id ===
                                                                  item.gotoMenu
                                                          )
                                                      );
                                                  }
                                                : item.onClick
                                        }
                                    />
                                );
                            })}
                        </ul>
                    </div>
                )}
            >
                <IconButton
                    icon={`${showPopup ? 'fas' : 'fas'} fa-circle-user`}
                    className={`${showPopup ? IconButtonStyles['is-popup-open'] : ''}`}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
};

UserIcon.propTypes = {
    menus: PropTypes.array.isRequired,
};

export default UserIcon;
