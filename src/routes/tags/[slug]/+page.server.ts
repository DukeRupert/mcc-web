import type { PageServerLoad } from './$types';
import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
function replaceHyphensWithSpaces(str: string): string {
  // Check if the input is a string
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Replace all hyphens with spaces using the replace method with a regular expression
  return str.replace(/-/g, ' ');
}
export const load: PageServerLoad = async ({ url, params }) => {
  // grab slug and remove hyphens
  let slug = params.slug
  if (slug) slug = replaceHyphensWithSpaces(slug)

  // Hopefully the tag id is passes as an id param
  let id = Number(url.searchParams.get('id'))
  // If not passed, then go look it up
  if (id == 0) {
    console.log('no id found. Executing query')
    let result = await client.request(readItems('tag', {
      filter: {
        title: {
          _eq: slug
        },
      },
      fields: ['*']
    }))
    // Gotta filter down results because Directus is special that way
    if (result && result.length === 1) {
      id = result[0].id
    };
  }

  // Finally, we can lookup posts filtered by matching tag id
  let posts = await client.request(readItems('post', {
    filter: {
      tags: {
        _in: id
      },
    },
    limit: 10,
    fields: ['*', { creator_id: ['*', { avatar: ['id', 'width', 'height'] }] }, { category_id: ['*'] }, { image: ['id', 'width', 'height'] }]
  }))

  return {
    slug,
    posts
  };
};
