/**
 * @file index.tsx
 * @description Server message.
 */

'use strict';
import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './ServerMessage.module.css';

/**
 * Server message component.
 * @param props Component properties.
 * @param props.message Server message.
 * @param props.type Message type.
 * @param props.onClick Delete message button on-click callback.
 * @returns Returns the component.
 */
const ServerMessage: FunctionComponent<{
    message?: string;
    type?: 'success' | 'error';
    onClick?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >['onClick'];
}> = function ({ message, type, onClick }) {
    const classes = classNames(styles['server-message-wrapper'], styles[type]);

    return (
        <div className={classes}>
            <span className={styles['server-message']}>{message}</span>
            <div className={styles['server-message-delete']} onClick={onClick}>
                <i className="fa-solid fa-x"></i>
            </div>
        </div>
    );
};

ServerMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error']),
    onClick: PropTypes.func,
};

export default ServerMessage;
