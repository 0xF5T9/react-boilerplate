/**
 * @file index.tsx
 * @description Header user icon button, with popup window.
 */

'use strict';
import { FunctionComponent, useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';
import ContextMenu from '../../../ContextMenu';
import { CircleUser } from '../../../Icons/CircleUser';
import userContextMenu from '../../../../render/user-context-menu';

/**
 * Header user icon button, with popup window.
 * @returns Returns the component.
 */
const UserIcon: FunctionComponent = function () {
    const [showPopup, setShowPopup] = useState(false);

    function handleClick() {
        setShowPopup(!showPopup);
    }

    return (
        <ContextMenu
            menus={userContextMenu}
            visible={showPopup}
            setVisible={setShowPopup}
            animation="slide-scale"
        >
            <IconButton
                icon={CircleUser}
                isOpen={showPopup}
                onClick={handleClick}
            />
        </ContextMenu>
    );
};

UserIcon.propTypes = {
    menus: PropTypes.array.isRequired,
};

export default UserIcon;
