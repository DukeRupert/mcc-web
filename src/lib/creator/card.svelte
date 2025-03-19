<script lang="ts">
	import { Badge, Button, Card } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import Image from '$lib/directus/image.svelte';
	import type { Creator } from '$lib/directus/types';
	interface Props {
		creator: Creator;
	}
	let { creator }: Props = $props();
	$inspect(creator);
</script>

<article id="creator-card" class="w-full space-y-4">
	<Card size="xl">
		<div class="flex flex-col items-center pb-4">
			{#if creator.avatar}
				<Image
					id={creator.avatar.id}
					alt={creator.title}
					height={creator.avatar.height}
					width={creator.avatar.width}
					className="w-full rounded-t-md object-cover object-center max-h-[400px]"
					type="avatar"
				/>
			{/if}
			<div class="p-4">
				<h5
					id="creator-title"
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
				>
					{creator.title}
				</h5>
				{#if creator.skills && creator.skills.length > 0}
					<div id="creator-skills" class="flex gap-2">
						{#each creator.skills as skill}
							<Badge large>
								{skill}
							</Badge>
						{/each}
					</div>
				{/if}
				<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
					<Button href={`/creators/${creator.slug}`}>
						Learn more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
					</Button>
				</div>
			</div>
		</div>
	</Card>
</article>
