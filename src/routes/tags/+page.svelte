<script lang="ts">
	import Breadcrumbs from '$lib/page/breadcrumbs.svelte';
	import { Li, List, Heading, A } from 'flowbite-svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { tags } = data;
</script>

<Breadcrumbs />
<Heading tag="h1" class="mt-8 capitalize">Tags</Heading>

<List class="mt-6">
	{#each tags as tag}
		<Li class="my-4 p-2"
			><A class="capitalize" href={`/tags/${tag.title}?id=${tag.id}`}>{tag.title}</A></Li
		>
	{/each}
</List>
