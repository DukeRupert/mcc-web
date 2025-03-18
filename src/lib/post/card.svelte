<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import type { Post } from '$lib/directus/types';
	interface Props {
		post: Post;
	}
	let { post }: Props = $props();
</script>

<div class="w-full space-y-4">
	<Card
		size="lg"
		img="https://images.unsplash.com/photo-1578377375762-cbcc98d68af0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	>
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
