<script lang="ts">
	import type { Post } from '$lib/directus/types/index';
	import { onMount } from 'svelte';
	import { formatDate, getReadTime } from '$lib/post/utils';
	import { A, Avatar, Badge } from 'flowbite-svelte';
	interface Props {
		post: Post;
	}

	let { post }: Props = $props();
	let readTime = $state(0);

	onMount(() => {
		if (post.body) {
			readTime = getReadTime(post.body);
		}
	});
</script>

<!-- Article Header -->
<header id="post-details">
	<!-- Category -->
	{#if post.category_id}
		<a href={`/category/${post.category_id.slug}`}>
			<Badge id={`category-${post.category_id}`} large color="primary"
				>{post.category_id.title}</Badge
			>
		</a>
	{/if}

	<!-- Title -->
	<div id="post-title" class="block">
        <A href={`/posts/${post.slug}`}>
            <h1 id="post-title" class="my-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-50">
                {post.title}
            </h1>
        </A>
    </div>

	<!-- Creator -->
	{#if post.creator_id}
		<div id="post-creator" class="mb-2 flex items-center">
			<A href={`/creators/${post.creator_id.slug}`} class="group flex items-center">
				{#if post.creator_id.avatar}
					<Avatar
						src={`https://content.manifoldcollective.com/assets/${post.creator_id.avatar.id}`}
					/>
				{/if}
				<div class="ml-2">
					<span
						class="text-sm font-medium text-gray-800 dark:text-gray-100"
					>
						{post.creator_id.title}
					</span>
				</div>
			</A>
		</div>
	{/if}

	<!-- Post Meta - Date, Read Time -->
	<div
		id="post-meta"
		class="flex flex-wrap justify-between gap-4 text-sm text-gray-600 dark:text-gray-400"
	>
		{#if post.date || post.date_created}
			<time class="flex items-center gap-1" datetime={post.date || post.date_created}>
				<svg
					class="mr-1 inline-block h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path>
				</svg>
				{formatDate(post.date || post.date_created)}
			</time>
		{/if}

		{#if readTime}
			<span class="flex items-center gap-1">
				<svg
					class="mr-1 inline-block h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
				{readTime} min read
			</span>
		{/if}
	</div>
</header>
