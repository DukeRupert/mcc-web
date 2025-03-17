import type { PageLoad } from './$types';
import client from '$lib/directus';
import { readCollection, readCollections, readItems } from '@directus/sdk';

export const load: PageLoad = async ({}) => {
    const posts = await client.request(readItems('post', {
        fields: ['*', { image: ['*'] }, ],
    }))
	return {
        posts
	};
};