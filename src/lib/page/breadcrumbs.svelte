<script lang="ts">
	import { page } from '$app/state';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

    interface Breadcrumb {
  label: string;
  url: string;
}
	/**
 * Generates breadcrumb objects with label and URL from a route object and slug
 * 
 * @param {Object} route - The route object containing the path pattern
 * @param {string} slug - The slug to replace [slug] in the route pattern
 * @returns {Breadcrumb[]} Array of breadcrumb objects with label and URL
 */
function generateBreadcrumbs(route: { id: string | null }, slug: string): Breadcrumb[] {
  // Handle empty or undefined inputs
  if (!route || !route.id) {
    return [{ label: 'Home', url: '/' }];
  }
  
  // Replace [slug] in the route with the actual slug
  const fullPath = route.id.replace('[slug]', slug);
  
  // Split the path by "/" and filter out empty segments
  const segments = fullPath.split('/').filter(segment => segment.length > 0);
  
  // Create the breadcrumb array starting with home
  const breadcrumbs: Breadcrumb[] = [{ label: 'Home', url: '/' }];
  
  // Build cumulative paths for each segment
  let currentPath = '';
  for (let i = 0; i < segments.length; i++) {
    currentPath += '/' + segments[i];
    
    // Format the label by capitalizing and replacing hyphens with spaces
    const label = segments[i]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({ 
      label: label,
      url: currentPath 
    });
  }
  
  return breadcrumbs;
}

	let crumbs = $derived(generateBreadcrumbs(page.route, page.params.slug));
	$inspect(crumbs);
</script>

<Breadcrumb aria-label="nav-breadcrumbs">
	{#each crumbs as crumb}
		<BreadcrumbItem href={crumb.url} home={crumb.url === '/'}>{crumb.label}</BreadcrumbItem>
	{/each}
</Breadcrumb>
