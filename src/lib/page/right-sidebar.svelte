<script lang="ts">
	import type { Category } from '$lib/directus/types';
	import { Badge, Card, Heading, P, A } from 'flowbite-svelte';
	interface Props {
		categories: Promise<Category[]>;
	}
	let { categories: data }: Props = $props();
</script>

<!-- Part 3: Only visible on large screens, max 15% width -->
<div class="fixed top-18 right-0 hidden h-[calc(100vh-72px)] overflow-y-auto lg:block lg:w-[20%]">
	<div class="md:p4 p-2">
		<Card padding="md" class="mx-auto mt-2">
			<div class="p-2">
				<Heading tag="h4">Categories</Heading>
				<div id="categories" class="mt-4 flex flex-wrap gap-4">
					{#await data then categories}
						{#each categories as c}
							<a href={`/categories/${c.slug}`}>
								<Badge id={`category-${c.slug}`} large color="primary">{c.title}</Badge>
							</a>
						{/each}
					{/await}
				</div>
			</div>
		</Card>
	</div>
</div>
