/**
 * @file index.tsx
 * @description Global context for the application.
 */

'use strict';
import {
    FunctionComponent,
    ReactNode,
    createContext,
    useState,
    useEffect,
    useRef,
} from 'react';
import { useNavigation } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar';

import themes from '../../Theme';

// Global context.
const globalContext = createContext(null);

/**
 * Global context provider component.
 * @param props Component properties.
 * @param props.children Context children.
 * @returns Returns the component.
 */
const GlobalProvider: FunctionComponent<{ children: ReactNode }> = function ({
    children,
}) {
    const navigation = useNavigation(),
        loadingBarRef = useRef(null);

    const [theme, setTheme] = useState(() => {
            let theme = localStorage.getItem('theme');
            if (!theme || (theme !== 'light' && theme !== 'dark')) {
                localStorage.setItem('theme', 'dark');
                theme = 'dark';
            }

            return theme;
        }),
        [deviceType, setDeviceType] = useState(() => ({
            deviceType:
                window.innerWidth >= 1024
                    ? 'Desktop'
                    : window.innerWidth >= 741
                      ? 'Tablet'
                      : 'Mobile',
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        })),
        [allowScrolling, setAllowScrolling] = useState(true);

    let Theme;
    switch (theme) {
        case 'light':
            Theme = themes['Light'];
            break;
        case 'dark':
            Theme = themes['Dark'];
            break;
        default:
            console.warn('Unknown theme name detected, fallback to default.');
            Theme = themes['Dark'];
    }

    useEffect(() => {
        window.addEventListener('resize', handleUpdateDeviceType);
        return () => {
            window.removeEventListener('resize', handleUpdateDeviceType);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        switch (navigation.state) {
            case 'idle':
                loadingBarRef?.current?.complete();
                break;
            case 'loading':
                loadingBarRef?.current?.continuousStart();
                break;
            case 'submitting':
                break;
        }
    }, [navigation.state]);

    function handleUpdateDeviceType() {
        const deviceTypeString =
            window.innerWidth >= 1024
                ? 'Desktop'
                : window.innerWidth >= 741
                  ? 'Tablet'
                  : 'Mobile';
        setDeviceType({
            deviceType: deviceTypeString,
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight,
        });
    }

    const global = {
        theme,
        setTheme,
        deviceType,
        setAllowScrolling,
    };

    return (
        <globalContext.Provider value={global}>
            <LoadingBar
                ref={loadingBarRef}
                color="var(--color-primary)"
                transitionTime={100}
                loaderSpeed={100}
                waitingTime={500}
            />
            {!allowScrolling && (
                <style>
                    {`
                    :root {
                        --general-html-overflow: clip;
                    }
                    `}
                </style>
            )}
            {Theme && <Theme />}
            {children}
        </globalContext.Provider>
    );
};

GlobalProvider.propTypes = {
    children: PropTypes.node,
};

export { globalContext, GlobalProvider };
