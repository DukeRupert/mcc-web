<script lang="ts">
	import { Card, Button, Avatar } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import type { Post } from '$lib/directus/types';
	import Image from '$lib/directus/image.svelte';
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
	let { creator_id: creator } = post;
</script>

<div class="w-full space-y-4">
	<Card size="lg" padding="none">
		{#if post.image && typeof post.image !== 'string'}
			<Image
				id={post.image.id}
				width={post.image.width}
				height={post.image.height}
				className="rounded-t-md"
			/>
		{/if}
		<div class="p-4">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{post.title}
			</h5>
			<div class="flex justify-between">
				{#if creator && creator.avatar}
					<figure class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
						<Image
							className="h-9 w-9 rounded-full"
							id={creator.avatar.id}
							alt={creator.title}
							height={creator.avatar.height}
							width={creator.avatar.width}
              key='avatar'
						/>
						<figcaption class="space-y-0.5 text-left font-medium dark:text-white">
							<div>{creator.title}</div>
						</figcaption>
					</figure>
				{/if}
				<Button>
					Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
				</Button>
			</div>
		</div>
	</Card>
</div>
