<script lang="ts">
	import type { PageProps } from './$types';
	import { Heading, A, P } from 'flowbite-svelte';
	import Breadcrumbs from '$lib/page/breadcrumbs.svelte';
	import List from '$lib/post/list.svelte';
	let props: PageProps = $props();
	let slug = $derived(props.data.slug)
	let posts = $derived(props.data.posts)
</script>

<Breadcrumbs />
<Heading tag="h1" class="mt-4 capitalize">{slug}</Heading>
{#if posts && posts.length > 0}
	<div id="posts" class="mt-8">
		<List {posts} />
	</div>
{:else}
	<div class="mt-6 p-8">
		<P>Uh, no posts were found matching your query.</P>
		<A href="/">Return home</A>
	</div>
{/if}
