/**
 * @file navbar.d.ts
 * @description Header navbar item types.
 */

export type NavbarItem = {
    text: string;
    icon?: (...args: any[]) => any;
    to?: string;
    href?: string;
    target?: string;
    authOnly?: boolean;
    onClick?: (...args: any[]) => any;
    items?: NavbarSubitem[];
    layout?: 'full' | 'full-2' | 'full-3' | 'full-4';
};

export type NavbarSubitem = {
    title: string;
    desc?: string;
    image?: string;
    icon?: (...args: any[]) => any;
    to?: string;
    href?: string;
    target?: string;
    authOnly?: boolean;
    hideOnClick?: boolean;
    onClick?: (...args: any[]) => any;
};
