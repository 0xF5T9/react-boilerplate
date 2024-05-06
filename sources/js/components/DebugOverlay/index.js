/**
 * @file index.js
 * @description The debug overlay component.
 */

'use strict';
import { useEffect, useState } from 'react';
import './DebugOverlay.css';

/**
 * The debug overlay component.
 */
function DebugOverlay() {
    const [windowSizeInfo, setWindowSizeInfo] = useState(() => {
            return {
                deviceType:
                    window.innerWidth >= 1024
                        ? 'Desktop'
                        : window.innerWidth >= 741
                          ? 'Tablet'
                          : 'Mobile',
                deviceWidth: window.innerWidth,
                deviceHeight: window.innerHeight,
            };
        }),
        [backgroundColor, setBackgroundColor] = useState(() => {
            switch (windowSizeInfo.deviceType) {
                case 'Tablet':
                    return 'var(--color-red)';
                case 'Mobile':
                    return 'var(--color-purple)';
                case 'Desktop':
                default:
                    return 'var(--color-orange)';
            }
        });

    useEffect(() => {
        window.addEventListener('resize', handleUpdateWindowSizeInfo);
        return () => {
            window.removeEventListener('resize', handleUpdateWindowSizeInfo);
        };
    }, []);

    function handleUpdateWindowSizeInfo() {
        const device_type =
            window.innerWidth >= 1024
                ? 'Desktop'
                : window.innerWidth >= 741
                  ? 'Tablet'
                  : 'Mobile';
        setWindowSizeInfo({
            deviceType: device_type,
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        });
        switch (device_type) {
            case 'Tablet':
                setBackgroundColor('var(--color-red)');
                break;
            case 'Mobile':
                setBackgroundColor('var(--color-purple)');
                break;
            case 'Desktop':
            default:
                setBackgroundColor('var(--color-orange)');
        }
    }

    return (
        <>
            <div id="debug-overlay">
                <h5 style={{ backgroundColor: backgroundColor }}>
                    {`${windowSizeInfo.deviceWidth}x${windowSizeInfo.deviceHeight} (${windowSizeInfo.deviceType})`}
                </h5>
            </div>
        </>
    );
}

export default DebugOverlay;
