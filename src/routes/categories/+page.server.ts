import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ }) => {
  console.log('load() running:')
  const categories = await client.request(readItems('category', {
    fields: ['*'],
  }))
  console.log(categories)
  return {
    categories
  };
};
