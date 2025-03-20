<script lang="ts">
	import '../app.css';
	import type { SocialLink } from '$lib';
	import Navbar from '$lib/navbar.svelte';
	import LeftSidebar from '$lib/page/left-sidebar.svelte';
	import RightSidebar from '$lib/page/right-sidebar.svelte';
	import Footer from '$lib/footer.svelte';
	let { children } = $props();

	// Company information
	const companyName = 'Manifold Creative Collective';

	// Social media links - each with url, name, and SVG path
	const socialLinks: SocialLink[] = [
		{
			name: 'GitHub',
			url: 'https://github.com/dukeRupert/mcc-web',
			icon: '/icons/brand-github.svg'
		}
	];

	/* Left Sidebar animation variables*/
	// Track scroll position
	let y = $state(0);
	// Bind to window scroll event
	let innerHeight = $state(0);
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />
<Navbar/>
<main class="flex min-h-screen w-full bg-white dark:bg-gray-700">
	<LeftSidebar {socialLinks} {y} {innerHeight} />

	<!-- Part 2: Middle section, takes remaining space, always visible -->
	<div class="flex-1 px-2 pt-6 pb-18 md:ml-[25%] md:px-4 lg:mr-[20%] lg:px-6">
		{@render children()}
	</div>

	<RightSidebar />
</main>
<Footer {companyName} {socialLinks} />
