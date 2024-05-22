/**
 * @file index.js
 * @description Content section component.
 * @note This is a sub-component of the <Content /> component.
 */

'use strict';
import PropTypes from 'prop-types';
import * as styles from './ContentSection.module.css';

/**
 * Content section component.
 * @param {Object} props Component properties.
 * @param {String} props.id Section id.
 * @param {String} props.className Additional section class names.
 * @param {Boolean} props.noPadding Remove default section padding.
 * @param {Boolean} props.textCenter Enable text centering for the content inner section.
 * @param {Boolean} props.flexCenter Enable flex centering (column) for the content section element (not the inner-section).
 * @param {Boolean} props.fixedHeight Make the section have a fixed height, prevent flex grow.
 * @param {Boolean} props.topBorder Add a top border to the section.
 * @param {Boolean} props.noChildDefaultMargin Remove default margins of the section childs.
 * @param {*} props.children Section children.
 * @param {Object} props.sectionStyle Additional section style.
 * @param {Object} props.innerSectionStyle Additional inner section style.
 * @returns Returns the component.
 */
function ContentSection({
    id,
    className,
    noPadding,
    textCenter,
    flexCenter,
    fixedHeight,
    topBorder,
    noChildDefaultMargin,
    children,
    sectionStyle,
    innerSectionStyle,
}) {
    const classes = `${styles['content-section']}
                     ${noPadding ? styles['no-padding'] : ''}
                     ${flexCenter ? styles['flex-center'] : ''}
                     ${fixedHeight ? styles['fixed-height'] : ''}
                     ${topBorder ? styles['top-border'] : ''}
                     ${noChildDefaultMargin ? styles['no-child-default-margin'] : ''}
                     ${className || ''}`;
    let innerStyleObject = Object.assign(
        { textAlign: textCenter ? 'center' : 'initial' },
        innerSectionStyle
    );

    return (
        <section id={id} className={classes} style={sectionStyle}>
            <section
                className={styles['inner-content-section']}
                style={innerStyleObject}
            >
                {children}
            </section>
        </section>
    );
}

ContentSection.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    noPadding: PropTypes.bool,
    textCenter: PropTypes.bool,
    flexCenter: PropTypes.bool,
    fixedHeight: PropTypes.bool,
    topBorder: PropTypes.bool,
    noChildDefaultMargin: PropTypes.bool,
    children: PropTypes.node,
    sectionStyle: PropTypes.object,
    innerSectionStyle: PropTypes.object,
};

export default ContentSection;
