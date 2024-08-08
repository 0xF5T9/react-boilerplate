/**
 * @file index.tsx
 * @description Light theme component.
 */
'use strict';
import css from '!!raw-loader!./Light.css';

function Theme() {
    return <style>{`${css}`}</style>;
}

export default Theme;
