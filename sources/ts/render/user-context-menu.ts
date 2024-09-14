/**
 * @file user-context-menu.ts
 * @desc User context menu.
 */

'use strict';
import type { ContextMenu } from '~/ts/types/context-menu';
import routes from '~/ts/global/react-router/routes';
import { User } from '~/ts/components/Icons/User';
import { Gear } from '~/ts/components/Icons/Gear';
import { RightFromBracket } from '~/ts/components/Icons/RightFromBracket';
import { ArrowLeft } from '~/ts/components/Icons/ArrowLeft';

export default [
    {
        id: 'default',
        menu: [
            {
                title: 'Profile',
                icon: {icon:User},
                to: routes.profile,
                hideOnClick: true,
            },
            {
                title: 'Settings',
                icon: {icon: Gear},
                gotoMenu: 'settings',
            },
            {
                title: 'Logout',
                icon: {icon: RightFromBracket},
                action: 'logout',
            },
        ],
    },
    {
        id: 'settings',
        menu: [
            {
                title: 'No option availables.',
            },
            {
                title: 'Back',
                icon: {icon: ArrowLeft},
                gotoMenu: 'default',
            },
        ],
    },
] satisfies ContextMenu[] as ContextMenu[];
