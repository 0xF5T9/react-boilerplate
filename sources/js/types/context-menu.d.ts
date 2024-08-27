/**
 * @file context-menu.d.ts
 * @description Context menu types.
 */

import { FunctionComponent } from 'react';

export type ContextMenuItem = {
    text: string;
    icon?: FunctionComponent<any>;
    to?: string;
    onClick?: React.DetailedHTMLProps<
        React.LiHTMLAttributes<HTMLLIElement>,
        HTMLLIElement
    >['onClick'];
    hideOnClick?: boolean;
    gotoMenu?: string;
};

export type ContextMenu = {
    id: string;
    menu: ContextMenuItem[];
};
