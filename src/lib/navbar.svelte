<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	let { children } = $props();
</script>

<div>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/logo/logo-full-trans.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span class="sr-only self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>Manifold Creator Collective</span
			>
		</NavBrand>
		<div class="flex gap-2">
			{@render children()}
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/creators">Creators</NavLi>
			<NavLi href="/about-us">About us</NavLi>
			<NavLi href="/contact-us">Contact us</NavLi>
		</NavUl>
	</Navbar>
</div>
