<script lang="ts">
	import type { Post } from '$lib/directus/types';
	import Card from './card.svelte';
	interface Props {
		posts: Post[];
	}
	let { posts }: Props = $props();
</script>

<ul role="list" class="grid grid-cols-1 justify-items-center gap-6">
	{#each posts as post}
		<Card {post} />
	{/each}
</ul>
