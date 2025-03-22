<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import type { Post } from '$lib/directus/types/index';
	import Header from './partials/header.svelte';
	import Image from '$lib/directus/image.svelte';
	import Avatar from '$lib/creator/partials/avatar.svelte';
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
	let { creator_id: creator } = post;
</script>

{#if creator}
	<Card color="primary" size="lg" padding="none">
		{#if post.image && typeof post.image !== 'string'}
			<Image
				id={post.image.id}
				width={post.image.width}
				height={post.image.height}
				className="rounded-t-md"
			/>
		{/if}
		<div class="p-4">
			<Header {post} />
		</div>
	</Card>
{/if}
