import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ }) => {
  const categories = await client.request(readItems('category', {
    fields: ['*'],
  }))
  return {
    categories
  };
};