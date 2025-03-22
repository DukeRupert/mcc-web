<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import type { SocialLink } from '$lib';
	import Navbar from '$lib/navbar.svelte';
	import LeftSidebar from '$lib/page/left-sidebar.svelte';
	import RightSidebar from '$lib/page/right-sidebar.svelte';
	import Footer from '$lib/footer.svelte';
	let { data, children }: LayoutProps = $props();
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

<svelte:head
	><script
		defer
		data-domain="manifoldcollective.com"
		src="https://plausible.angmar.dev/js/script.js"
	></script>
</svelte:head>
<svelte:window bind:scrollY={y} bind:innerHeight />
<Navbar />
<main class="flex min-h-screen w-full bg-slate-50 dark:bg-gray-900">
	<LeftSidebar {socialLinks} {y} {innerHeight} />

	<!-- Part 2: Middle section, takes remaining space, always visible -->
	<div class="flex-1 px-2 pt-4 pb-18 md:ml-[25%] md:px-4 lg:mr-[20%] lg:px-6">
		{@render children()}
	</div>

	<RightSidebar categories={data.categories} />
</main>
<Footer {companyName} {socialLinks} />
