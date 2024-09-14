/**
 * @file mobile-navbar.ts
 * @description Header mobile navbar item types.
 */

import { FunctionComponent } from 'react';

export type MobileNavbarSection = {
    title: string;
    to?: string;
    authOnly?: boolean;
    items: MobileNavbarItem[];
};

export type MobileNavbarItem = {
    text: string;
    desc?: string;
    image?: string;
    icon?: FunctionComponent;
    to?: string;
    href?: string;
    target?: string;
    authOnly?: boolean;
    hideOnClick?: boolean;
    onClick?: (...args: any[]) => any;
};
