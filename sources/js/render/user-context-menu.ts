/**
 * @file user-context-menu.ts
 * @desc User context menu.
 */

'use strict';
import type { ContextMenu } from '../types/context-menu';
import routes from '../global/react-router/routes';
import { User } from '../components/Icons/User';
import { Gear } from '../components/Icons/Gear';
import { RightFromBracket } from '../components/Icons/RightFromBracket';
import { ArrowLeft } from '../components/Icons/ArrowLeft';

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
