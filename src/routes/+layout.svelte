<script lang="ts">
	import '../app.css';
	import type { SocialLink } from '$lib';
	import { Card, Avatar, P, A } from 'flowbite-svelte';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import { DarkMode } from 'flowbite-svelte';
	let { children } = $props();

	// Company information
	const companyName = 'Manifold Creative Collective';

	// Social media links - each with url, name, and SVG path
	const socialLinks: SocialLink[] = [
		{
			name: 'GitHub',
			url: 'https://github.com/dukeRupert/mcc-web',
			icon: '/icons/brand-github.svg'
		},
	];
</script>

<Navbar><DarkMode /></Navbar>
<main class="flex min-h-screen w-full bg-white dark:bg-gray-700">
	<!-- Part 1: Hidden on small screens, max 25% width -->
	<div class="fixed top-18 left-0 hidden h-[calc(100vh-72px)] overflow-y-auto md:block md:w-1/4">
		<Card padding="md" class="mx-auto mt-2">
			<div class="flex flex-col items-center pb-4">
				<Avatar size="lg" src="/logo/Avatar.png" />
				<div class="mt-4 flex space-x-3 lg:mt-6">
					<P
						>The Manifold Creator Collective (MCC) connects TTRPG designers creating content for
						Draw Steel and other tabletop games. We showcase original work, facilitate playtesting,
						offer design services, and share resources. Join The Manifold and help shape tabletop
						gaming's future.</P
					>
				</div>
				<div class="mt-6 flex flex-wrap justify-center gap-x-6 md:order-2">
					{#each socialLinks as social}
						<A
							href={social.url}
							class="hover:bg-primary-100 hover:text-primary-600 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200"
						>
							<span class="sr-only">{social.name}</span>
							<img class="size-6" src={social.icon} alt={social.name} />
						</A>
					{/each}
				</div>
			</div>
		</Card>
	</div>

	<!-- Part 2: Middle section, takes remaining space, always visible -->
	<div class="flex-1 px-2 pt-6 md:ml-[25%] md:px-4 lg:mr-[20%] lg:px-6">
		{@render children()}
	</div>

	<!-- Part 3: Only visible on large screens, max 15% width -->
	<div class="fixed top-18 right-0 hidden h-[calc(100vh-72px)] overflow-y-auto lg:block lg:w-[20%]">
		<div class="p-2">Part 3 content</div>
	</div>
</main>
<Footer {companyName} {socialLinks} />
