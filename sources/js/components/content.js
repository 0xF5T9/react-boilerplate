/**
 * @file content.js
 * @description The content component.
 */

'use strict';
import * as functions from '../function.js';
import { Input, Checkbox, Radio } from './input.js';
import { Button } from './button.js';
const $ = document.querySelector.bind(document);

/************************
 * CUSTOM EVENT HANDLES *
 ************************/

function openModalWindow1(event) {
    const modal_window = $('#custom-modal-window-1');
    if (modal_window) {
        if (functions.isModalOverlayVisible())
            functions.closeModalOverlay(true);
        setTimeout(function () {
            modal_window.classList.add('is-open');
        }, 1);
    }
}

function openModalWindow2(event) {
    const modal_window = $('#custom-modal-window-2');
    if (modal_window) {
        if (functions.isModalOverlayVisible())
            functions.closeModalOverlay(true);
        setTimeout(function () {
            modal_window.classList.add('is-open');
        }, 1);
    }
}

function showHideHeader(event) {
    if (functions.isHeaderVisible()) {
        event.target.innerHTML = 'Show Header';
        functions.hideHeader();
        functions.showToast(
            'Info',
            'The header has been hidden.',
            'info',
            1000
        );
    } else {
        event.target.innerHTML = 'Hide Header';
        functions.showHeader();
        functions.showToast('Info', 'The header has been shown.', 'info', 1000);
    }
}

function showHideFooter(event) {
    if (functions.isFooterVisible()) {
        event.target.innerHTML = 'Show Footer';
        functions.hideFooter();
        functions.showToast(
            'Info',
            'The footer has been hidden.',
            'info',
            1000
        );
    } else {
        event.target.innerHTML = 'Hide Footer';
        functions.showFooter();
        functions.showToast('Info', 'The footer has been shown.', 'info', 1000);
    }
}

function playClickSound(event) {
    const audio = new Audio('/assets/static/sound/ClickSoundEffect.wav');
    audio.play();
}

/****************************
 * CONTENT CHILD COMPONENTS *
 ****************************/

/**
 * Content section component.
 * @param {Object} props.children Section children. (optional)
 * @param {Object} props.id Section id (optional)
 * @param {Object} props.noPadding Remove default section padding (optional: true | false)
 * @param {Object} props.textCenter Enable text centering for the content inner section (optional: true | false)
 * @param {Object} props.flexCenter Enable flex centering (column) for the content section element (not the inner-section) (optional: true | false)
 * @param {Object} props.fixedHeight Make the section have a fixed height, prevent flex grow. (optional: true | false)
 * @param {Object} props.topBorder Add a top border to the section (optional: true | false)
 * @param {Object} props.noChildDefaultMargin Remove default margins of the section childs (optional: true | false)
 * @param {Object} props.sectionProps Section element additional properties (optional)
 * @param {Object} props.innerSectionProps Inner section element additional properties (optional)
 * @returns Returns the component.
 */
export function ContentSection({
    children,
    id = '',
    noPadding = false,
    textCenter = false,
    flexCenter = false,
    fixedHeight = false,
    topBorder = false,
    noChildDefaultMargin = false,
    sectionProps,
    innerSectionProps,
}) {
    return (
        <section
            id={id}
            className={`content-section ${noPadding ? 'no-padding' : ''} ${flexCenter ? 'flex-center' : ''} ${fixedHeight ? 'fixed-height' : ''} ${topBorder ? 'top-border' : ''} ${noChildDefaultMargin ? 'no-child-default-margin' : ''}`}
            {...sectionProps}
        >
            <section
                className="inner-content-section"
                style={{ textAlign: textCenter ? 'center' : 'initial' }}
                {...innerSectionProps}
            >
                {children}
            </section>
        </section>
    );
}

/*********************
 * CONTENT COMPONENT *
 *********************/

/**
 * Content component.
 * @returns Returns the content component.
 */
export function Content() {
    return (
        <div id="content-wrapper">
            {/* Button sample section */}
            <ContentSection id="button-sample-section" flexCenter textCenter>
                <h1>Default Buttons</h1>
                <Button>Primary</Button> <Button color="red">Red</Button>{' '}
                <Button color="orange">Orange</Button>{' '}
                <Button color="yellow">Yellow</Button>{' '}
                <Button color="green">Green</Button>{' '}
                <Button color="blue">Blue</Button>{' '}
                <Button color="purple">Purple</Button>
                <h1 style={{ marginTop: '26px' }}>Default White Buttons</h1>
                <Button white>Primary</Button>{' '}
                <Button color="red" white>
                    Red
                </Button>{' '}
                <Button color="orange" white>
                    Orange
                </Button>{' '}
                <Button color="yellow" white>
                    Yellow
                </Button>{' '}
                <Button color="green" white>
                    Green
                </Button>{' '}
                <Button color="blue" white>
                    Blue
                </Button>{' '}
                <Button color="purple" white>
                    Purple
                </Button>
                <h1 style={{ marginTop: '26px' }}>Outline Buttons</h1>
                <Button outline>Primary</Button>{' '}
                <Button color="red" outline>
                    Red
                </Button>{' '}
                <Button color="orange" outline>
                    Orange
                </Button>{' '}
                <Button color="yellow" outline>
                    Yellow
                </Button>{' '}
                <Button color="green" outline>
                    Green
                </Button>{' '}
                <Button color="blue" outline>
                    Blue
                </Button>{' '}
                <Button color="purple" outline>
                    Purple
                </Button>
                <h1 style={{ marginTop: '26px' }}>Outline White Buttons</h1>
                <Button outline white>
                    Primary
                </Button>{' '}
                <Button color="red" outline white>
                    Red
                </Button>{' '}
                <Button color="orange" outline white>
                    Orange
                </Button>{' '}
                <Button color="yellow" outline white>
                    Yellow
                </Button>{' '}
                <Button color="green" outline white>
                    Green
                </Button>{' '}
                <Button color="blue" outline white>
                    Blue
                </Button>{' '}
                <Button color="purple" outline white>
                    Purple
                </Button>
                <h1 style={{ marginTop: '26px' }}>White-Only Buttons</h1>
                <Button whiteOnly>Default</Button>{' '}
                <Button outline whiteOnly>
                    Outline
                </Button>
                <h1 style={{ marginTop: '26px' }}>Disabled Buttons</h1>
                <Button disabled>Primary</Button>{' '}
                <Button disabled color="red">
                    Red
                </Button>{' '}
                <Button disabled color="orange">
                    Orange
                </Button>{' '}
                <Button disabled color="yellow">
                    Yellow
                </Button>{' '}
                <Button disabled color="green">
                    Green
                </Button>{' '}
                <Button disabled color="blue">
                    Blue
                </Button>{' '}
                <Button disabled color="purple">
                    Purple
                </Button>
                <br />
                <Button disabled white>
                    Primary
                </Button>{' '}
                <Button disabled color="red" white>
                    Red
                </Button>{' '}
                <Button disabled color="orange" white>
                    Orange
                </Button>{' '}
                <Button disabled color="yellow" white>
                    Yellow
                </Button>{' '}
                <Button disabled color="green" white>
                    Green
                </Button>{' '}
                <Button disabled color="blue" white>
                    Blue
                </Button>{' '}
                <Button disabled color="purple" white>
                    Purple
                </Button>
                <br />
                <Button disabled outline>
                    Primary
                </Button>{' '}
                <Button disabled color="red" outline>
                    Red
                </Button>{' '}
                <Button disabled color="orange" outline>
                    Orange
                </Button>{' '}
                <Button disabled color="yellow" outline>
                    Yellow
                </Button>{' '}
                <Button disabled color="green" outline>
                    Green
                </Button>{' '}
                <Button disabled color="blue" outline>
                    Blue
                </Button>{' '}
                <Button disabled color="purple" outline>
                    Purple
                </Button>
                <br />
                <Button disabled outline white>
                    Primary
                </Button>{' '}
                <Button disabled color="red" outline white>
                    Red
                </Button>{' '}
                <Button disabled color="orange" outline white>
                    Orange
                </Button>{' '}
                <Button disabled color="yellow" outline white>
                    Yellow
                </Button>{' '}
                <Button disabled color="green" outline white>
                    Green
                </Button>{' '}
                <Button disabled color="blue" outline white>
                    Blue
                </Button>{' '}
                <Button disabled color="purple" outline white>
                    Purple
                </Button>
                <br />
                <Button disabled whiteOnly>
                    Default
                </Button>{' '}
                <Button disabled outline whiteOnly>
                    Outline
                </Button>
                <h1 style={{ marginTop: '26px' }}>Icon Buttons</h1>
                <Button>
                    <i className="fa-solid fa-magnifying-glass"></i> Search
                </Button>{' '}
                <Button white>
                    <i className="fa-solid fa-folder-open"></i> Open Folder
                </Button>{' '}
                <Button outline>
                    <i className="fa-solid fa-gear"></i> Settings
                </Button>{' '}
                <Button outline white>
                    <i className="fa-solid fa-right-to-bracket"></i> Sign Up
                </Button>{' '}
                <Button whiteOnly>
                    <i className="fa-solid fa-play"></i> Play
                </Button>{' '}
                <Button outline whiteOnly>
                    <i className="fa-solid fa-pause"></i> Pause
                </Button>{' '}
                <h1 style={{ marginTop: '26px' }}>Sized Buttons</h1>
                <Button size="small" outline whiteOnly>
                    Small
                </Button>{' '}
                <Button outline whiteOnly>
                    Default
                </Button>{' '}
                <Button size="large" outline whiteOnly>
                    Large
                </Button>
                <h1 style={{ marginTop: '26px' }}>Functional Buttons</h1>
                <Button
                    id="modal-window-sample-button-1"
                    buttonProps={{ onClick: openModalWindow1 }}
                    outline
                    whiteOnly
                >
                    Modal Window 1
                </Button>{' '}
                <Button
                    id="modal-window-sample-button-2"
                    buttonProps={{ onClick: openModalWindow2 }}
                    outline
                    whiteOnly
                >
                    Modal Window 2
                </Button>{' '}
                <Button
                    id="show-hide-header-button"
                    buttonProps={{ onClick: showHideHeader }}
                    outline
                    whiteOnly
                >
                    Hide Header
                </Button>{' '}
                <Button
                    id="show-hide-footer-button"
                    buttonProps={{ onClick: showHideFooter }}
                    outline
                    whiteOnly
                >
                    Hide Footer
                </Button>{' '}
                <Button
                    id="click-sound-button"
                    buttonProps={{ onClick: playClickSound }}
                    outline
                    whiteOnly
                >
                    Click Sound
                </Button>
            </ContentSection>

            {/* Input sample section */}
            <ContentSection
                id="input-sample-section"
                flexCenter
                textCenter
                topBorder
            >
                <h1>Default Inputs</h1>
                <Input
                    type="text"
                    placeholder="Primary"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    altStyle="alt"
                    placeholder="Primary"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    color="red"
                    placeholder="Red"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    color="red"
                    altStyle="alt"
                    placeholder="Red"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    color="orange"
                    placeholder="Orange"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    color="orange"
                    altStyle="alt"
                    placeholder="Orange"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    color="yellow"
                    placeholder="Yellow"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    color="yellow"
                    altStyle="alt"
                    placeholder="Yellow"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    color="green"
                    placeholder="Green"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    color="green"
                    altStyle="alt"
                    placeholder="Green"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    color="blue"
                    placeholder="Blue"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    color="blue"
                    altStyle="alt"
                    placeholder="Blue"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    color="purple"
                    placeholder="Purple"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    color="purple"
                    altStyle="alt"
                    placeholder="Purple"
                    inputProps={{ style: { width: '250px' } }}
                    disabled
                />
                <h1 style={{ marginTop: '26px' }}>Disabled Input</h1>
                <Input
                    type="text"
                    placeholder="This input is disabled"
                    inputProps={{ style: { width: '250px' } }}
                    disabled
                />{' '}
                <Input
                    type="text"
                    altStyle="alt"
                    placeholder="This input is disabled"
                    inputProps={{ style: { width: '250px' } }}
                    disabled
                />
                <h1 style={{ marginTop: '26px' }}>Icon Input</h1>
                <Input
                    type="email"
                    icon={{
                        iconPosition: 'icon-left',
                        iconClass: 'fa-solid fa-envelope',
                    }}
                    placeholder="Email"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="password"
                    icon={{
                        iconPosition: 'icon-left',
                        iconClass: 'fa-solid fa-lock',
                    }}
                    placeholder="Password"
                    inputProps={{ style: { width: '250px' } }}
                />
                <br />
                <Input
                    type="text"
                    icon={{
                        iconPosition: 'icon-right',
                        iconClass: 'fa-solid fa-search',
                    }}
                    placeholder="Search"
                    inputProps={{ style: { width: '250px' } }}
                />{' '}
                <Input
                    type="text"
                    icon={{
                        iconPosition: 'icon-right',
                        iconClass: 'fa-solid fa-address-book',
                    }}
                    placeholder="Phone Number"
                    inputProps={{ style: { width: '250px' } }}
                />
                <h1 style={{ marginTop: '26px' }}>Sized Input</h1>
                <Input
                    type="text"
                    size="small"
                    placeholder="Small"
                    inputProps={{ style: { width: '100px' } }}
                />{' '}
                <Input
                    type="text"
                    placeholder="Default"
                    inputProps={{ style: { width: '100px' } }}
                />{' '}
                <Input
                    type="text"
                    size="large"
                    placeholder="Large"
                    inputProps={{ style: { width: '100px' } }}
                />
                <br />
                <Input
                    type="text"
                    size="small"
                    icon={{
                        iconPosition: 'icon-right',
                        iconClass: 'fa-solid fa-info-circle',
                    }}
                    placeholder="Small"
                    inputProps={{ style: { width: '100px' } }}
                />{' '}
                <Input
                    type="text"
                    icon={{
                        iconPosition: 'icon-right',
                        iconClass: 'fa-solid fa-info-circle',
                    }}
                    placeholder="Default"
                    inputProps={{ style: { width: '100px' } }}
                />{' '}
                <Input
                    type="text"
                    size="large"
                    icon={{
                        iconPosition: 'icon-right',
                        iconClass: 'fa-solid fa-info-circle',
                    }}
                    placeholder="Large"
                    inputProps={{ style: { width: '100px' } }}
                />
            </ContentSection>

            {/* Checkbox sample section */}
            <ContentSection
                id="checkbox-sample-section"
                flexCenter
                textCenter
                topBorder
            >
                <h1>Default Checkboxes</h1>
                <Checkbox
                    labelText="Primary"
                    id="cb-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="cb-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="cb-3"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="cb-4"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="cb-5"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="cb-6"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox labelText="Purple" color="purple" id="cb-7" />
                <h1 style={{ marginTop: '26px' }}>Alternative Checkboxes 1</h1>
                <Checkbox
                    labelText="Primary"
                    id="cba-1"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="cba-2"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="cba-3"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="cba-4"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="cba-5"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="cba-6"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="cba-7"
                    altStyle="alt-1"
                />
                <h1 style={{ marginTop: '26px' }}>Alternative Checkboxes 2</h1>
                <Checkbox
                    labelText="Primary"
                    id="cba2-1"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="cba2-2"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="cba2-3"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="cba2-4"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="cba2-5"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="cba2-6"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="cba2-7"
                    altStyle="alt-2"
                />
                <h1 style={{ marginTop: '26px' }}>White-Only Checkboxes</h1>
                <Checkbox
                    labelText="Primary"
                    id="wcb-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="wcb-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="wcb-3"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="wcb-4"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="wcb-5"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="wcb-6"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="wcb-7"
                    whiteOnly
                />
                <h1 style={{ marginTop: '26px' }}>Disabled Checkboxes</h1>
                <Checkbox
                    labelText="Primary"
                    id="dcb-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dcb-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dcb-3"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dcb-4"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dcb-5"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dcb-6"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dcb-7"
                    disabled
                />
                <br />
                <Checkbox
                    labelText="Primary"
                    id="dcba-1"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dcba-2"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dcba-3"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dcba-4"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dcba-5"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dcba-6"
                    altStyle="alt-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dcba-7"
                    altStyle="alt-1"
                    disabled
                />
                <br />
                <Checkbox
                    labelText="Primary"
                    id="dcba2-1"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dcba2-2"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dcba2-3"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dcba2-4"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dcba2-5"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dcba2-6"
                    altStyle="alt-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dcba2-7"
                    altStyle="alt-2"
                    disabled
                />
                <br />
                <Checkbox
                    labelText="Primary"
                    id="dwcb-1"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dwcb-2"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dwcb-3"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dwcb-4"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dwcb-5"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dwcb-6"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dwcb-7"
                    whiteOnly
                    disabled
                />
                <h1 style={{ marginTop: '26px' }}>Sized Checkboxes</h1>
                <Checkbox
                    labelText="Small"
                    size="small"
                    id="scb-small"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Checkbox
                    labelText="Default"
                    id="scb-default"
                    checkboxWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Checkbox labelText="Large" size="large" id="scb-large" />
            </ContentSection>

            {/* Radio sample section */}
            <ContentSection
                id="radio-sample-section"
                flexCenter
                textCenter
                topBorder
            >
                <h1>Default Radios</h1>
                <Radio
                    labelText="Primary"
                    id="r-1"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Red"
                    color="red"
                    id="r-2"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    id="r-3"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    id="r-4"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Green"
                    color="green"
                    id="r-5"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    id="r-6"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    id="r-7"
                    name="rg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <h1 style={{ marginTop: '26px' }}>Alternative Radios 1</h1>
                <Radio
                    labelText="Primary"
                    altStyle="alt-1"
                    id="ra-1"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Red"
                    color="red"
                    altStyle="alt-1"
                    id="ra-2"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    altStyle="alt-1"
                    id="ra-3"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    altStyle="alt-1"
                    id="ra-4"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Green"
                    color="green"
                    altStyle="alt-1"
                    id="ra-5"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    altStyle="alt-1"
                    id="ra-6"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    altStyle="alt-1"
                    id="ra-7"
                    name="rg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <h1 style={{ marginTop: '26px' }}>Alternative Radios 2</h1>
                <Radio
                    labelText="Primary"
                    altStyle="alt-2"
                    id="ra2-1"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Red"
                    color="red"
                    altStyle="alt-2"
                    id="ra2-2"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    altStyle="alt-2"
                    id="ra2-3"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    altStyle="alt-2"
                    id="ra2-4"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Green"
                    color="green"
                    altStyle="alt-2"
                    id="ra2-5"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    altStyle="alt-2"
                    id="ra2-6"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    altStyle="alt-2"
                    id="ra2-7"
                    name="rg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <h1 style={{ marginTop: '26px' }}>White-Only Radios</h1>
                <Radio
                    labelText="Primary"
                    id="wr-1"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <Radio
                    labelText="Red"
                    color="red"
                    id="wr-2"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    id="wr-3"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    id="wr-4"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <Radio
                    labelText="Green"
                    color="green"
                    id="wr-5"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    id="wr-6"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    id="wr-7"
                    name="rg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                />
                <h1 style={{ marginTop: '26px' }}>Disabled Radios</h1>
                <Radio
                    labelText="Primary"
                    id="dr-1"
                    name="drg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Red"
                    color="red"
                    id="dr-2"
                    name="drg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    id="dr-3"
                    name="drg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    id="dr-4"
                    name="drg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Green"
                    color="green"
                    id="dr-5"
                    name="drg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    id="dr-6"
                    name="drg-1"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    id="dr-7"
                    name="drg-1"
                    disabled
                />
                <br />
                <Radio
                    labelText="Primary"
                    altStyle="alt-1"
                    id="dra-1"
                    name="drg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Red"
                    color="red"
                    altStyle="alt-1"
                    id="dra-2"
                    name="drg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    altStyle="alt-1"
                    id="dra-3"
                    name="drg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    altStyle="alt-1"
                    id="dra-4"
                    name="drg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Green"
                    color="green"
                    altStyle="alt-1"
                    id="dra-5"
                    name="drg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    altStyle="alt-1"
                    id="dra-6"
                    name="drg-2"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    altStyle="alt-1"
                    id="dra-7"
                    name="drg-2"
                    disabled
                />
                <br />
                <Radio
                    labelText="Primary"
                    altStyle="alt-2"
                    id="dra2-1"
                    name="drg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Red"
                    color="red"
                    altStyle="alt-2"
                    id="dra2-2"
                    name="drg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    altStyle="alt-2"
                    id="dra2-3"
                    name="drg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    altStyle="alt-2"
                    id="dra2-4"
                    name="drg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Green"
                    color="green"
                    altStyle="alt-2"
                    id="dra2-5"
                    name="drg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    altStyle="alt-2"
                    id="dra2-6"
                    name="drg-3"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    disabled
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    altStyle="alt-2"
                    id="dra2-7"
                    name="drg-3"
                    disabled
                />
                <br />
                <Radio
                    labelText="Primary"
                    id="dwr-1"
                    name="drg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />
                <Radio
                    labelText="Red"
                    color="red"
                    id="dwr-2"
                    name="drg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />
                <Radio
                    labelText="Orange"
                    color="orange"
                    id="dwr-3"
                    name="drg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />
                <Radio
                    labelText="Yellow"
                    color="yellow"
                    id="dwr-4"
                    name="drg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />
                <Radio
                    labelText="Green"
                    color="green"
                    id="dwr-5"
                    name="drg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />
                <Radio
                    labelText="Blue"
                    color="blue"
                    id="dwr-6"
                    name="drg-4"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                    whiteOnly
                    disabled
                />
                <Radio
                    labelText="Purple"
                    color="purple"
                    id="dwr-7"
                    name="drg-4"
                    whiteOnly
                    disabled
                />
                <h1 style={{ marginTop: '26px' }}>Sized Radios</h1>
                <Radio
                    labelText="Small"
                    id="sr-small"
                    size="small"
                    name="srg"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Default"
                    id="sr-default"
                    name="srg"
                    radioWrapperProps={{ style: { marginRight: '10px' } }}
                />
                <Radio
                    labelText="Large"
                    id="sr-large"
                    size="large"
                    name="srg"
                />
            </ContentSection>

            {/* Fixed height sample section */}
            <ContentSection
                flexCenter
                textCenter
                fixedHeight
                topBorder
                sectionProps={{ style: { height: '300px' } }}
            >
                <h1>Fixed Height Section</h1>
                <p>This content section has a fixed height of 300 pixels.</p>
            </ContentSection>

            {/* Default sample section */}
            <ContentSection flexCenter textCenter topBorder>
                <h1>Default Section</h1>
                <p>This content section's height is automatically scaled.</p>
            </ContentSection>
        </div>
    );
}
