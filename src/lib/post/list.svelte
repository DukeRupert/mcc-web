<script lang="ts">
	import type { Post } from '$lib/directus/types';
	import Card from './card.svelte';
	interface Props {
		posts: Post[];
	}
	let { posts }: Props = $props();
</script>

<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each posts as post}
		<Card {post} />
	{/each}
</ul>
