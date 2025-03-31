<script lang="ts">
	import { Pagination, PaginationItem } from 'flowbite-svelte';
	interface Props {
		total: number;
		pagination: {
			page: number;
			pageSize: number;
			sort: string;
			search: string;
		};
	}

	let props: Props = $props();

	let pages = [
		{ name: 1, href: '/components/pagination?page=1' },
		{ name: 2, href: '/components/pagination?page=2' },
		{ name: 3, href: '/components/pagination?page=3' },
		{ name: 4, href: '/components/pagination?page=4' },
		{ name: 5, href: '/components/pagination?page=5' }
	];

	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
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

<div class="flex justify-center p-4 mt-6 mx-auto">
    <Pagination {pages} large on:previous={previous} on:next={next} />
</div>
