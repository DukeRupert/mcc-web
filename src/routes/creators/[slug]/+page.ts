import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  let slug = params.slug
  
  let creators = await client.request(readItems('creator', {
    filter: {
      slug: {
        _eq: slug
      }
    },
    fields: ['*', { avatar: ['id', 'width', 'height'] }, { projects: ['*'] }]
  }))
  let creator = creators[0]
  return {
    creator
  };
};
