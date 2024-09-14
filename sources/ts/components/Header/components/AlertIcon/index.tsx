/**
 * @file index.tsx
 * @description Header alert button with popup.
 */

'use strict';
import { FunctionComponent, useState } from 'react';

import IconButton from '~/ts/components/Header/components/IconButton';
import PopupWindow, { PopupRender } from '~/ts/components/PopupWindow';
import { Bell } from '~/ts/components/Icons/Bell';
import { BellOutline } from '~/ts/components/Icons/BellOutline';
import * as styles from './AlertIcon.module.css';

/**
 * Header Header alert button with popup.
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
        <PopupWindow
            appendTo={document.body}
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
                <PopupRender className={styles['alert-popup']}>
                    No alerts.
                </PopupRender>
            )}
        >
            <IconButton
                icon={showPopup ? Bell : BellOutline}
                isOpen={showPopup}
                onClick={handleClick}
            />
        </PopupWindow>
    );
};

export default AlertIcon;
