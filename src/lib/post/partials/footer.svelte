<script lang="ts">
	import type { Post } from '$lib/directus/types/index';
	import { formatDate } from '$lib/post/utils';
	import { Badge, P } from 'flowbite-svelte';
	import CreatorCard from '$lib/creator/card.svelte';
	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
</script>

<!-- Post Footer -->
<footer class="mt-12 border-t border-gray-200 pt-6">
	<!-- Last Updated Info -->
	{#if post.date_updated && post.date_updated !== post.date_created}
		<P class="mb-6 text-sm">
			Last updated on {formatDate(post.date_updated)}
		</P>
	{/if}

	<!-- Tags (bigger view at bottom) -->
	{#if post.tags && post.tags.length > 0}
		<div class="mb-8">
			<h3 class="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-200">Tags</h3>
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
					<a href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
						<Badge large>#{tag}</Badge>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Author Box (larger) -->
	{#if post.creator_id}
		<CreatorCard creator={post.creator_id} />
	{/if}
</footer>
