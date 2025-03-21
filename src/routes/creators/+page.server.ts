import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ }) => {
  const creators = await client.request(readItems('creator', {
    fields: ['*', { avatar: ['*'] }],
  }))
  return {
    creators
  };
};
