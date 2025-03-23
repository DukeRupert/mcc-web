import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { aggregate, readItems } from '@directus/sdk';

export const load: PageServerLoad = async ({ url }) => {
  // Access page parameters
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = 10; // Number of items per page

  const posts = await client.request(readItems('post', {
    limit: pageSize,
    page: page,
    fields: ['*', { creator_id: ['title', 'slug', { avatar: ['id', 'height', 'width'] }] }, { image: ['id', 'width', 'height',] }, { category_id: ['*'] }],

  }))

  const totalCount = await client.request(aggregate('post', {
    aggregate: { count: '*' }
  }))

  let total = totalCount[0].count


  return {
    posts,
    pagination: {
      currentPage: page,
      pageSize,
      totalCount: Number(total),
      route: url.pathname
    }
  };
};
