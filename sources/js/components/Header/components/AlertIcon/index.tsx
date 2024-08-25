/**
 * @file index.tsx
 * @description Header alert icon button, with popup window.
 * @note This is a sub-component of the <Header /> component.
 */

'use strict';
import { FunctionComponent, useState } from 'react';

import IconButton, { IconButtonStyles } from '../IconButton';
import PopupWindow, { PopupRender } from '../../../PopupWindow';
import * as styles from './AlertIcon.module.css';

/**
 * Header alert icon button, with popup window.
 * @returns Returns the component.
 */
const AlertIcon: FunctionComponent = function () {
    const [showPopup, setShowPopup] = useState(false);

    function handleClick() {
        setShowPopup(!showPopup);
    }

    function handleBackgroundClick() {
        setShowPopup(false);
    }

    return (
        <div>
            <PopupWindow
                interactive
                visible={showPopup}
                offset={[0, 0]}
                placement="bottom-end"
                onClickOutside={handleBackgroundClick}
                customAnimation={{
                    classIn: styles['animation-in'],
                    classOut: styles['animation-out'],
                    outAnimationName: styles['popup-out'],
                }}
                render={() => (
                    <PopupRender
                        className={styles['alert-popup']}
                    ></PopupRender>
                )}
            >
                <IconButton
                    icon={`${showPopup ? 'fas' : 'far'} fa-bell`}
                    className={`${showPopup ? IconButtonStyles['is-popup-open'] : ''}`}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
};

export default AlertIcon;
