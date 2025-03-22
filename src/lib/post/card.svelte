<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { Post } from '$lib/directus/types/index';
	import Header from './partials/header.svelte';
	import Image from '$lib/directus/image.svelte';
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
	let { creator_id: creator } = post;
</script>

{#if creator}
	<Card
		color="primary"
		size="lg"
		padding="none"
		role="article"
		aria-labelledby={`post-title-${post.slug}`}
	>
		{#if post.image && typeof post.image !== 'string'}
			<Image
				id={post.image.id}
				width={800}
				height={450}
				className="rounded-t-md"
				alt={post.image.description || `Featured image for ${post.title}`}
			/>
		{/if}
		<div class="p-4">
			<Header {post} />
		</div>
	</Card>
{/if}
