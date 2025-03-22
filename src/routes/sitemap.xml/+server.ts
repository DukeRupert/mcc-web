import client from '$lib/directus/client';
import { readItems } from '@directus/sdk';
import type { RequestHandler } from '@sveltejs/kit';

// Helper function to format date for sitemap
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Current date for static pages
const currentDate = formatDate(new Date());

export const GET: RequestHandler = async () => {
  try {
    // Fetch all posts
    const posts = await client.request(readItems('post', {
      fields: ['slug', 'date_updated'],
    }));

    // Fetch all creators
    const creators = await client.request(readItems('creator', {
      fields: ['slug', 'date_updated'],
    }));

    // Fetch all categories
    const categories = await client.request(readItems('category', {
      fields: ['slug'],
    }));

    // Create XML content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static routes -->
  <url>
    <loc>https://manifoldcollective.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://manifoldcollective.com/about-us</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://manifoldcollective.com/posts</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://manifoldcollective.com/creators</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://manifoldcollective.com/categories</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Dynamic post routes -->
  ${posts.map(post => `
  <url>
    <loc>https://manifoldcollective.com/posts/${post.slug}</loc>
    <lastmod>${formatDate(new Date(post.date_updated || new Date()))}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}

  <!-- Dynamic creator routes -->
  ${creators.map(creator => `
  <url>
    <loc>https://manifoldcollective.com/creators/${creator.slug}</loc>
    <lastmod>${formatDate(new Date(creator.date_updated || new Date()))}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}

  <!-- Dynamic category routes -->
  ${categories.map(category => `
  <url>
    <loc>https://manifoldcollective.com/categories/${category.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

    // Return the XML with appropriate content type
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
};
