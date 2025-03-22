<script lang="ts">
	import { A, Badge, Button, Card } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import Image from '$lib/directus/image.svelte';
	import type { Creator } from '$lib/directus/types';
	interface Props {
		creator: Creator;
	}
	let { creator }: Props = $props();
</script>

<article id="creator-card" class="mx-auto w-full max-w-lg space-y-4">
	<Card size="xl">
		<div class="flex flex-col items-center pb-4">
			{#if creator.avatar}
				<Image
					id={creator.avatar.id}
					alt={creator.title}
					height={150}
					width={150}
					className="w-full rounded-t-md object-cover object-center max-h-[400px]"
					type="avatar"
				/>
			{/if}
			<div class="max-w-full p-4">
				<h5
					id="creator-title"
					class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{creator.title}
				</h5>
				{#if creator.skills && creator.skills.length > 0}
					<div id="creator-skills" class="my-4 flex flex-wrap gap-2">
						{#each creator.skills as skill}
							<Badge>
								{skill}
							</Badge>
						{/each}
					</div>
				{/if}
				{#if creator.bio}
					<p class="mt-1 mb-3 text-gray-600 dark:text-gray-300">
						{creator.bio}
					</p>
				{/if}
				<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
					<A href={`/creators/${creator.slug}`}>
						Learn more <ArrowRightOutline class="text-primary ms-2 h-6 w-6" />
					</A>
				</div>
			</div>
		</div>
	</Card>
</article>
