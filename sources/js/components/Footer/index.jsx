/**
 * @file index.jsx
 * @description Footer component.
 */

'use strict';
import Anchor from '../Anchor';
import './Footer.css';
const $ = document.querySelector.bind(document);

/**
 * Footer component.
 * @returns Returns the component.
 */
function Footer() {
    return (
        <footer id="footer">
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
