/**
 * @file index.js
 * @description Header icon button with dropdown window (Menu list item variant).
 */

'use strict';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IconButton from '../IconButton';
import DropdownWindow from '../../../DropdownWindow';
import * as styles from './IconButtonMenu.module.css';

/**
 * Menu list item.
 * @param {Object} props Component properties.
 * @param {String} props.text Item text.
 * @param {String} props.icon Item icon classes.
 * @param {String} props.to React router route.
 * @param {Function} props.onClick Item on-click callback.
 * @note 'props.onClick' is ignored if 'props.to' is passed.
 * @returns Returns the component.
 */
function ListItem({ text, icon, to, onClick }) {
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
}

/**
 * Header icon button with dropdown window (Menu list item variant).
 * @param {Object} props Component properties.
 * @param {String} props.icon Icon classes.
 * @param {String} props.iconDropdown Icon classes to be used when the dropdown window is revealed (if exist).
 * @param {Array} props.menus The array that contains menu object(s).
 * @returns Returns the component.
 */
function IconButtonMenu({ icon, iconDropdown, menus }) {
    const [render, setRender] = useState(() => {
        return menus.find((element) => element.id === 'default');
    });

    return (
        <IconButton icon={icon} iconDropdown={iconDropdown}>
            <DropdownWindow
                onClose={() => {
                    setRender(
                        menus.find((element) => element.id === 'default')
                    );
                }}
                className={styles['dropdown-window']}
            >
                <ul className={styles['list']}>
                    {render.menu.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                text={item.text}
                                icon={item.icon}
                                to={item.to}
                                onClick={
                                    item.gotoMenu
                                        ? (event) => {
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
            </DropdownWindow>
        </IconButton>
    );
}

export default IconButtonMenu;
