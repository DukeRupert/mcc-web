<script lang="ts">
	import type { Category } from '$lib/directus/types';
	import { onMount } from 'svelte';
	import { Badge, Card, Heading, P, A } from 'flowbite-svelte';
	import client from '$lib/directus/client';
	import { readItems } from '@directus/sdk';

	// Create a writable store for your posts
	let categories: Category[] = $state([]);
	let loading = $state(true);
	let error: null | unknown = $state(null);
	$inspect(categories);
	$inspect(loading);

	// Use onMount to make API call when component is mounted
	onMount(async () => {
		try {
			loading = true;
			// Make your API request
			categories = await client.request(
				readItems('category', {
					fields: ['*']
				})
			);
		} catch (err) {
			error = err;
			console.error('Error fetching posts:', err);
		} finally {
			loading = false;
		}
	});
</script>

<!-- Part 3: Only visible on large screens, max 15% width -->
<div class="fixed top-18 right-0 hidden h-[calc(100vh-72px)] overflow-y-auto lg:block lg:w-[20%]">
	<div class="md:p4 p-2">
		<Card padding="md" class="mx-auto mt-2">
			<div class="p-2">
				<Heading tag="h4">Categories</Heading>
				<div id="categories" class="mt-4 flex flex-wrap gap-4">
					{#each categories as c}
						<a href={`/categories/${c.slug}`}>
							<Badge id={`category-${c.slug}`} large color="primary">{c.title}</Badge>
						</a>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</div>
