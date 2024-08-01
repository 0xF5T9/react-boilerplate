/**
 * @file index.tsx
 * @description Popup window component.
 */

'use strict';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import * as styles from './PopupWindow.module.css';

/**
 * Popup window component.
 * @param props Component properties.
 * @param props.children Component children.
 * @param props.render Tippy render property.
 * @param props.onMount Additional callback that will be invoked in the tippy onMount callback. (Read note)
 * @param props.onHide Additional callback that will be invoked in the tippy onHide callback. (Read note)
 * @param props.onHidden Tippy 'onHidden' prop.
 * @param props.customAnimation Custom CSS animation classes. ({classIn: '<in animation class>', classOut: '<out animation class>', outAnimationName: '<out animation name (keyframe)>'})
 * @param props.interactive Tippy 'interactive' prop.
 * @param props.visible Tippy 'visible' prop.
 * @param props.offset Tippy 'offset' prop.
 * @param props.placement Tippy 'placement' prop.
 * @param props.onClickOutside Tippy 'onClickOutside' prop.
 * @param props.popperOptions Tippy 'popperOptions' prop.
 * @note This component utilize Tippy onMount, onHide callbacks to handle popup animation logics.
 *       Use 'onMount' & 'onHide' props to add additional callbacks if needed.
 * @returns Returns the component.
 */
function PopupWindow({
    children,
    render,
    onMount,
    onHide,
    onHidden,
    customAnimation,
    interactive,
    visible,
    offset,
    placement,
    onClickOutside,
    popperOptions,
}: {
    children?: any;
    render?: any;
    onMount?: any;
    onHide?: any;
    onHidden?: any;
    customAnimation?: {
        classIn: string;
        classOut: string;
        outAnimationName: string;
    };
    interactive?: any;
    visible?: any;
    offset?: any;
    placement?: any;
    onClickOutside?: any;
    popperOptions?: any;
}) {
    function onPopupMount(instance: any) {
        const popup = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
            if (customAnimation) {
                popup.classList.remove(customAnimation.classOut);
                popup.classList.add(customAnimation.classIn);
            } else {
                popup.classList.remove(styles['animation-out']);
                popup.classList.add(styles['animation-in']);
            }
        });

        if (onMount) onMount(instance);
    }

    function onPopupHide(instance: any) {
        const popup = instance.popper.firstElementChild;
        requestAnimationFrame(() => {
            if (customAnimation) {
                popup.classList.remove(customAnimation.classIn);
                popup.classList.add(customAnimation.classOut);
            } else {
                popup.classList.remove(styles['animation-in']);
                popup.classList.add(styles['animation-out']);
            }
        });

        function handleAnimationEnd(event: any) {
            if (customAnimation) {
                if (event.animationName === customAnimation.outAnimationName) {
                    popup.removeEventListener(
                        'animationend',
                        handleAnimationEnd
                    );
                    instance.unmount();
                }
            } else {
                if (event.animationName === styles['popup-out']) {
                    popup.removeEventListener(
                        'animationend',
                        handleAnimationEnd
                    );
                    instance.unmount();
                }
            }
        }
        popup.addEventListener('animationend', handleAnimationEnd);

        if (onHide) onHide(instance);
    }

    return (
        <Tippy
            animation
            render={render}
            onMount={onPopupMount}
            onHide={onPopupHide}
            onHidden={onHidden}
            interactive={interactive}
            visible={visible}
            offset={offset}
            placement={placement}
            onClickOutside={onClickOutside}
            popperOptions={popperOptions}
        >
            {children}
        </Tippy>
    );
}

PopupWindow.propTypes = {
    children: PropTypes.node,
    render: PropTypes.func,
    onMount: PropTypes.func,
    onHide: PropTypes.func,
    customAnimation: PropTypes.shape({
        classIn: PropTypes.string.isRequired,
        classOut: PropTypes.string.isRequired,
        outAnimationName: PropTypes.string.isRequired,
    }),
};

export default PopupWindow;
export { styles as PopupStyles };
