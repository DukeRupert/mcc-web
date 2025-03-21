<script lang="ts">
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';

	let activeUrl = $derived(page.url.pathname)
</script>

<div>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/logo/logo-full-black.png" class="block dark:hidden me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<img src="/logo/logo-full-trans.png" class="hidden dark:block me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span class="sr-only"
				>Manifold Creator Collective</span
			>
		</NavBrand>
		<div class="flex gap-2">
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {activeUrl} {hidden} ulClass="flex flex-col p-2 mt-2 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium md:items-center">
			<NavLi href="/">Home</NavLi>
			<NavLi href="/creators">Creators</NavLi>
			<NavLi href="/about-us">About us</NavLi>
			<NavLi href="/contact-us">Contact us</NavLi>
			<NavLi><DarkMode /></NavLi>
		</NavUl>
	</Navbar>
</div>
