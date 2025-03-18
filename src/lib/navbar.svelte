<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	/* Example menu for Megamenu component
  let menu = [
	 name: 'About us', href: '/about' },
	];
  */
</script>

<div>
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/logo/logo-full-black.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span class="sr-only self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>Manifold Creator Collective</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/creators">Creators</NavLi>
			<NavLi href="/about-us">About us</NavLi>
			<NavLi href="/contact-us">Contact us</NavLi>
		</NavUl>
	</Navbar>
</div>
