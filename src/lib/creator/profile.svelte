<script lang="ts">
	import { Badge, Button, Card, Heading, Hr, P, A } from 'flowbite-svelte';
	import Image from '$lib/directus/image.svelte';
	import Socials from '$lib/creator/partials/socials.svelte';
	import Status from '$lib/creator/partials/status.svelte';
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
</script>

<div id="creator-profile" class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
	<!-- Creator Header Section -->
	<section
		id="creator-info"
		class="mb-12 flex flex-col items-center gap-6 md:flex-row md:items-start"
	>
		<!-- Avatar -->
		<div id="creator-avatar" class="flex-shrink-0">
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
		<div id="creator-details" class="flex-1 text-center md:text-left">
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
				<div
					id="creator-skills"
					class="flex flex-row flex-wrap justify-center gap-2 md:justify-start"
				>
					{#each creator.skills as skill}
						<Badge large>
							{skill}
						</Badge>
					{/each}
				</div>
			{/if}
		</div>
	</section>
</div>

<!-- About Section -->
{#if creator.body}
	<section id="about-creator" class="mb-12">
		<Heading tag="h2">About</Heading>
		<Hr class="mb-6"/>
		<div class="prose dark:prose-invert lg:prose-lg max-w-none">
			{@html creator.body}
		</div>
	</section>
{/if}

<!-- Projects Section -->
{#if creator.projects && creator.projects.length > 0}
	<section id="projects" class="mb-12">
		<Heading tag="h2" class="mb-6">Projects</Heading>
		<Hr classHr="my-8" />
		<!-- Featured Projects -->
		<div id="featured-projects">
			<ul role="list" class="grid grid-cols-1 gap-6 xl:grid-cols-2">
				{#each creator.projects as project}
					{#if project.featured}
						<article id={`project-${project.id}`} class="w-full rounded-md">
							<!-- Flowbite Card Component -->
							<Card padding="md" size="xl" class="h-full border-primary-600">
								<Heading tag="h3" class="mb-2 font-bold tracking-tight">
									{project.title}
								</Heading>
								<P>{project.description}</P>
								<div class="mt-auto flex justify-between space-x-3 rtl:space-x-reverse">
									<div id="status-tags">
										<Badge large>Featured</Badge>
										<Status status={project.status} />
									</div>
									<A href={project.url} target="_blank" rel="noopener noreferrer">View project</A>
								</div>
							</Card>
						</article>
					{/if}
				{/each}
			</ul>
		</div>
		<!-- Other Projects -->
		<div
			id="other-projects"
			class="mt-6 overflow-hidden bg-white shadow-sm sm:rounded-md dark:bg-gray-700"
		>
			<ul role="list" class="divide-y divide-gray-200">
				{#each creator.projects as project}
					{#if !project.featured}
						<li>
							<article id={`project-${project.id}`} class="rounded-md">
								<Card padding="md" size="xl">
									<Heading tag="h3" class="mb-2">{project.title}</Heading>
									<P>{project.description}</P>
									<div class="mt-4 flex justify-between">
										<Status status={project.status} />
										<A href={project.url}>View project</A>
									</div>
								</Card>
							</article>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</section>
{/if}

<div class="my-8 flex w-full justify-center gap-4 text-gray-600 md:my-12 dark:text-gray-300">
	<Button outline href="/">Return home</Button>
	<Button href="/creators">View Creators</Button>
</div>

<!-- Footer -->
<div
	class="border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400"
>
	<p>Member since {formatDate(creator.date_created)}</p>
	{#if creator.date_updated}
		<p>Last updated: {formatDate(creator.date_updated)}</p>
	{/if}
</div>
