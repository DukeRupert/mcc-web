<script lang="ts">
	import { page } from '$app/state';
	import { Head, SchemaOrg } from 'svead';
	import type { SeoConfig, SchemaOrgProps } from 'svead';
	import { Pagination, PaginationItem } from 'flowbite-svelte';
	import Search from '$lib/page/search.svelte';
	import List from '$lib/post/list.svelte';
	import type { PageProps } from './$types';
	let p: PageProps = $props();
	let posts = $derived(p.data.posts)
	let pg = $derived(p.data.pagination)
	let pages = $derived(generatePagination(pg.currentPage, pg.pageSize, pg.totalCount, pg.route));
	const title = 'The Manifold | TTRPG Design Collective for Draw Steel & Tabletop RPGs | MCC';
	const description = `The Manifold Creator Collective (MCC) unites passionate TTRPG designers developing content for Draw Steel and diverse tabletop roleplaying games. Our community showcases original creations, facilitates playtesting, offers professional design services, and shares expert resources. From established designers to newcomers, MCC provides tools, collaboration opportunities, and industry connections to advance your TTRPG projects. Join The Manifold and shape the future of tabletop gaming through our collaborative design community.`;
	const url = page.url.href;

	const seo_config: SeoConfig = {
		title: title,
		description: description,
		url: url
	};

	const schema_org: SchemaOrgProps['schema'] = {
		'@type': 'WebPage',
		name: title,
		description: description,
		url: url
	};

	/**
	 * Generate pagination controls
	 * @param currentPage Current page number (1-based)
	 * @param pageSize Number of items per page
	 * @param totalItems Total number of items
	 * @param route Base route for pagination links (e.g., '/posts')
	 * @returns Array of pagination objects with name, href, and active status
	 */
	export function generatePagination(
		currentPage: number,
		pageSize: number,
		totalItems: number,
		route: string
	): Array<{ name: string | number; href: string; active: boolean }> {
		// Calculate total pages
		const totalPages = Math.ceil(totalItems / pageSize);

		// Handle edge cases
		if (totalPages <= 1) {
			return [];
		}

		// Ensure currentPage is within valid range
		currentPage = Math.max(1, Math.min(currentPage, totalPages));

		const paginationItems: Array<{ name: string | number; href: string; active: boolean }> = [];

		// Function to create a pagination item
		const createItem = (pageNum: number | string, label?: string | number) => {
			// For number pages, pageNum is used as both the page number and label unless label is provided
			const name = label !== undefined ? label : pageNum;

			// If pageNum is a string (like 'previous' or 'next'), we need special handling
			const pageQueryParam = typeof pageNum === 'number' ? `page=${pageNum}` : '';

			// Build the href
			let href = route;
			if (!href.includes('?')) {
				href += pageQueryParam ? `?${pageQueryParam}` : '';
			} else {
				href += pageQueryParam ? `&${pageQueryParam}` : '';
			}

			// For special cases like "previous" or "next", we provide the appropriate href
			if (pageNum === 'previous') {
				href = route;
				if (!href.includes('?')) {
					href += `?page=${currentPage - 1}`;
				} else {
					href += `&page=${currentPage - 1}`;
				}
			} else if (pageNum === 'next') {
				href = route;
				if (!href.includes('?')) {
					href += `?page=${currentPage + 1}`;
				} else {
					href += `&page=${currentPage + 1}`;
				}
			}

			return {
				name,
				href,
				active: typeof pageNum === 'number' && pageNum === currentPage
			};
		};
	}
</script>

<Head {seo_config} />
<SchemaOrg schema={schema_org} />
<Search debounceTime={1500} />
<List {posts} />
