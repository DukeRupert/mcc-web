import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ }) => {
  const posts = await client.request(readItems('post', {
    fields: ['*', { avatar: ['*'] }],
    limit: 20
  }))
  return {
    posts
  };
};
