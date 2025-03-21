<script lang="ts">
	import type { Creator } from '$lib/directus/types';
	import Card from '$lib/creator/card.svelte';
	interface Props {
		creators: Creator[];
	}
	let { creators }: Props = $props();
</script>

<ul role="list" class="mx-auto grid max-w-5xl grid-cols-1 xl:grid-cols-2 gap-6">
	{#each creators as creator}
		<Card {creator} />
	{/each}
</ul>
