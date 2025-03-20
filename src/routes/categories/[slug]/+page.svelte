<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let { slug, posts } = data;
</script>

<h1>{slug}</h1>
{#each posts as post}
	<h2>{post.title}</h2>
{/each}
