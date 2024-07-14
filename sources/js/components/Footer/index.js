/**
 * @file index.js
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
            className="top-border"
            style={{ display: isFooterVisible ? 'flex' : 'none' }}
        >
            <div id="social-link-wrapper">
                <Anchor>
                    <i className="fa-brands fa-github"></i>
                </Anchor>

                <Anchor>
                    <i className="fa-brands fa-facebook"></i>
                </Anchor>

                <Anchor>
                    <i className="fa-brands fa-instagram"></i>
                </Anchor>

                <Anchor>
                    <i className="fa-brands fa-snapchat"></i>
                </Anchor>

                <Anchor>
                    <i className="fa-brands fa-pinterest-p"></i>
                </Anchor>

                <Anchor>
                    <i className="fa-brands fa-twitter"></i>
                </Anchor>

                <Anchor>
                    <i className="fa-brands fa-linkedin-in"></i>
                </Anchor>
            </div>
            <p id="powered-text">
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
