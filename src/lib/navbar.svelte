<script lang="ts">
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import type { SlideParams } from 'svelte/transition';
	import { sineIn } from 'svelte/easing';

	const slideParams: SlideParams = { delay: 150, duration: 250, easing: sineIn };
	let activeUrl = $derived(page.url.pathname);
</script>

<div>
	<Navbar>
		<NavBrand href="/">
			<img
				src="/logo/MANIFOLD_LIGHT.png"
				class="me-3 block h-6 sm:h-9 dark:hidden"
				alt="Manifold Creator Collective logo"
			/>
			<img src="/logo/MANIFOLD_DARK.png" class="me-3 hidden h-6 sm:h-9 dark:block" alt="" />
			<span class="sr-only">Manifold Creator Collective</span>
		</NavBrand>
		<div class="flex gap-2">
			<NavHamburger />
		</div>
		<NavUl
			{activeUrl}
			{slideParams}
			ulClass="flex flex-col p-2 mt-2 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium md:items-center"
		>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/creators">Creators</NavLi>
			<NavLi href="/about-us">About us</NavLi>
			<NavLi><DarkMode /></NavLi>
		</NavUl>
	</Navbar>
</div>
