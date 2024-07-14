/**
 * @file index.js
 * @description Monokai spectrum theme component.
 */
'use strict';
import css from '!!raw-loader!./MonokaiSpectrum.css';

function Theme() {
    return <style>{`${css}`}</style>;
}

export default Theme;
