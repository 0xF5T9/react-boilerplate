/**
 * @file index.js
 * @description The header component.
 */

'use strict';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/Global';
import BrandLogo from './components/BrandLogo';
import BrandText from './components/BrandText';
import Navbar from './components/Navbar';
import IconButton from './components/IconButton';
import DropdownWindow from '../DropdownWindow';
import MobileMenu from './components/MobileMenu';
import './Header.css';
const $ = document.querySelector.bind(document);

/**
 * Check if the header is visible.
 * @returns {boolean} Returns true if the header is visible, otherwise returns false.
 */
function isHeaderComponentVisible() {
    const header = $('#header');
    if (!header) throw `'#header' element not found.`;

    return getComputedStyle(header).getPropertyValue('display') != 'none'
        ? true
        : false;
}

/**
 * Header component.
 * @returns Returns the header component.
 */
function Header() {
    const { isHeaderVisible, headerHeight } = useContext(GlobalContext);

    // Header visibility state is stored in the global context.
    // Track the state and adjust the stylesheet accordingly.
    useEffect(() => {
        if (!isHeaderVisible) {
            // let scroll_value = parseFloat(headerHeight, 1);
            // scroll_value = -scroll_value;
            // window.scrollBy({
            //     top: scroll_value,
            //     behavior: 'instant',
            // });
            document.documentElement.style.setProperty(
                '--header-height',
                '0px'
            );
        } else {
            document.documentElement.style.setProperty(
                '--header-height',
                headerHeight
            );
            // let scroll_value = parseFloat(headerHeight, 1);
            // window.scrollBy({
            //     top: scroll_value,
            //     behavior: 'instant',
            // });
        }
    }, [isHeaderVisible]);

    return (
        <header
            id="header"
            style={{ display: isHeaderVisible ? 'flex' : 'none' }}
        >
            {/* Left content box */}
            <div id="header-left-content-box">
                {/* Brand logo and brand text */}
                <BrandLogo />
                <BrandText />
            </div>

            {/* Middle content box */}
            <div id="header-middle-content-box">
                <Navbar />
            </div>

            {/* Right content box */}
            <div id="header-right-content-box">
                {/* Mobile menu */}
                <MobileMenu />

                {/* Alert icon */}
                <IconButton icon="far fa-bell" iconDropdown="fas fa-bell">
                    <DropdownWindow></DropdownWindow>
                </IconButton>

                {/* User icon */}
                <IconButton icon="fas fa-circle-user">
                    <DropdownWindow></DropdownWindow>
                </IconButton>
            </div>
        </header>
    );
}

export default Header;
export { isHeaderComponentVisible };
