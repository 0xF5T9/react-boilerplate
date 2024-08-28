/**
 * @file index.tsx
 * @description Context menu popup.
 */

'use strict';
import type { ContextMenu, ContextMenuItem } from '../../types/context-menu';
import { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TippyProps } from '@tippyjs/react';
import PropTypes, { oneOf } from 'prop-types';

import { useAuth } from '../../hooks/useAuth';
import PopupWindow, { PopupRender } from '../PopupWindow';
import * as styles from './ContextMenu.module.css';

/**
 * Context menu list item.
 * @param props Component properties.
 * @param props.text Item text.
 * @param props.icon Item icon.
 * @param props.to React router link.
 * @param props.onClick On-click callback function.
 * @param props.hideOnClick Specifies whether to hide the context menu on item click.
 * @param props.action Item action. If specified, 'to' and 'onClick' props are ignored.
 * @param props.setVisible Visible state setter.
 * @returns Returns the component.
 */
const ListItem: FunctionComponent<{
    text?: string;
    icon?: FunctionComponent<any>;
    to?: string;
    onClick?: React.DetailedHTMLProps<
        React.LiHTMLAttributes<HTMLLIElement>,
        HTMLLIElement
    >['onClick'];
    hideOnClick?: boolean;
    action?: ContextMenuItem['action'];
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = function ({
    text,
    icon,
    to,
    onClick,
    hideOnClick = false,
    action,
    setVisible,
}) {
    const navigate = useNavigate(),
        { logout } = useAuth();

    const Icon = icon;

    return (
        <li
            className={styles['list-item']}
            onClick={(event) => {
                if (hideOnClick) setVisible(false);

                // Only have 1 action for now.
                if (action === 'logout') {
                    logout();
                    return;
                }

                if (onClick) onClick(event);
                if (to) navigate(to);
            }}
        >
            <Link
                className={styles['list-item-link']}
                to={to}
                onClick={!to ? (event) => event.preventDefault() : null}
                tabIndex={-1}
            >
                {Icon ? <Icon className={styles['list-item-icon']} /> : null}
                <span className={styles['list-item-text']}>{text}</span>
            </Link>
        </li>
    );
};

ListItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.func,
    to: PropTypes.string,
    onClick: PropTypes.func,
    hideOnClick: PropTypes.bool,
    action: PropTypes.any,
    setVisible: PropTypes.func,
};

/**
 * Context menu popup. (Tippy wrapper)
 * @param props Component properties.
 * @param props.menus Array of context menus.
 * @param props.visible Visible state.
 * @param props.setVisible Visible state setter.
 * @param props.offset Tippy 'offset' prop.
 * @param props.placement Tippy 'placement' prop.
 * @param props.animation Animation presets.
 * @param props.children Component children.
 * @note The consumer-component is responsible for managing popup-visibility. ('visible' & 'setVisible')
 * @returns Returns the component.
 */
const ContextMenu: FunctionComponent<{
    menus: ContextMenu[];
    visible: TippyProps['visible'];
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    offset?: TippyProps['offset'];
    placement?: TippyProps['placement'];
    animation?: 'fade' | 'slide-scale';
    children: TippyProps['children'];
}> = function ({
    menus,
    visible,
    setVisible,
    offset = [0, 0],
    placement = 'bottom-end',
    animation = 'fade',
    children,
}) {
    const [render, setRender] = useState(() => {
        const defaultMenu = menus.find(
            (contextMenu) => contextMenu.id === 'default'
        );
        if (!defaultMenu) {
            console.error(
                `No menu with ID 'default' was found in the 'menus' props.\nUsing placeholder render.`
            );
            menus = [
                {
                    id: 'default',
                    menu: [
                        {
                            text: `This context menu doesn't have a default menu.`,
                        },
                    ],
                },
            ];
            return menus[0];
        }

        return defaultMenu;
    });

    function handleBackgroundClick() {
        setVisible(false);
    }

    const handlePopupClose = useCallback(
        () =>
            setRender(
                menus.find((contextMenu) => contextMenu.id === 'default')
            ),
        [render]
    );

    let customAnimation;
    switch (animation) {
        case 'fade':
            customAnimation = {
                classIn: styles['animation-fade-in'],
                classOut: styles['animation-fade-out'],
                outAnimationName: styles['fade-out'],
            };
            break;
        case 'slide-scale':
            customAnimation = {
                classIn: styles['animation-slide-scale-in'],
                classOut: styles['animation-slide-scale-out'],
                outAnimationName: styles['slide-scale-out'],
            };
            break;
    }

    return (
        <PopupWindow
            interactive
            visible={visible}
            offset={offset}
            placement={placement}
            onClickOutside={handleBackgroundClick}
            onHidden={handlePopupClose}
            customAnimation={customAnimation}
            render={() => (
                <PopupRender className={styles['context-popup']}>
                    <ul className={styles['list']}>
                        {render?.menu?.map((item, index) => {
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
                                    hideOnClick={item.hideOnClick}
                                    action={item.action}
                                    setVisible={setVisible}
                                />
                            );
                        })}
                    </ul>
                </PopupRender>
            )}
        >
            {children}
        </PopupWindow>
    );
};

ContextMenu.propTypes = {
    menus: PropTypes.array,
    visible: PropTypes.bool,
    setVisible: PropTypes.func,
    animation: oneOf(['fade', 'slide-scale']),
    children: PropTypes.any.isRequired,
};

export default ContextMenu;
