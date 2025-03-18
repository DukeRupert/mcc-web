<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import type { Post } from '$lib/directus/types';
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
</script>

<div class="space-y-4">
	<Card img="/images/image-1.webp">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{post.title}
		</h5>
		<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button>
			Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
		</Button>
	</Card>
</div>
