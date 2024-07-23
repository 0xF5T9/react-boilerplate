/**
 * @file index.jsx
 * @description Footer component.
 */

'use strict';
import { useEffect, useContext } from 'react';

import { GlobalContext } from '../Context/Global';
import Anchor from '../Anchor';
import './Footer.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the footer is visible.
 * @returns {Boolean} Returns true if the footer is visible, otherwise returns false.
 */
function isFooterComponentVisible() {
    const footer = $('#footer');
    if (!footer) throw `'#footer' element not found.`;

    return getComputedStyle(footer).getPropertyValue('display') != 'none'
        ? true
        : false;
}

/**
 * Footer component.
 * @returns Returns the component.
 */
function Footer() {
    const { isFooterVisible, footerHeight } = useContext(GlobalContext);

    useEffect(() => {
        if (!isFooterVisible) {
            document.documentElement.style.setProperty(
                '--footer-height',
                '0px'
            );
        } else {
            document.documentElement.style.setProperty(
                '--footer-height',
                footerHeight
            );
        }
    }, [isFooterVisible]);

    return (
        <footer
            id="footer"
            style={{ display: isFooterVisible ? 'flex' : 'none' }}
        >
            <p className="footer-powered-info">
                <span className="powered-by">Powered by</span>{' '}
                <Anchor
                    className="powered-link"
                    href="https://github.com/0xF5T9"
                    newTab
                >
                    0xF5T9
                </Anchor>
            </p>
        </footer>
    );
}

export default Footer;
export { isFooterComponentVisible };
