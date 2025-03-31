import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
  // Access page parameters
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = 10; // Number of items per page
  const sort = url.searchParams.get('sort') || ''
  const search = url.searchParams.get('q') || ''
  return {
    categories: client.request(
      readItems('category', {
        fields: ['*']
      })
    ),
    pagination: {
      page,
      pageSize,
      sort,
      search
    }
  };
};
