import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ params }) => {
    let slug = params.slug
    let id = Number(slug)

    let ids = await client.request(readItems('post', {
        filter: {
            tags: {
                _in: id
            },
        },
        fields: ['*']
    }))

    return {
        slug,
        posts: ids
    };
};
