/**
 * @file index.tsx
 * @description Components section.
 */

'use strict';
import { FunctionComponent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { globalContext } from '../../Context/Global';
import routes from '../../../configs/routes';

import { FlexibleSection } from '../../Content/components/GridSection';
import {
    SectionTitle,
    SectionSubtitle,
    SectionBlock,
} from '../../Content/components/GridSection/components';
import { Row, Column } from '../../GridSystem';
import { Code } from '../../Icons/Code';

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
    icon?: (...args: any[]) => any;
}> = function ({ text, to, icon }) {
    const navigate = useNavigate();

    const Icon = icon || Code;

    return (
        <Column className={`c-12 m-4 l-3`}>
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
    const { theme } = useContext(globalContext);

    return (
        <>
            <FlexibleSection
                className={`${styles['components-section']} ${theme}`}
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '50px',
                    textAlign: 'center',
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
