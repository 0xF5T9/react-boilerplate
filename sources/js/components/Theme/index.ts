/**
 * @file index.js
 * @description Theme components.
 */
'use strict';
import Light from './Light';
import Dark from './Dark';

const themes = {
    Light,
    Dark,
};

export default themes;
export { default as Light } from './Light';
export { default as Dark } from './Dark';
