/**
 * @file index.tsx
 * @description Select sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import Select from '../../Select';

import * as styles from './SelectSampleSection.module.css';

/**
 * Select sample section.
 * @returns Returns the component.
 */
function SelectSampleSection() {
    return (
        <FlexibleSection
            style={{
                display: 'flex',
                flexFlow: 'columm nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            <div className={styles['content']}>
                <h1>Default Selects</h1>
                <Select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="orange">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="red">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="yellow">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="green">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="blue">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="purple">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>
                <h1 style={{ marginTop: '26px' }}>Disabled Selects</h1>
                <Select disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="orange" disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="red" disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="yellow" disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="green" disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="blue" disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select color="purple" disabled>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>
                <h1 style={{ marginTop: '26px' }}>Sized Selects</h1>
                <Select size="small">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>{' '}
                <Select size="large">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </Select>
            </div>
        </FlexibleSection>
    );
}

export default SelectSampleSection;
