import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ }) => {
  const categories = await client.request(readItems('category', {
    fields: ['*'],
  }))
  return {
    categories
  };
};
