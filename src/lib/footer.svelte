<script lang="ts">
	import { A } from 'flowbite-svelte';
	import type { SocialLink } from '$lib';
	interface Props {
		companyName: string,
		socialLinks: SocialLink[]
	}

	let { companyName, socialLinks }: Props = $props()

	// Current year using JavaScript
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-white dark:bg-gray-900 relative z-50">
	<div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
		<div class="flex justify-center gap-x-6 md:order-2">
			{#each socialLinks as social}
				<A
					href={social.url}
					class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-primary-100 hover:text-primary-600"
				>
					<span class="sr-only">{social.name}</span>
					<img class="size-6" src={social.icon} alt={social.name} />
				</A>
			{/each}
		</div>
		<p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
			&copy; {currentYear}
			{companyName}, Inc. All rights reserved.
		</p>
	</div>
</footer>
