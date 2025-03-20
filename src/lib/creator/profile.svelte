<script lang="ts">
	import { Badge, Button, Card } from 'flowbite-svelte';
	import Image from '$lib/directus/image.svelte';
	import Socials from '$lib/creator/socials.svelte';
	import type { Creator } from '$lib/directus/types';
	interface Props {
		creator: Creator;
	}

	// Props
	let { creator }: Props = $props();

	// Format date helper function
	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Format email to prevent scraping
	function formatEmail(email: string): string {
		return email.replace('@', ' [at] ');
	}
</script>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<!-- Author Header Section -->
	<div class="mb-12 flex flex-col items-center gap-6 md:flex-row md:items-start">
		<!-- Avatar -->
		<div class="flex-shrink-0">
			{#if creator.avatar}
				<Image
					type="avatar"
					id={creator.avatar.id}
					alt={creator.title}
					height={creator.avatar.height}
					width={creator.avatar.width}
					className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md"
				/>
			{:else}
				<div
					class="flex h-32 w-32 items-center justify-center rounded-full bg-orange-600 text-4xl text-white uppercase shadow-md md:h-40 md:w-40"
				>
					{creator.title.charAt(0)}
				</div>
			{/if}
		</div>

		<!-- Author Info -->
		<div class="flex-1 text-center md:text-left">
			<h1 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
				{creator.title}
			</h1>

			{#if creator.bio}
				<p class="mb-6 text-lg text-gray-700 dark:text-gray-200">{creator.bio}</p>
			{/if}

			<!-- Social Links -->
			<Socials {creator} />

			<!-- Skills -->
			{#if creator.skills && creator.skills.length > 0}
				<div id="creator-skills" class="flex flex-row flex-wrap justify-center gap-2 md:justify-start">
					{#each creator.skills as skill}
						<Badge large>
							{skill}
						</Badge>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- About Section -->
	{#if creator.body}
		<div class="mb-12">
			<h2 class="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold text-gray-900">About</h2>
			<div class="prose lg:prose-lg max-w-none text-gray-700">
				{@html creator.body}
			</div>
		</div>
	{/if}

	<!-- Projects Section -->
	{#if creator.projects && creator.projects.length > 0}
		<div class="mb-12">
			<h2
				class="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold text-gray-900 dark:border-gray-700 dark:text-gray-100"
			>
				Projects
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each creator.projects as project}
					<!-- Flowbite Card Component -->
					<Card>
						<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h3>
						<p>{project.description}</p>
						<div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
							<Button
                outline
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
								<svg
									class="ml-2 h-3.5 w-3.5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
							</Button>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	{/if}

  <div class="w-full flex gap-4 justify-center my-8 md:my-12 text-gray-600 dark:text-gray-300">
    <Button outline href="/">Return home</Button>
    <Button href="/creators">View Creators</Button>
  </div>

	<!-- Footer -->
	<div class="border-t border-gray-200 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
		<p>Member since {formatDate(creator.date_created)}</p>
		{#if creator.date_updated}
			<p>Last updated: {formatDate(creator.date_updated)}</p>
		{/if}
	</div>
</div>
