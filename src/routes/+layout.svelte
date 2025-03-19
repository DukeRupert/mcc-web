<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import { DarkMode } from 'flowbite-svelte';
	let { children } = $props();
</script>

<Navbar><DarkMode /></Navbar>
<main class="bg-white dark:bg-gray-800 min-h-screen py-10">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</main>
<Footer />
