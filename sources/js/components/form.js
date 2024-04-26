/**
 * @file form.js
 * @description Form components.
 */

'use strict';

/**
 * The form group component.
 * @param {Object} props Component properties.
 * @param {String} props.id The form group id (optional)
 * @param {*} props.children The form child components (optional)
 * @param {String} props.formMessage The form group message (optional)
 * @returns Returns the component.
 */
export function FormGroup({ id, children, formMessage }) {
    return (
        <div
            id={id}
            className="form-group"
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                rowGap: '4px',
            }}
        >
            {children}
            <span
                className="form-message"
                style={{ color: 'var(--color-red)', textAlign: 'left' }}
            >
                {formMessage}
            </span>
        </div>
    );
}
