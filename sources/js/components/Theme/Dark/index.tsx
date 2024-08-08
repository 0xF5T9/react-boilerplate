/**
 * @file index.tsx
 * @description Dark theme component.
 */
'use strict';
import css from '!!raw-loader!./Dark.css';

function Theme() {
    return <style>{`${css}`}</style>;
}

export default Theme;
