/**
 * @file index.tsx
 * @description Components section.
 */

'use strict';
import { CSSProperties, FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useGlobal } from '~/ts/hooks/useGlobal';
import routes from '~/ts/global/react-router/routes';
import { FlexibleSection } from '~/ts/components/Content/components/GridSection';
import {
    SectionTitle,
    SectionSubtitle,
    SectionBlock,
} from '~/ts/components/Content/components/GridSection/components';
import { Row, Column } from '~/ts/components/GridSystem';
import { Code } from '~/ts/components/Icons/Code';
import * as styles from './ComponentsSection.module.css';

/**
 * Card item.
 * @param props Component properties.
 * @param props.text Card text.
 * @param props.to Card link.
 * @param props.icon Card icon.
 * @returns Returns the component.
 */
const CardItem: FunctionComponent<{
    text: string;
    to?: string;
    icon?: FunctionComponent;
}> = function ({ text, to, icon }) {
    const navigate = useNavigate(),
        { deviceInfo } = useGlobal();

    const Icon = icon || Code;

    const style: CSSProperties =
        deviceInfo.type === 'mobile'
            ? {
                  padding: '0px 8px',
              }
            : {};

    const classes = classNames(
        `c-${deviceInfo.screenWidth < 480 ? '12' : '6'}`,
        'm-4',
        'l-3'
    );

    return (
        <Column className={classes} style={style}>
            <div
                className={styles['card-item']}
                onClick={to && (() => navigate(to))}
            >
                <Icon className={styles['card-icon']} />
                <span className={styles['card-text']}>{text}</span>
            </div>
        </Column>
    );
};

CardItem.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.any,
};

/**
 * Components section.
 * @returns Returns the component.
 */
const ComponentsSection: FunctionComponent = function () {
    const { theme } = useGlobal();

    return (
        <>
            <FlexibleSection
                contentProps={{
                    className: `${styles['components-section']} ${theme}`,
                    style: {
                        display: 'flex',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px',
                        textAlign: 'center',
                    },
                }}
            >
                <SectionTitle>Components</SectionTitle>
                <SectionSubtitle>Project built-in components</SectionSubtitle>
                <SectionBlock className={`grid ${styles['card-block']}`}>
                    <Row className={styles['card-list']}>
                        <CardItem text="Section" to={routes.samples.section} />
                        <CardItem text="Button" to={routes.samples.button} />
                        <CardItem text="Input" to={routes.samples.input} />
                        <CardItem
                            text="Checkbox"
                            to={routes.samples.checkbox}
                        />
                        <CardItem text="Radio" to={routes.samples.radio} />
                        <CardItem text="Select" to={routes.samples.select} />
                        <CardItem
                            text="Labeled Input"
                            to={routes.samples.labeledInput}
                        />
                        <CardItem
                            text="Labeled Select"
                            to={routes.samples.labeledSelect}
                        />
                        <CardItem text="Toast" to={routes.samples.toast} />
                        <CardItem text="Modal" to={routes.samples.modal} />
                        <CardItem
                            text="Typography"
                            to={routes.samples.typography}
                        />
                    </Row>
                </SectionBlock>
            </FlexibleSection>
        </>
    );
};

export default ComponentsSection;
