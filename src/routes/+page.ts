import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ }) => {
  const posts = await client.request(readItems('post', {
    fields: ['*', { creator_id: ['title', 'slug', { avatar: ['id', 'height', 'width'] }] }, { image: ['id', 'width', 'height',] }, { category_id: ['*'] }],
  }))
  return {
    posts
  };
};
