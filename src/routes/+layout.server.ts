import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  return {
    categories: client.request(
      readItems('category', {
        fields: ['*']
      })
    ),
  };
};
