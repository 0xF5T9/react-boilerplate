/**
 * @file context-menu.ts
 * @description Context menu types.
 */

import { FunctionComponent } from 'react';

export type ContextMenuItem = {
    text: string;
    icon?: FunctionComponent<any> | string;
    to?: string;
    className?: string;
    onClick?: React.DetailedHTMLProps<
        React.LiHTMLAttributes<HTMLLIElement>,
        HTMLLIElement
    >['onClick'];
    hideOnClick?: boolean;
    action?: 'logout';
    gotoMenu?: string;
};

export type ContextMenu = {
    id: string;
    menu: ContextMenuItem[];
};
