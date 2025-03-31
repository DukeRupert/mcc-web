import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ params }) => {
    let slug = params.slug

    let posts = await client.request(readItems('post', {
        filter: {
            category_id: {
                slug: {
                    _eq: slug
                }
            }
        },
        fields: ['*', { creator_id: ['title', 'slug', { avatar: ['id', 'height', 'width'] }] }, { image: ['id', 'width', 'height',] }, { category_id: ['*'] }],
        sort: ['-date_created']
    }))

    return {
        slug,
        posts
    };
};
