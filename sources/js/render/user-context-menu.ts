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
                text: 'Profile',
                icon: User,
                to: routes.profile,
                hideOnClick: true,
            },
            {
                text: 'Settings',
                icon: Gear,
                gotoMenu: 'settings',
            },
            {
                text: 'Logout',
                icon: RightFromBracket,
                action: 'logout',
            },
        ],
    },
    {
        id: 'settings',
        menu: [
            {
                text: 'No option availables.',
            },
            {
                text: 'Back',
                icon: ArrowLeft,
                gotoMenu: 'default',
            },
        ],
    },
] satisfies ContextMenu[] as ContextMenu[];
