import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Check if the request is for an image
  if (event.url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i)) {
    // Set cache control headers for images
    response.headers.set('Cache-Control', 'public, max-age=604800, immutable');
  }

  return response;
};
