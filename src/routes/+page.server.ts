import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { aggregate, readItems, type AggregationOutput, type ReadItemOutput } from '@directus/sdk';
import type { Schema, Post } from '$lib/directus/types'

export const load: PageServerLoad = async ({ url }) => {
  // Access page parameters
  const page = parseInt(url.searchParams.get('page') || '1');
  const pageSize = 10; // Number of items per page
  const sort = url.searchParams.get('sort') || ''
  const search = url.searchParams.get('q') || ''

  let posts: Post[];
  let totalCount: AggregationOutput<Schema, 'post', {
    aggregate: { count: '*' },
    filter: { search: string }
  }>;
  if (search) {
    posts = await client.request(readItems('post', {
      search: search,
      limit: pageSize,
      page: page,
      fields: ['*', { creator_id: ['title', 'slug', { avatar: ['id', 'height', 'width'] }] }, { image: ['id', 'width', 'height',] }, { category_id: ['*'] }],
      sort: ['-date_created']
    }))
    totalCount = await client.request(aggregate('post', {
      aggregate: { count: '*' },
      filter: { search: search }
    }))
  } else {
    posts = await client.request(readItems('post', {
      limit: pageSize,
      page: page,
      fields: ['*', { creator_id: ['title', 'slug', { avatar: ['id', 'height', 'width'] }] }, { image: ['id', 'width', 'height',] }, { category_id: ['*'] }],
      sort: ['sort', '-date_created']
    }))
    totalCount = await client.request(aggregate('post', {
      aggregate: { count: '*' }
    }))
  }

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
