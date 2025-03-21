import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ }) => {
  const tags = await client.request(readItems('tag', {
    fields: ['*'],
    limit: 50
  }))
  return {
    tags
  };
};
