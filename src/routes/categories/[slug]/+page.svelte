<script lang="ts">
	import type { PageProps } from './$types';
    import { Heading } from 'flowbite-svelte'
    import Breadcrumbs from '$lib/page/breadcrumbs.svelte';
    import List from '$lib/post/list.svelte'
	let { data }: PageProps = $props();
	let { slug, posts } = data;
</script>

<Breadcrumbs />
<Heading tag="h1" class="capitalize mt-4">{slug}</Heading>
<div id="posts" class="mt-8">
    <List {posts} />
</div>
