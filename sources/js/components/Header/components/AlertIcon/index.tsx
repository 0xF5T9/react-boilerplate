/**
 * @file index.tsx
 * @description Header alert icon button, with popup window.
 */

'use strict';
import { FunctionComponent, useState } from 'react';

import IconButton from '../IconButton';
import PopupWindow, { PopupRender } from '../../../PopupWindow';
import { Bell } from '../../../Icons/Bell';
import { BellOutline } from '../../../Icons/BellOutline';
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
                    icon={showPopup ? Bell : BellOutline}
                    isOpen={showPopup}
                    onClick={handleClick}
                />
            </PopupWindow>
        </div>
    );
};

export default AlertIcon;
