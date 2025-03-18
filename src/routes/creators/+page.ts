import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ }) => {
  const creators = await client.request(readItems('creator', {
    fields: ['*', { avatar: ['*'] }],
  }))
  return {
    creators
  };
};
