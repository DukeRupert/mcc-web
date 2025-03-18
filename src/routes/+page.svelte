<script lang="ts">
	import List from '$lib/post/list.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { posts } = data;
</script>

<div class="p-8">
	<List {posts} />
</div>
