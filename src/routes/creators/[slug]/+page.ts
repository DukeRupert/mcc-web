import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItem } from '@directus/sdk';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  let slug = params.slug
  let id = parseInt(slug || '0')
  if (!id || id < 1) {
    redirect(300, '/creators')
  }
  const creator = await client.request(readItem('creator', id, {
    fields: ['*', { avatar: ['id', 'width', 'height']}, { projects: ['*'] }]
  }))
  return {
    creator
  };
};
