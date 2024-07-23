/**
 * @file index.jsx
 * @description Light brown theme component.
 */
'use strict';
import css from '!!raw-loader!./LightBrown.css';

function Theme() {
    return <style>{`${css}`}</style>;
}

export default Theme;
