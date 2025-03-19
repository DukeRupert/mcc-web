import type { PageLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';

export const load: PageLoad = async ({ params }) => {
  let slug = params.slug
  
  let posts = await client.request(readItems('post', {
    filter: {
      slug: {
        _eq: slug
      }
    },
    fields: ['*', { creator_id: ['*', { avatar: ['id', 'width', 'height'] }] }, { category_id: ['*'] }, { image: [ 'id', 'width', 'height']}]
  }))
  let post = posts[0]
  return {
    post
  };
};

