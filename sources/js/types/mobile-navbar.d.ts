/**
 * @file mobile-navbar.d.ts
 * @description Header mobile navbar item types.
 */

export interface MobileNavbarSection {
    title: string;
    authOnly?: boolean;
    items: MobileNavbarItem[];
}

export interface MobileNavbarItem {
    text: string;
    desc?: string;
    image?: string;
    icon?: (...args: any[]) => any;
    to?: string;
    href?: string;
    target?: string;
    authOnly?: boolean;
    hideOnClick?: boolean;
    onClick?: (...args: any[]) => any;
}
