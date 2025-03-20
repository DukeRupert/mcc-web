<script lang="ts">
    import type { Post } from '$lib/directus/types/index';
    import { formatDate } from '$lib/post/utils';
    import { Badge } from 'flowbite-svelte'
    import CreatorCard from '$lib/creator/card.svelte';
    interface Props {
		post: Post;
	}

	let { post }: Props = $props();
</script>

<!-- Post Footer -->
<footer class="mt-12 pt-6 border-t border-gray-200">
    <!-- Last Updated Info -->
    {#if post.date_updated && post.date_updated !== post.date_created}
      <p class="text-sm text-gray-500 mb-6">
        Last updated on {formatDate(post.date_updated)}
      </p>
    {/if}
    
    <!-- Tags (bigger view at bottom) -->
    {#if post.tags && post.tags.length > 0}
      <div class="mb-8">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">Tags</h3>
        <div class="flex flex-wrap gap-2">
          {#each post.tags as tag}
            <a 
              href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Badge large color="blue">#{tag}</Badge>
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