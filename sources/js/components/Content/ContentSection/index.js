/**
 * @file index.js
 * @description Content section component.
 */

'use strict';
import * as styles from './ContentSection.module.css';

/**
 * Content section component.
 * @param {Object} props Component properties.
 * @param {*} props.children Section children. (optional)
 * @param {String} props.id Section id (optional)
 * @param {Boolean} props.noPadding Remove default section padding (optional: true | false)
 * @param {Boolean} props.textCenter Enable text centering for the content inner section (optional: true | false)
 * @param {Boolean} props.flexCenter Enable flex centering (column) for the content section element (not the inner-section) (optional: true | false)
 * @param {Boolean} props.fixedHeight Make the section have a fixed height, prevent flex grow. (optional: true | false)
 * @param {Boolean} props.topBorder Add a top border to the section (optional: true | false)
 * @param {Boolean} props.noChildDefaultMargin Remove default margins of the section childs (optional: true | false)
 * @param {*} props.sectionProps Section element additional properties (optional)
 * @param {*} props.innerSectionProps Inner section element additional properties (optional)
 * @returns Returns the component.
 */
function ContentSection({
    children,
    id,
    noPadding = false,
    textCenter = false,
    flexCenter = false,
    fixedHeight = false,
    topBorder = false,
    noChildDefaultMargin = false,
    sectionProps,
    innerSectionProps,
}) {
    const classes = `${styles['content-section']}
                     ${noPadding ? styles['no-padding'] : ''}
                     ${flexCenter ? styles['flex-center'] : ''}
                     ${fixedHeight ? styles['fixed-height'] : ''}
                     ${topBorder ? styles['top-border'] : ''}
                     ${noChildDefaultMargin ? styles['no-child-default-margin'] : ''}`;
    return (
        <section id={id} className={classes} {...sectionProps}>
            <section
                className={styles['inner-content-section']}
                style={{ textAlign: textCenter ? 'center' : 'initial' }}
                {...innerSectionProps}
            >
                {children}
            </section>
        </section>
    );
}

export default ContentSection;
