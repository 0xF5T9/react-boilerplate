/**
 * @file index.tsx
 * @description Context menu popup.
 */

'use strict';
import type { ContextMenu, ContextMenuItem } from '~/ts/types/context-menu';
import { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TippyProps } from '@tippyjs/react';
import PropTypes, { oneOf } from 'prop-types';
import classNames from 'classnames';

import { useAuth } from '~/ts/hooks/useAuth';
import PopupWindow, { PopupRender } from '~/ts/components/PopupWindow';
import * as styles from './ContextMenu.module.css';

/**
 * Context menu list item.
 * @param props Component properties.
 * @param props.title Item title.
 * @param props.desc Item description.
 * @param props.icon Item icon.
 * @param props.to React router link.
 * @param props.onClick On-click callback function.
 * @param props.hideOnClick Specifies whether to hide the context menu on item click.
 * @param props.action Item action. If specified, 'to' and 'onClick' props are ignored.
 * @param props.setVisible Visible state setter.
 * @param props.className Item class names.
 * @returns Returns the component.
 */
const ListItem: FunctionComponent<{
    title?: string;
    desc?: string;
    icon?: {
        icon: FunctionComponent<any> | string;
        width?: string;
        height?: string;
    };
    image?: { url: string; alt?: string; width?: string; height?: string };
    to?: string;
    onClick?: React.DetailedHTMLProps<
        React.LiHTMLAttributes<HTMLLIElement>,
        HTMLLIElement
    >['onClick'];
    hideOnClick?: boolean;
    action?: ContextMenuItem['action'];
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}> = function ({
    title,
    desc,
    icon,
    image,
    to,
    onClick,
    hideOnClick = false,
    action,
    setVisible,
    className,
}) {
    const navigate = useNavigate(),
        { logout } = useAuth();

    const Icon = icon?.icon;

    return (
        <li
            className={classNames(styles['list-item'], className)}
            onClick={(event) => {
                if (hideOnClick && setVisible) setVisible(false);

                // Only have 1 action for now.
                if (action === 'logout') {
                    logout();
                    return;
                }

                if (onClick) onClick(event);

                if (to) navigate(to);
            }}
        >
            <a
                className={styles['list-item-link']}
                onClick={!to ? (event) => event.preventDefault() : null}
                tabIndex={-1}
            >
                {Icon && typeof Icon === 'function' ? (
                    <Icon
                        className={styles['list-item-icon']}
                        style={{
                            width: icon?.width || '14px',
                            height: icon?.height || '13px',
                        }}
                    />
                ) : Icon && typeof Icon === 'string' ? (
                    <i
                        className={classNames(styles['list-item-icon'], Icon)}
                        style={{
                            width: icon?.width || '14px',
                            height: icon?.height || '13px',
                            fontSize: icon?.height || '13px',
                        }}
                    />
                ) : null}
                {!Icon && image && (
                    <img
                        className={styles['list-item-image']}
                        src={image.url}
                        alt={image.alt}
                        style={{
                            width: image.width || '14px',
                            height: image.height || '13px',
                        }}
                    />
                )}
                <span className={styles['list-item-content']}>
                    <span className={styles['list-item-title']}>{title}</span>
                    {desc && (
                        <span className={styles['list-item-desc']}>{desc}</span>
                    )}
                </span>
            </a>
        </li>
    );
};

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.exact({
        icon: PropTypes.any,
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    image: PropTypes.exact({
        url: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
        alt: PropTypes.string,
    }),
    to: PropTypes.string,
    onClick: PropTypes.func,
    hideOnClick: PropTypes.bool,
    action: PropTypes.any,
    setVisible: PropTypes.func,
    className: PropTypes.string,
};

/**
 * Context menu popup. (Tippy wrapper)
 * @param props Component properties.
 * @param props.menus Array of context menus.
 * @param props.visible Visible state.
 * @param props.setVisible Visible state setter.
 * @param props.trigger Tippy 'trigger' prop.
 * @param props.offset Tippy 'offset' prop.
 * @param props.placement Tippy 'placement' prop.
 * @param props.appendTo Tippy 'appendTo' prop.
 * @param props.delay Tippy 'delay' prop.
 * @param props.disabled Tippy 'disabled' prop.
 * @param props.animation Animation presets.
 * @param props.className Context window class name.
 * @param props.children Component children.
 * @note The consumer-component is responsible for managing popup-visibility. ('visible' & 'setVisible')
 * @returns Returns the component.
 */
const ContextMenu: FunctionComponent<{
    menus: ContextMenu[];
    visible?: TippyProps['visible'];
    setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    trigger?: TippyProps['trigger'];
    offset?: TippyProps['offset'];
    placement?: TippyProps['placement'];
    appendTo?: TippyProps['appendTo'];
    delay?: TippyProps['delay'];
    disabled?: TippyProps['disabled'];
    animation?: 'fade' | 'slide-scale';
    className?: string;
    children: TippyProps['children'];
}> = function ({
    menus,
    visible,
    setVisible,
    trigger = 'mouseenter focus',
    offset = [0, 0],
    placement = 'bottom-end',
    appendTo = 'parent',
    delay = 0,
    disabled = false,
    animation = 'fade',
    className,
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
                            title: `This context menu doesn't have a default menu.`,
                        },
                    ],
                },
            ];
            return menus[0];
        }

        return defaultMenu;
    });

    function handleBackgroundClick() {
        if (setVisible) setVisible(false);
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
            trigger={trigger}
            offset={offset}
            placement={placement}
            appendTo={appendTo}
            delay={delay}
            disabled={disabled}
            onClickOutside={handleBackgroundClick}
            onHidden={handlePopupClose}
            customAnimation={customAnimation}
            render={() => (
                <PopupRender
                    className={classNames(styles['context-popup'], className)}
                >
                    <ul className={styles['list']}>
                        {render?.menu?.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    title={item.title}
                                    desc={item.desc}
                                    icon={item.icon}
                                    image={item.image}
                                    to={item.to}
                                    className={item.className}
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
