/**
 * @file index.js
 * @description The brand text component.
 */
import { Link } from 'react-router-dom';
import * as styles from './BrandText.module.css';

/**
 * The header brand text component.
 * @returns Returns the header brand text component.
 */
function BrandText() {
    return (
        <Link className={styles['header-brand-text']} to="/">
            <div>
                <h1>Boilerplate Project</h1>
            </div>
        </Link>
    );
}

export default BrandText;
