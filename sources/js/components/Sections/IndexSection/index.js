/**
 * @file index.js
 * @description Index section.
 */

'use strict';
import { useLoaderData } from 'react-router-dom';

import apis from '../../../../apis';
import configs from '../../../../configs';

import { showToast } from '../../ToastOverlay';
import ContentSection from '../../Content/components/ContentSection';

/**
 * Index section component loader.
 * @returns Returns the posts data.
 */
async function loader() {
    if (process.env.NODE_ENV !== 'development') return { posts: null };

    // Test code:
    try {
        let result = await apis.jsonServer.get(configs.jsdbEndpoints.posts);
        showToast('Success', 'Successfully fetched the posts data.', 'success');
        return { posts: result };
    } catch (error) {
        const error_message = `Cannot connect to the json-server database.${error ? ` (${error})` : ''}`;
        console.error(error_message);
        showToast('Error', error_message, 'error');
        return { posts: null };
    }
}

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    const { posts } = useLoaderData();

    return (
        <>
            <ContentSection
                flexCenter
                textCenter
                fixedHeight
                sectionStyle={{ height: '300px' }}
            >
                <h1>Fixed Height Section</h1>
                <p>This content section has a fixed height of 300 pixels.</p>
            </ContentSection>

            <ContentSection flexCenter textCenter topBorder>
                <h1>Default Section</h1>
                <p>This content section's height is automatically scaled.</p>
            </ContentSection>

            {posts &&
                posts.map((element) => {
                    return (
                        <ContentSection
                            key={element.id}
                            flexCenter
                            textCenter
                            topBorder
                        >
                            <h1>{element.title}</h1>
                            <p>{element.text}</p>
                        </ContentSection>
                    );
                })}
        </>
    );
}

export default IndexSection;
export { loader };
